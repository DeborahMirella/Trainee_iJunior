import prisma from "../../../../config/prisma";
import { reproduções } from "@prisma/client";

type DadosCriacaoReproducao = {
  musica_id: number;
};

class ReproducoesService {

  async criarReproducao(
    usuarioId: number,
    dados: DadosCriacaoReproducao
  ): Promise<reproduções> {
    
    const musicaExistente = await prisma.musicas.findUnique({
      where: { id: dados.musica_id },
    });
    if (!musicaExistente) {
      throw new Error("Música não encontrada para registrar a reprodução.");
    }

    const reproducao = await prisma.reproduções.create({
      data: {
        usuario_id: usuarioId, 
        musica_id: dados.musica_id,
        data_escuta: new Date(), 
      },
    });
    return reproducao;
  }

  async listarReproducoes(): Promise<reproduções[]> {
    const reproducoes = await prisma.reproduções.findMany({
      include: {
        usuarios: {
          select: { id: true, nome: true, email: true }, // Nunca expor a senha
        },
        musicas: {
          include: { artistas: true },
        },
      },
      orderBy: {
        data_escuta: 'desc',
      }
    });
    return reproducoes;
  }


  async deletarReproducao(
    usuario_id: number,
    musica_id: number,
    data_escuta: Date
  ): Promise<reproduções> {

    const reproducaoDeletada = await prisma.reproduções.delete({
      where: {
        usuario_id_musica_id_data_escuta: {
          usuario_id,
          musica_id,
          data_escuta,
        },
      },
    });
    return reproducaoDeletada;
  }
}

export default new ReproducoesService();
