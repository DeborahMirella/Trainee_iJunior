import prisma from "../../../../config/prismaClient";

import { artistas } from "@prisma/client";

class ArtistasService {

  async createArtista(data: { nome: string; foto?: string }): Promise<artistas> {
    try {
      
      const novoArtista = await prisma.artistas.create({
        data: {
          nome: data.nome,
          foto: data.foto,
        },
      });
      return novoArtista;
    } catch (error) {
      console.error("Erro ao criar artista no serviço:", error);
      throw new Error("Não foi possível criar o artista.");
    }
  }

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

  async updateArtista(id: number, data: { nome?: string; foto?: string }): Promise<artistas> {
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

  async deleteArtista(id: number): Promise<artistas> {
    try {
      const artistaDeletado = await prisma.$transaction(async (tx) => {
        // O acesso aos modelos relacionados também usa minúsculas.
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