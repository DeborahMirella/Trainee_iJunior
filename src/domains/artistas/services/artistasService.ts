import prisma from "../../../../config/prisma";
import { artistas } from "@prisma/client";

class ArtistasService {
	// Criar
	async createArtista(data: {
		nome: string;
		foto?: string | null;
	}): Promise<artistas> {
		try {
			const novoArtista = await prisma.artistas.create({
				data: {
					nome: data.nome,
					foto: data.foto,
				},
			});

			return novoArtista;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Erro ao criar artista no serviço:", error.message);
			} else {
				console.error("Erro inesperado:", error);
			}
			throw new Error("Não foi possível criar o artista");
		}
	}

	// Buscar
	async findAllArtistas(): Promise<artistas[]> {
		try {
			const todosArtistas = await prisma.artistas.findMany({
				include: {
					musicas: true,
				},
			});
			return todosArtistas;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Erro ao buscar todos os artistas:", error.message);
			} else {
				console.error("Erro inesperado:", error);
			}
			throw new Error("Não foi possível buscar os artistas.");
		}
	}

	// Buscar por ID
	async findArtistaById(id: number): Promise<artistas | null> {
		try {
			const artista = await prisma.artistas.findUnique({
				where: { id },
				include: {
					musicas: true,
				},
			});
			return artista;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Erro ao buscar o artista com ID ${id}:`, error.message);
			} else {
				console.error(`Erro inesperado ao buscar o artista com ID ${id}:`, error);
			}
			throw new Error("Não foi possível encontrar o artista.");
		}
	}

	// Atualizar
	async updateArtista(
		id: number,
		data: { nome?: string; foto?: string | null }
	): Promise<artistas> {
		try {
			const artistaAtualizado = await prisma.artistas.update({
				where: { id },
				data: data,
			});
			return artistaAtualizado;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Erro ao atualizar o artista com ID ${id}:`, error.message);
			} else {
				console.error(`Erro inesperado ao atualizar o artista com ID ${id}:`, error);
			}
			throw new Error("Não foi possível atualizar o artista.");
		}
	}

	// Deletar
	async deleteArtista(id: number): Promise<artistas> {
		try {
			const artistaDeletado = await prisma.$transaction(async (tx) => {
				await tx.musicas.deleteMany({ where: { artista_id: id } });
				const artista = await tx.artistas.delete({ where: { id } });
				return artista;
			});
			return artistaDeletado;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Erro ao deletar o artista com ID ${id}:`, error.message);
			} else {
				console.error(`Erro inesperado ao deletar o artista com ID ${id}:`, error);
			}
			throw new Error("Não foi possível deletar o artista.");
		}
	}
}

export default new ArtistasService();
