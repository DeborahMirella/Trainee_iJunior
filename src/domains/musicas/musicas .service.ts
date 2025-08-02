import { Musica } from "@prisma/client";
import prisma from "../../../config/client";
import { Param } from "@prisma/client/runtime/library";

class MusicService {
  //Create - Criação de uma nova música
  async criarMusica(body: Omit<Musica, "id">, artistaId: number) {
    if (!body.nome || !body.duracao || !body.artistaId) {
      throw new Error(
        "O nome, a duração e o id do artista não podem ser nulos."
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
            id: artistaId,
          },
        },
      },
      include: { artista: true },
    });

    return musicaCriada;
  }

  async listarMusicas() {
    const musicas = await prisma.musica.findMany({
      orderBy: { nome: "asc" },
      include: { artista: true },
    });

    if (!(await musicas).length) {
      throw new Error("Nenhuma música encontrada.");
    }
    return musicas;
  }

  async conseguirMusicaPorId(id: number) {
    if (id === null || isNaN(id))
      throw new Error("Id da música é nulo ou inválido.");

    const musicaPorId = await prisma.musica.findUnique({
      where: { id },
    });

    if (!musicaPorId) throw new Error("Música não encontrada.");

    return musicaPorId;
  }

  async conseguirMusicaPorNome(nome: string) {
    if (!nome) throw new Error("Nome inválido ou vazio.");

    const musicaPorNome = await prisma.musica.findFirst({
      where: {
        nome: nome,
      },
    });

    if (!musicaPorNome) throw new Error(`Musica: "${nome}" não encontrada.`);

    return musicaPorNome;
  }
  //async conseguirMusicaPorArtista(){}, preciso de uma funcao do artistaService.

  //Atualizar do CRUD:

  async atualizaMusica(id: number, body: Musica) {
    if (!body.nome) throw new Error("Nome inválido para a música.");
    if (!body.duracao) throw new Error("Duração da música não pode ser nulo.");

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
    });

    return musicaAtualizada;
  }

  //Deletar música - CRUD.

  async deletaMusica(id: number) {
    await this.conseguirMusicaPorId(id);

    const musicaDeletada = await prisma.musica.delete({
      where: {
        id: id,
      },
    });

    return musicaDeletada;
  }

  //
}
