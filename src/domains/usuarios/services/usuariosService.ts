import prisma from "../../../../config/prisma";
import { usuarios, TipoPrivilegio } from "@prisma/client";
import * as bcrypt from "bcrypt";


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
        throw new Error("Este email já está em uso.");
      }
      console.error("Erro ao criar usuário:", error);
      throw new Error("Não foi possível criar o usuário.");
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
      console.error("Erro ao listar usuários:", error);
      throw new Error("Não foi possível buscar os usuários.");
    }
  }

  async atualizarUsuario(id: number, dados: UpdateUserData): Promise<Omit<usuarios, 'senha'>> {
    try {
      const dadosParaAtualizar: any = { ...dados };

      if (dados.senha) {
        dadosParaAtualizar.senha = await encryptPassword(dados.senha);
      }

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
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new Error(`Usuário com ID ${id} não encontrado.`);
      }
      console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
      throw new Error("Não foi possível atualizar o usuário.");
    }
  }

  async deletarUsuario(id: number): Promise<Omit<usuarios, 'senha'>> {
    try {
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
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new Error(`Usuário com ID ${id} não encontrado.`);
      }
      console.error(`Erro ao deletar usuário com ID ${id}:`, error);
      throw new Error("Não foi possível deletar o usuário.");
    }
  }
}

export default new UsuariosService();