import prisma from "../../../../config/prisma";
import { artistas } from "@prisma/client";
import { InvalidParamError } from "../../../../errors/InvalidParamError";
import { ConflictError } from "../../../../errors/ConflictError";
import { QueryError } from "../../../../errors/QueryError";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { Prisma } from "@prisma/client";

class ArtistasService {
	// Criar
	async createArtista(data: {
		nome: string;
		foto?: string | null;
	}): Promise<artistas> {
		try {
			if (!data.nome) {
				throw new InvalidParamError("Nome inválido.");
			}
			const novoArtista = await prisma.artistas.create({
				data: {
					nome: data.nome,
					foto: data.foto,
				},
			});
			return novoArtista;
		} catch (error: unknown) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					throw new ConflictError(
						"Já existe um artista com esse nome"
					);
				}
			}
			console.error("Erro ao criar artista no serviço:", error);
			throw new QueryError("Não foi possível criar o artista");
		}
	}

	// Buscar todos
	async findAllArtistas(): Promise<artistas[]> {
		const todosArtistas = await prisma.artistas.findMany({
			include: {
				musicas: true,
			},
		});

		if (!todosArtistas) {
			throw new QueryError("Não foi possível buscar os artistas.");
		}

		return todosArtistas;
	}

	// Buscar por ID
	async findArtistaById(id: number): Promise<artistas | null> {
		if (isNaN(id)) {
			throw new InvalidParamError("Id do artista inválido.");
		}
		const artista = await prisma.artistas.findUnique({
			where: { id },
			include: {
				musicas: true,
			},
		});

		if (!artista) {
			throw new NotFoundError(
				`Artista com ${id} não encontrado. Não foi possível buscar artista.`
			);
		}

		return artista;
	}

	// Atualizar
	async updateArtista(
		id: number,
		data: { nome?: string; foto?: string | null }
	): Promise<artistas> {
		this.findArtistaById(id);

		const artistaAtualizado = await prisma.artistas.update({
			where: { id },
			data: data,
		});
		return artistaAtualizado;
	}

	// Deletar
	async deleteArtista(id: number): Promise<artistas> {
		if (isNaN(id)) {
			throw new InvalidParamError("Id do artista inválido.");
		}
		const artistaDeletado = await prisma.$transaction(async (tx) => {
			const artistaExistente = await tx.artistas.findUnique({
				where: { id },
			});
			if (!artistaExistente) {
				throw new NotFoundError(
					`Artista com ID ${id} não encontrado para deleção.`
				);
			}
			await tx.musicas.deleteMany({ where: { artista_id: id } });
			const artista = await tx.artistas.delete({ where: { id } });
			return artista;
		});
		return artistaDeletado;
	}
}

export default new ArtistasService();
