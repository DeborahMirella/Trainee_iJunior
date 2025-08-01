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
}
