import { NextFunction, Router } from "express";
import {
	criarReproducao,
	listarReproducoes,
	atualizarReproducao,
	deletarReproducao,
} from "../services/reproducoesService"
import statusCodes from "../../../../utils/constants/statusCode"
const router = Router();

// Criar reprodução
router.post("/", async (req, res, next: NextFunction) => {
	try {
		// Espera que o body tenha usuario_id, musica_id e data_escuta
		const { usuario_id, musica_id, data_escuta } = req.body;

		const novaReproducao = await criarReproducao({
			usuario_id,
			musica_id,
			data_escuta: new Date(data_escuta),
		});
		res.status(statusCodes.CREATED).json(novaReproducao);

	} catch (error) {
		next(error);
	}
});

// Listar todas as reproduções
router.get("/", async (_req, res, next: NextFunction) => {
	try {
		const reproducoes = await listarReproducoes();
		res.status(statusCodes.SUCESS).json(reproducoes);
	} catch (error) {
		next(error);
	}
});

// Atualizar reprodução
router.put("/:usuario_id/:musica_id/:data_escuta", async (req, res, next: NextFunction) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;
		const novosDados = req.body;

		const reproducaoAtualizada = await atualizarReproducao(
			Number(usuario_id),
			Number(musica_id),
			new Date(data_escuta),
			novosDados
		);
		res.status(statusCodes.SUCESS).json(reproducaoAtualizada);

	} catch (error: unknown) {
		next(error);
	}
});

// Deletar reprodução
router.delete("/:usuario_id/:musica_id/:data_escuta", async (req, res, next: NextFunction) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;
		
		await deletarReproducao(
			Number(usuario_id),
			Number(musica_id),
			new Date(data_escuta)
		);
		res.status(statusCodes.NO_CONTENT).send();
	} catch (error) {
		next(error);
	}
});

export default router;
