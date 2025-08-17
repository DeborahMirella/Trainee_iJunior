import prisma from "../../../../config/prisma";
import { artistas } from "@prisma/client";

class ArtistasService {
  // Criar
  async createArtista(data: {
    nome: string;
    foto?: string | null;
  }): Promise<artistas> {
    try {
      const novoArtista = await prisma.artistas.create({
        data: {
          nome: data.nome,
          foto: data.foto,
        },
      });
      return novoArtista;
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("nome")) {
        throw new Error("Já existe um artista com esse nome");
      }
      console.error("Erro ao criar artista no serviço:", error);
      throw new Error("Não foi possível criar o artista");
    }
  }

  // Buscar todos
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

  // Buscar por ID
  async findArtistaById(id: number): Promise<artistas | null> {
    try {
      const artista = await prisma.artistas.findUnique({
        where: { id },
        include: {
          musicas: true,
        },
      });
      if (!artista) {
        throw new Error("Artista não encontrado.");
      }
      return artista;
    } catch (error: any) {
      console.error(`Erro ao buscar o artista com ID ${id}:`, error);
      throw new Error(error.message || "Não foi possível encontrar o artista.");
    }
  }

  // Atualizar
  async updateArtista(
    id: number,
    data: { nome?: string; foto?: string | null }
  ): Promise<artistas> {
    try {
      const artistaAtualizado = await prisma.artistas.update({
        where: { id },
        data: data,
      });
      return artistaAtualizado;
    } catch (error: any) {
      // Prisma lança o erro P2025 quando o registro a ser atualizado não existe.
      if (error.code === 'P2025') {
        throw new Error(`Artista com ID ${id} não encontrado para atualização.`);
      }
      console.error(`Erro ao atualizar o artista com ID ${id}:`, error);
      throw new Error("Não foi possível atualizar o artista.");
    }
  }

  // Deletar
  async deleteArtista(id: number): Promise<artistas> {
    try {
      
      const artistaDeletado = await prisma.$transaction(async (tx) => {
        
        const artistaExistente = await tx.artistas.findUnique({ where: { id } });
        if (!artistaExistente) {
          throw new Error(`Artista com ID ${id} não encontrado para deleção.`);
        }
        await tx.musicas.deleteMany({ where: { artista_id: id } });
        const artista = await tx.artistas.delete({ where: { id } });
        return artista;
      });
      return artistaDeletado;
    } catch (error: any) {
      console.error(`Erro ao deletar o artista com ID ${id}:`, error);
      throw new Error(error.message || "Não foi possível deletar o artista.");
    }
  }
}

export default new ArtistasService();
