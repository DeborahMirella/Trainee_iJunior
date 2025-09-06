import reproducoesService from "../services/reproducoesService";
import { prismaMock } from "../../../../config/singleton";

describe("ReproducoesService", () => {
	const mockReproducao = {
		usuario_id: 1,
		musica_id: 1,
		data_escuta: new Date("2025-08-31T12:00:00"),
	};

	test("should create reproducao", async () => {
		prismaMock.reproducoes.create.mockResolvedValue(mockReproducao);

		await expect(
			reproducoesService.createReproducao({
				usuario_id: mockReproducao.usuario_id,
				musica_id: mockReproducao.musica_id,
				data_escuta: mockReproducao.data_escuta
			})
		).resolves.toEqual(mockReproducao);

	});

	test("should fail to delete non-existent reproducao", async () => {
		prismaMock.reproducoes.delete.mockImplementation(() => {
			throw new Error("Reproducao não encontrada");
		});

		await expect(
			reproducoesService.deleteReproducao(
				mockReproducao.usuario_id,
				mockReproducao.musica_id,
				mockReproducao.data_escuta
			)
		).rejects.toThrow("Reproducao não encontrada");
	});
});
