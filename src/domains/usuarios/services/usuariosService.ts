import prisma from "../../../../config/prisma";
import { usuarios, TipoPrivilegio } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { ConflictError } from "../../../../errors/ConflictError";
import { QueryError } from "../../../../errors/QueryError";
import musicaService from "../../musicas/services/musicaService";
import { InvalidParamError } from "../../../../errors/InvalidParamError";


type CreateUserData = {
  nome: string;
  email: string;
  senha: string;
  foto?: string;
  privilegios?: TipoPrivilegio; 
};


type UpdateUserData = Partial<CreateUserData>;


async function encryptPassword(password: string): Promise<string> {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

class UsuariosService {

  async criarUsuario(dados: CreateUserData): Promise<Omit<usuarios, 'senha'>> {
    try {
      if(!dados.nome) {
        throw new InvalidParamError("Nome inválido.");
      }
      if (!dados.senha) {
        throw new InvalidParamError("Senha inválida.");
      }
      if(!dados.email) {
        throw new InvalidParamError("Email inválido.");
      }

      
      const hashedPassword = await encryptPassword(dados.senha);

      
      const novoUsuario = await prisma.usuarios.create({
        data: {
          ...dados,
          senha: hashedPassword, 
        },
        
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          privilegios: true, 
        },
      });

      return novoUsuario;
    } catch (error: any) {
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw new ConflictError("Este email já está em uso.");
      }
      throw new QueryError("Erro interno no servidor.");
    }
  }

  async listarUsuarios(): Promise<Omit<usuarios, 'senha'>[]> {
    try {
      const usuarios = await prisma.usuarios.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          privilegios: true, 
        },
      });
      return usuarios;
    } catch (error) {
      throw new QueryError("Não foi possível buscar os usuários.");
    }
  }

  async atualizarUsuario(id: number, dados: UpdateUserData): Promise<Omit<usuarios, 'senha'>> {
      const dadosParaAtualizar: any = { ...dados };

      if (dados.senha) {
        dadosParaAtualizar.senha = await encryptPassword(dados.senha);
      }

      this.getUserById(id);


      const usuarioAtualizado = await prisma.usuarios.update({
        where: { id },
        data: dadosParaAtualizar,
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          privilegios: true, 
        },
      });

      return usuarioAtualizado;

  }

  async deletarUsuario(id: number): Promise<Omit<usuarios, 'senha'>> {
    
    this.getUserById(id);

      const usuarioDeletado = await prisma.usuarios.delete({
        where: { id },
        select: {
          id: true,
          nome: true,
          email: true,
          foto: true,
          privilegios: true, 
        },
      });
      return usuarioDeletado;

  }

  async getUserById(id: number) {
    if(isNaN(id)){
      throw new InvalidParamError("Id inválido.");
    }
      const userById = await prisma.usuarios.findUnique({
        where: { id },
      });

      if(!userById) {
        throw new NotFoundError(`Usuário com id ${id} não encontrado.`)

      }

      return userById;
  }
}

export default new UsuariosService();