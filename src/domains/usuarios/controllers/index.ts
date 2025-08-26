import { NextFunction, Router } from "express";
import usuariosService from "../services/usuariosService";
import statusCodes from "../../../../utils/constants/statusCode";
import { verifyJWT } from "../../../middlewares/auth";
const router = Router();

// Criar usuário
router.post("/", async (req, res, next: NextFunction) => {
	try {
		const novoUsuario = await usuariosService.criarUsuario(req.body);
		res.status(statusCodes.CREATED).json(novoUsuario);
	} catch (error) {
		next(error);
	}
});

// Listar todos os usuários
router.get("/", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const usuarios = await usuariosService.listarUsuarios();
		res.status(statusCodes.SUCESS).json(usuarios);
	} catch (error) {
		next(error);
	}
});

// Atualizar usuário
router.put("/:id", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const { id } = req.params;
		const usuarioAtualizado = await usuariosService.atualizarUsuario(
			Number(id),
			req.body
		);
		res.status(statusCodes.SUCESS).json(usuarioAtualizado);
	} catch (error) {
		next(error);
	}
});

// Deletar usuário
router.delete("/:id", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const { id } = req.params;
		await usuariosService.deletarUsuario(Number(id));
		res.status(statusCodes.NO_CONTENT).send();
	} catch (error) {
		next(error);
	}
});

export default router;
