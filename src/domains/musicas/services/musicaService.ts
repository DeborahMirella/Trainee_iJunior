import { musicas } from "@prisma/client";
import prisma from "../../../../config/prisma";
import { InvalidParamError } from "../../../../errors/InvalidParamError";
import { QueryError } from "../../../../errors/QueryError"
import {NotFoundError} from "../../../../errors/NotFoundError"
import ArtistasService from "../../artistas/services/artistasService";

type dadosCriacaoMusica = Omit<musicas, "id">;
type dadosAtualizacaoMusica = Partial<Omit<musicas, "id" | "artista_id">>;

export class MusicService {
  // Create
  async criarMusica(body: dadosCriacaoMusica) {
    if (!body.nome || !body.artista_id) {
      throw new InvalidParamError("Nome e ID do artista são dados obrigatórios.");
    }

    if(body.artista_id <= 0) {
      throw new InvalidParamError("O id do artista precisa ser positivo e diferente de zero.");
    }

    const verify_artist = await ArtistasService.findArtistaById(body.artista_id);

    if(!verify_artist) {
      throw new NotFoundError(`Artista com id: ${body.artista_id} não existe.`);
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
      throw new InvalidParamError("Id da música é inválido.");
    }
    const musicaPorId = await prisma.musicas.findUnique({
      where: { id },
      include: { artistas: true },
    });

    if (!musicaPorId) {
      throw new NotFoundError(`Música com id: ${id} não encontrada.`) //Retorna esse erro quando nenhuma música é encontrada com o id do param.
    }
    return musicaPorId;
  }

  async conseguirMusicasPorNome(nome: string) {
    if (nome == null) {
      throw new InvalidParamError("Nome inválido ou vazio.");
    }
    const musicasPorNome = await prisma.musicas.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
      include: { artistas: true },
    });

    return musicasPorNome;
  }

  // Update
  async atualizaMusica(id: number, body: dadosAtualizacaoMusica) {
    await this.conseguirMusicaPorId(id);
    
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

// Exporta uma instância pronta para uso
export default new MusicService();
