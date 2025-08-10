import { Router } from "express";
import { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario } from "../Services/usuariosService";

const router = Router();

// Criar usuário
router.post("/", async (req, res) => {
	try {
		const novoUsuario = await criarUsuario(req.body);
		res.status(201).json(novoUsuario);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Listar todos os usuários
router.get("/", async (req, res) => {
	try {
		const usuarios = await listarUsuarios();
		res.json(usuarios);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Atualizar usuário
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const usuarioAtualizado = await atualizarUsuario(Number(id), req.body);
		res.json(usuarioAtualizado);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Deletar usuário
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await deletarUsuario(Number(id));
		res.status(204).send();
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

export default router;
