import prisma from "../../../../config/prisma";

const getAllMusicas = async () => {
	return await prisma.musicas.findMany();
};

const getMusicaById = async (id: number) => {
	return await prisma.musicas.findUnique({
		where: { id },
	});
};

const createMusica = async (data: { nome: string; genero?: string; album?: string; artista_id: number }) => {
	return await prisma.musicas.create({ data });
};

const updateMusica = async (id: number, data: { nome?: string; genero?: string; album?: string; artista_id?: number }) => {
	return await prisma.musicas.update({
		where: { id },
		data,
	});
};

const deleteMusica = async (id: number) => {
	return await prisma.musicas.delete({
		where: { id },
	});
};

export default {
	getAllMusicas,
	getMusicaById,
	createMusica,
	updateMusica,
	deleteMusica,
};
