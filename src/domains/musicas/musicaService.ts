import { musicas } from "@prisma/client";
import prisma from "../../../config/prisma";
import { Param } from "@prisma/client/runtime/library";

type dadosCriacaoMusica = Omit<musicas, "id">;
type dadosAtualizacaoMusica = Partial<Omit<musicas, "id" | "artistaId">>;
export class MusicService {
  //Create - Criação de uma nova música
  async criarMusica(body: dadosCriacaoMusica) {
    if (!body.nome || !body.artista_id) {
      //É interessante adicionar o campo duração ao model musicas posteriormente.
      throw new Error(
        "Nome e ID  do artista são dados obrigatórios para a criação."
      );
    }

    const musicaCriada = await prisma.musicas.create({
      data: {
        nome: body.nome,
        //duracao: body.duracao,
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

  //READ - CRUD:

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
          //Linha removida, Motivo: o sqlLite não suporta a ferramenta mode do findMany.
          // mode: "insensitive",
        },
      },
      include: { artistas: true },
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

    const musicaAtualizada = await prisma.musicas.update({
      data: {
        nome: body.nome,
        //duracao: body.duracao,
        genero: body.genero,
        album: body.album,
      },

      where: {
        id: id,
      },

      include: { artistas: true },
    });

    return musicaAtualizada;
  }

  //Deletar música - CRUD.

  async deletaMusica(id: number) {
    await this.conseguirMusicaPorId(id);

    const musicaDeletada = await prisma.musicas.delete({
      where: { id },
    });

    return musicaDeletada;
  }
}
