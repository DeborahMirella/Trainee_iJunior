import { NextFunction, Router } from "express";
import reproducoesService from "../services/reproducoesService";
import statusCodes from "../../../../utils/constants/statusCode";
import { verifyJWT } from "../../../middlewares/auth";
const router = Router();

// Criar reprodução
router.post("/", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.body;

		const novaReproducao = await reproducoesService.criarReproducao({
			usuario_id,
			musica_id,
			data_escuta,
		});
		res.status(statusCodes.CREATED).json(novaReproducao);

	} catch (error) {
		next(error);
	}
});

// Listar todas as reproduções
router.get("/", verifyJWT, async (_req, res, next: NextFunction) => {
	try {
		const reproducoes = await reproducoesService.listarReproducoes();
		res.status(statusCodes.SUCESS).json(reproducoes);
	} catch (error) {
		next(error);
	}
});

// Atualizar reprodução
router.put("/:usuario_id/:musica_id/:data_escuta", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;
		const novosDados = req.body;

		const reproducaoAtualizada = await reproducoesService.atualizarReproducao(
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
router.delete("/:usuario_id/:musica_id/:data_escuta", verifyJWT, async (req, res, next: NextFunction) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;
		
		await reproducoesService.deletarReproducao(
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