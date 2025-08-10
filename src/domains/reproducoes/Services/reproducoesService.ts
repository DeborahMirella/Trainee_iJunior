import prisma from "../../../../config/prisma";

export async function criarReproducao(dados: {
  usuario_id: number,
  musica_id: number,
  data_escuta: Date
}) {
	const reproducao = await prisma.reproduções.create({
		data: dados
	});
	return reproducao;
}

export async function listarReproducoes() {
	const reproducoes = await prisma.reproduções.findMany({
		include: {
			usuarios: true,
			musicas: true
		}
	});
	return reproducoes;
}

export async function atualizarReproducao(
	usuario_id: number,
	musica_id: number,
	data_escuta: Date,
	novosDados: {
    data_escuta?: Date
  }
) {
	const reproducao = await prisma.reproduções.update({
		where: {
			usuario_id_musica_id_data_escuta: {
				usuario_id,
				musica_id,
				data_escuta
			}
		},
		data: novosDados
	});
	return reproducao;
}

export async function deletarReproducao(
	usuario_id: number,
	musica_id: number,
	data_escuta: Date
) {
	await prisma.reproduções.delete({
		where: {
			usuario_id_musica_id_data_escuta: {
				usuario_id,
				musica_id,
				data_escuta
			}
		}
	});
}
