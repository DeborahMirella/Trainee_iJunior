import { NextFunction, Router } from "express";
import { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario } from "../services/usuariosService";
import statusCodes from "../../../../utils/constants/statusCode";

const router = Router();

// Criar usuário
router.post("/", async (req, res, next: NextFunction) => {
	try {
		const novoUsuario = await criarUsuario(req.body);
		res.status(statusCodes.CREATED).json(novoUsuario);
	} catch (error) {
		next(error);
	}
});

// Listar todos os usuários
router.get("/", async (req, res, next: NextFunction) => {
	try {
		const usuarios = await listarUsuarios();
		res.status(statusCodes.SUCESS).json(usuarios);
	} catch (error) {
	next(error);
	}
});

// Atualizar usuário
router.put("/:id", async (req, res, next: NextFunction) => {
	try {
		const { id } = req.params;
		const usuarioAtualizado = await atualizarUsuario(Number(id), req.body);
		res.status(statusCodes.SUCESS).json(usuarioAtualizado);
	} catch (error) {
		next(error);
	}
});

// Deletar usuário
router.delete("/:id", async (req, res, next: NextFunction) => {
	try {
		const { id } = req.params;
		await deletarUsuario(Number(id));
		res.status(statusCodes.NO_CONTENT).send();
	} catch (error) {
		next(error);
	}
});

export default router;
