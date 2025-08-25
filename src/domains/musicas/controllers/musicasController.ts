import { Router, Request, Response, NextFunction } from "express";
import MusicService from "../services/musicaService";
import musicaService from "../services/musicaService";
//import { ExecSyncOptions } from "child_process";
import statusCodes from "../../../../utils/constants/statusCode";
//import { verify } from "crypto";
import { checkRole } from "../../../middlewares/auth";
import { verifyJWT } from "../../../middlewares/auth";

const router = Router();

router.post(
	"/",
	verifyJWT,
	checkRole(["admin"]),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicaNova = await musicaService.criarMusica(req.body);

			res.status(statusCodes.CREATED).json(musicaNova);
		} catch (error) {
			next(error);
		}
	}
);

//====== Read ========

//Retorna todas as musicas
router.get(
	"/",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicas = await MusicService.listarMusicas();

			res.status(statusCodes.SUCESS).json(musicas);
		} catch (error) {
			next(error);
		}
	}
);

//Consegue música por id
router.get(
	"/:id",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicaPorId = await musicaService.conseguirMusicaPorId(
				Number(req.params.id)
			);
			res.status(statusCodes.SUCESS).json(musicaPorId);
		} catch (error) {
			next(error);
		}
	}
);
//Consegue músicas por nome
router.get(
	"/nome/:nome",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicasPorNome = await musicaService.conseguirMusicasPorNome(
				String(req.params.nome)
			);

			res.status(statusCodes.SUCESS).json(musicasPorNome);
		} catch (error) {
			next(error);
		}
	}
);

//====== Update ======

router.patch(
	"/:id",
	verifyJWT,
	checkRole(["admin"]),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicaId = Number(req.params.id);
			const body = req.body;
			const musicaAtualizada = await musicaService.atualizaMusica(
				musicaId,
				body
			);

			res.status(statusCodes.SUCESS).json(musicaAtualizada);
		} catch (error) {
			next(error);
		}
	}
);
//====== Delete=======

router.delete(
	"/:id",
	verifyJWT,
	checkRole(["admin"]),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const musicaId = Number(req.params.id);

			await musicaService.deletaMusica(musicaId);

			res.status(statusCodes.NO_CONTENT).send();
		} catch (error) {
			next(error);
		}
	}
);
export default router;
