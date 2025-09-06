import prisma from "../../../../config/prisma";

const getAllReproducoes = async () => {
	return await prisma.reproducoes.findMany();
};

const getReproducaoById = async (usuario_id: number, musica_id: number, data_escuta: Date) => {
	return await prisma.reproducoes.findUnique({
		where: { usuario_id_musica_id_data_escuta: { usuario_id, musica_id, data_escuta } },
	});
};

const createReproducao = async (data: { usuario_id: number; musica_id: number; data_escuta: Date }) => {
	return await prisma.reproducoes.create({ data });
};

const updateReproducao = async (
	usuario_id: number,
	musica_id: number,
	data_escuta: Date,
	data: { usuario_id?: number; musica_id?: number; data_escuta?: Date }
) => {
	return await prisma.reproducoes.update({
		where: { usuario_id_musica_id_data_escuta: { usuario_id, musica_id, data_escuta } },
		data,
	});
};

const deleteReproducao = async (usuario_id: number, musica_id: number, data_escuta: Date) => {
	return await prisma.reproducoes.delete({
		where: { usuario_id_musica_id_data_escuta: { usuario_id, musica_id, data_escuta } },
	});
};

export default {
	getAllReproducoes,
	getReproducaoById,
	createReproducao,
	updateReproducao,
	deleteReproducao,
};
