import { musicas } from "@prisma/client";
import prisma from "../../../../config/prisma";

type dadosCriacaoMusica = Omit<musicas, "id">;
type dadosAtualizacaoMusica = Partial<Omit<musicas, "id" | "artista_id">>;

export class MusicService {
  // Create
  async criarMusica(body: dadosCriacaoMusica) {
    if (!body.nome || !body.artista_id) {
      throw new Error("Nome e ID do artista são dados obrigatórios.");
    }

    const musicaCriada = await prisma.musicas.create({
      data: {
        nome: body.nome,
        album: body.album,
        genero: body.genero,
        artistas: {
          connect: {
            id: body.artista_id,
          },
        },
      },
      include: { artistas: true },
    });

    return musicaCriada;
  }

  // Read
  async listarMusicas() {
    const musicas = await prisma.musicas.findMany({
      orderBy: { nome: "asc" },
      include: { artistas: true },
    });
    return musicas;
  }

  async conseguirMusicaPorId(id: number) {
    if (isNaN(id)) {
      throw new Error("Id da música é inválido.");
    }
    const musicaPorId = await prisma.musicas.findUnique({
      where: { id },
      include: { artistas: true },
    });
    if (!musicaPorId) {
      throw new Error("Música não encontrada.");
    }
    return musicaPorId;
  }

  async conseguirMusicasPorNome(nome: string) {
    if (!nome) {
      throw new Error("Nome inválido ou vazio.");
    }
    const musicasPorNome = await prisma.musicas.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
      include: { artistas: true },
    });
    if (musicasPorNome.length === 0) {
      throw new Error(`Nenhuma música contendo '${nome}' foi encontrada.`);
    }
    return musicasPorNome;
  }

  // Update
  async atualizaMusica(id: number, body: dadosAtualizacaoMusica) {
    await this.conseguirMusicaPorId(id); // Boa prática para garantir que a música existe
    const musicaAtualizada = await prisma.musicas.update({
      data: body,
      where: { id },
      include: { artistas: true },
    });
    return musicaAtualizada;
  }

  // Delete
  async deletaMusica(id: number) {
    // Garante que a música existe antes de tentar deletar
    await this.conseguirMusicaPorId(id);

    const musicaDeletada = await prisma.$transaction(async (tx) => {

      await tx.reproduções.deleteMany({
        where: { musica_id: id },
      });
      
      const musica = await tx.musicas.delete({
        where: { id },
      });

      return musica;
    });

    return musicaDeletada;
  }
}

export default new MusicService();
