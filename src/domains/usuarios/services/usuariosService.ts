import prisma from "../../../../config/prisma";

const getAllUsuarios = async () => {
	return await prisma.usuarios.findMany();
};

const getUsuarioById = async (id: number) => {
	return await prisma.usuarios.findUnique({
		where: { id },
	});
};

const createUsuario = async (data: { nome: string; email: string; senha: string; foto?: string }) => {
	return await prisma.usuarios.create({ data });
};

const updateUsuario = async (id: number, data: { nome?: string; email?: string; senha?: string; foto?: string }) => {
	return await prisma.usuarios.update({
		where: { id },
		data,
	});
};

const deleteUsuario = async (id: number) => {
	return await prisma.usuarios.delete({
		where: { id },
	});
};

export default {
	getAllUsuarios,
	getUsuarioById,
	createUsuario,
	updateUsuario,
	deleteUsuario,
};
