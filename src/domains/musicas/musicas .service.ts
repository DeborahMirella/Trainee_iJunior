import { Musica } from "@prisma/client";
import prisma from "../../../config/client";
import { Param } from "@prisma/client/runtime/library";

type dadosCriacaoMusica = Omit<Musica, "id">;
type dadosAtualizacaoMusica = Partial<Omit<Musica, "id" | "artistaId">>;
export class MusicService {
  //Create - Criação de uma nova música
  async criarMusica(body: dadosCriacaoMusica) {
    if (!body.nome || !body.duracao || !body.artistaId) {
      throw new Error(
        "Nome, Duração e ID  do artista são dados obrigatórios para a criação."
      );
    }

    const musicaCriada = await prisma.musica.create({
      data: {
        nome: body.nome,
        duracao: body.duracao,
        album: body.album,
        genero: body.genero,
        artista: {
          connect: {
            id: body.artistaId,
          },
        },
      },
      include: { artista: true },
    });

    return musicaCriada;
  }

  //READ - CRUD:

  async listarMusicas() {
    const musicas = await prisma.musica.findMany({
      orderBy: { nome: "asc" },
      include: { artista: true },
    });

    return musicas;
  }

  async conseguirMusicaPorId(id: number) {
    if (isNaN(id)) {
      throw new Error("Id da música é inválido.");
    }

    const musicaPorId = await prisma.musica.findUnique({
      where: { id },
      include: { artista: true },
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

    const musicasPorNome = await prisma.musica.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
    });

    if (musicasPorNome.length === 0) {
      throw new Error(`Nenhuma música contendo ${nome} encontrada.`);
    }

    return musicasPorNome;
  }
  //async conseguirMusicaPorArtista(){}, preciso de uma funcao do artistaService.

  //Atualizar do CRUD:

  async atualizaMusica(id: number, body: dadosAtualizacaoMusica) {
    await this.conseguirMusicaPorId(id);

    const musicaAtualizada = await prisma.musica.update({
      data: {
        nome: body.nome,
        duracao: body.duracao,
        genero: body.genero,
        album: body.album,
      },

      where: {
        id: id,
      },

      include: { artista: true },
    });

    return musicaAtualizada;
  }

  //Deletar música - CRUD.

  async deletaMusica(id: number) {
    await this.conseguirMusicaPorId(id);

    const musicaDeletada = await prisma.musica.delete({
      where: { id },
    });

    return musicaDeletada;
  }
}
