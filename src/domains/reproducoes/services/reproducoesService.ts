import prisma from "../../../../config/prisma";
import { reproduções } from "@prisma/client";
import musicaService from "../../musicas/services/musicaService";
import usuariosService from "../../usuarios/services/usuariosService";
type DadosCriacaoReproducao = {
	usuario_id: number;
	musica_id: number;
	data_escuta: number;
};

class ReproducoesService {
	async criarReproducao(dados: DadosCriacaoReproducao): Promise<reproduções> {
		usuariosService.getUserById(dados.usuario_id);
		musicaService.conseguirMusicaPorId(dados.musica_id);

		const reproducao = await prisma.reproduções.create({
			data: {
				usuario_id: dados.usuario_id,
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
				data_escuta: "desc",
			},
		});
		return reproducoes;
	}

	async atualizarReproducao(
		usuario_id: number,
		musica_id: number,
		data_escuta: Date,
		novosDados: {
			data_escuta?: Date;
		}
	) {
		usuariosService.getUserById(usuario_id);
		musicaService.conseguirMusicaPorId(musica_id);

		const reproducao = await prisma.reproduções.update({
			where: {
				usuario_id_musica_id_data_escuta: {
					usuario_id,
					musica_id,
					data_escuta,
				},
			},
			data: novosDados,
		});
		return reproducao;
	}

	async deletarReproducao(
		usuario_id: number,
		musica_id: number,
		data_escuta: Date
	): Promise<reproduções> {
		musicaService.conseguirMusicaPorId(musica_id);
		usuariosService.getUserById(usuario_id);

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
