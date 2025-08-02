import prisma from "../../../../config/prismaClient";

import { artistas } from "@prisma/client";

class ArtistasService {
  
  //Criar
  async createArtista(data: { nome: string; foto?: string | null }): Promise<artistas> {
    try {
      
      const novoArtista = await prisma.artistas.create({
        data: {
          nome: data.nome,
          foto: data.foto,
        },
      });

      return novoArtista;

    } catch (error: any) {
      
      if (error.code === 'P2002' && error.meta?.target?.includes('nome')) {
      console.error("Erro: Tentativa de criar arista com nome duplicado.");
      throw new Error("Já existe um artista com esse nome");
    }

    console.error("Erro ao criar artsita no serviço:", error);
    throw new Error("Não foi possível criar o artista");
   }
  }
  
  //Buscar
  async findAllArtistas(): Promise<artistas[]> {
    try {
      const todosArtistas = await prisma.artistas.findMany({
        include: {
          musicas: true,
        },
      });
      return todosArtistas;
    } catch (error) {
      console.error("Erro ao buscar todos os artistas:", error);
      throw new Error("Não foi possível buscar os artistas.");
    }
  }
  
  //Buscar por ID
  async findArtistaById(id: number): Promise<artistas | null> {
    try {
      const artista = await prisma.artistas.findUnique({
        where: { id },
        include: {
          musicas: true,
        },
      });
      return artista;
    } catch (error) {
      console.error(`Erro ao buscar o artista com ID ${id}:`, error);
      throw new Error("Não foi possível encontrar o artista.");
    }
  }
  
  //Atualizar
  async updateArtista(id: number, data: { nome?: string; foto?: string | null }): Promise<artistas> {
    try {
      const artistaAtualizado = await prisma.artistas.update({
        where: { id },
        data: data,
      });
      return artistaAtualizado;
    } catch (error) {
      console.error(`Erro ao atualizar o artista com ID ${id}:`, error);
      throw new Error("Não foi possível atualizar o artista.");
    }
  }
  
  //Deletar
  async deleteArtista(id: number): Promise<artistas> {
    try {
      const artistaDeletado = await prisma.$transaction(async (tx) => {
        await tx.musicas.deleteMany({ where: { artistaId: id } });
        const artista = await tx.artistas.delete({ where: { id } });
        return artista;
      });
      return artistaDeletado;
    } catch (error) {
      console.error(`Erro ao deletar o artista com ID ${id}:`, error);
      throw new Error("Não foi possível deletar o artista.");
    }
  }
}


export default new ArtistasService();