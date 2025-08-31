import usuariosService from "../services/usuariosService";
import { prismaMock } from "../../../../config/singleton";
import { TipoPrivilegio } from "@prisma/client";

describe("UsuariosService", () => {
	const mockUsuario = {
		id: 1,
		nome: "Hermes",
		email: "hermes@teste.com",
		senha: "123456",
		foto: null,
		privilegios: TipoPrivilegio.comum,
	};

	test("should create new usuario", async () => {
		prismaMock.usuarios.create.mockResolvedValue(mockUsuario);

		await expect(
			usuariosService.createUsuario({
				nome: mockUsuario.nome,
				email: mockUsuario.email,
				senha: mockUsuario.senha,
				foto: undefined,
			})
		).resolves.toEqual(mockUsuario);
	});

	test("should update usuario", async () => {
		const usuarioAtualizado = { ...mockUsuario, nome: "Hermes C." };
		prismaMock.usuarios.update.mockResolvedValue(usuarioAtualizado);

		await expect(
			usuariosService.updateUsuario(mockUsuario.id, { nome: "Hermes C." })
		).resolves.toEqual(usuarioAtualizado);
	});
});
