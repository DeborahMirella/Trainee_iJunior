import musicasService from "../services/musicasService";
import { prismaMock } from "../../../../config/singleton";

describe("MusicasService", () => {
	const mockMusica = {
		id: 1,
		nome: "Musica Teste",
		genero: "Pop",
		album: "Album Teste",
		artista_id: 1,
	};

	test("should create new musica", async () => {
		prismaMock.musicas.create.mockResolvedValue(mockMusica);

		await expect(
			musicasService.createMusica({
				nome: mockMusica.nome,
				genero: mockMusica.genero,
				album: mockMusica.album,
				artista_id: mockMusica.artista_id,
			})
		).resolves.toEqual(mockMusica);
	});

	test("should update musica", async () => {
		const musicaAtualizada = { ...mockMusica, nome: "Musica Atualizada" };
		prismaMock.musicas.update.mockResolvedValue(musicaAtualizada);

		await expect(
			musicasService.updateMusica(mockMusica.id, { nome: "Musica Atualizada" })
		).resolves.toEqual(musicaAtualizada);
	});
});
