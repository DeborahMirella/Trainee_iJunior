import prisma from "../../../../config/prisma";

export type DadosCriacaoArtista = {
  nome: string;
};

class ArtistasService {
	async getAllArtistas() {
		return await prisma.artistas.findMany();
	}

	async findArtistaById(id: number) {
		const artista = await prisma.artistas.findUnique({ where: { id } });
		if (!artista) throw new Error("Artista não encontrado");
		return artista;
	}

	async createArtista(data: DadosCriacaoArtista) {
		return await prisma.artistas.create({ data });
	}

	async updateArtista(id: number, data: DadosCriacaoArtista) {
		await this.findArtistaById(id);
		return await prisma.artistas.update({ where: { id }, data });
	}

	async deleteArtista(id: number) {
		await this.findArtistaById(id);
		return await prisma.artistas.delete({ where: { id } });
	}
}

export default new ArtistasService();
