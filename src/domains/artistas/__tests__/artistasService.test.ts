import artistasService from "../services/artistasService";
import { prismaMock } from "../../../../config/singleton";

describe("ArtistasService", () => {
	const mockArtista = {
		id: 1,
		nome: "Artista Teste",
		foto: null,
		numero_streams: 0,
	};

	test("should create new artista", async () => {
		prismaMock.artistas.create.mockResolvedValue(mockArtista);

		await expect(
			artistasService.createArtista({ nome: mockArtista.nome })
		).resolves.toEqual(mockArtista);
	});

	test("should update artista", async () => {
		const artistaAtualizado = { ...mockArtista, nome: "Artista Atualizado" };
		prismaMock.artistas.update.mockResolvedValue(artistaAtualizado);

		await expect(
			artistasService.updateArtista(mockArtista.id, { nome: "Artista Atualizado" })
		).resolves.toEqual(artistaAtualizado);
	});
});
