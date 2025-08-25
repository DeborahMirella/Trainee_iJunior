import { Router } from "express";
import {
	criarUsuario,
	listarUsuarios,
	atualizarUsuario,
	deletarUsuario,
	visualizarUsuario, // corrigido
} from "../services/usuariosService";
import { autenticar, AuthRequest } from "../../../middlewares/auth";
import { apenasAdmin } from "../../../middlewares/admin";

const router = Router();

// Criar usuário - acesso aberto
router.post("/", async (req, res) => {
	try {
		const novoUsuario = await criarUsuario(req.body);
		res.status(201).json(novoUsuario);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

// Listar todos os usuários - apenas admin
router.get("/", autenticar, apenasAdmin, async (_req, res) => {
	try {
		const usuarios = await listarUsuarios();
		res.json(usuarios);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

// Visualizar conta própria ou outro usuário - admin pode ver qualquer um
router.get("/me", autenticar, async (req: AuthRequest, res) => {
	try {
		const usuario = await visualizarUsuario(req.user!.id); // corrigido
		res.json(usuario);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

router.get("/:id", autenticar, apenasAdmin, async (req, res) => {
	try {
		const usuario = await visualizarUsuario(Number(req.params.id)); // corrigido
		res.json(usuario);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

// Atualizar conta própria ou outro usuário
router.put("/me", autenticar, async (req: AuthRequest, res) => {
	try {
		const usuarioAtualizado = await atualizarUsuario(req.user!.id, req.body);
		res.json(usuarioAtualizado);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

router.put("/:id", autenticar, apenasAdmin, async (req, res) => {
	try {
		const usuarioAtualizado = await atualizarUsuario(Number(req.params.id), req.body);
		res.json(usuarioAtualizado);
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

// Deletar conta própria ou outro usuário
router.delete("/me", autenticar, async (req: AuthRequest, res) => {
	try {
		await deletarUsuario(req.user!.id);
		res.status(204).send();
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

router.delete("/:id", autenticar, apenasAdmin, async (req, res) => {
	try {
		await deletarUsuario(Number(req.params.id));
		res.status(204).send();
	} catch (error: unknown) {
		res.status(400).json({ erro: (error as Error).message });
	}
});

export default router;
