import { Router, Request, Response, NextFunction } from "express";
import { verifyJWT } from "../../../middlewares/auth";
import statusCodes from "../../../../utils/constants/statusCode";
import { InvalidParamError } from "../../../../errors/InvalidParamError";
import { NotFoundError } from "../../../../errors/NotFoundError";

const router = Router();

// --- LÓGICA MOCK ---
const reproducoes = [
	{ id: 1, usuarioId: 1, musicaId: 1, data: "2025-08-01" },
	{ id: 2, usuarioId: 2, musicaId: 2, data: "2025-08-02" },
];
let proximoId = 3; // Lógica de auto-incremento robusta para o mock
// -------------------------------------------------------------

//Get /reproducoes
router.get(
	"/",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.status(statusCodes.SUCESS).json(reproducoes);
		} catch (error) {
			next(error);
		}
	}
);

//Ger /reproducoes/:id
router.get(
	"/:id",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const idProcurado = Number(req.params.id);

			if (isNaN(idProcurado) || idProcurado <= 0) {
				throw new InvalidParamError(
					"O ID da reprodução deve ser um número inteiro positivo."
				);
			}

			const repr = reproducoes.find((r) => r.id === idProcurado);

			if (!repr) {
				throw new NotFoundError("Reprodução não encontrada");
			}
			res.status(statusCodes.SUCESS).json(repr);
		} catch (error) {
			next(error);
		}
	}
);

// Create
router.post(
	"/",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { usuarioId, musicaId, data } = req.body;

			if (!usuarioId || !musicaId || !data) {
				throw new InvalidParamError(
					"usuarioId, musicaId e data são obrigatórios"
				);
			}
			const novaReproducao = {
				id: proximoId++,
				usuarioId,
				musicaId,
				data,
			};
			reproducoes.push(novaReproducao);

			res.status(statusCodes.CREATED).json(novaReproducao);
		} catch (error) {
			next(error);
		}
	}
);

// Update
router.put(
	"/:id",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const idProcurado = Number(req.params.id);
			const { usuarioId, musicaId, data } = req.body;

			const indice = reproducoes.findIndex((r) => r.id === idProcurado);

			if (indice === -1) {
				throw new NotFoundError("Reprodução não encontrada");
			}

			const reproducaoExistente = reproducoes[indice];
			reproducoes[indice] = {
				...reproducaoExistente,
				usuarioId: usuarioId || reproducaoExistente.usuarioId,
				musicaId: musicaId || reproducaoExistente.musicaId,
				data: data || reproducaoExistente.data,
			};

			res.status(statusCodes.SUCESS).json(reproducoes[indice]);
		} catch (error) {
			next(error);
		}
	}
);

//Delete
router.delete(
	"/:id",
	verifyJWT,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const idProcurado = Number(req.params.id);
			const indice = reproducoes.findIndex((r) => r.id === idProcurado);
			if (indice === -1) {
				throw new NotFoundError("Reprodução não encontrada");
			}

			res.status(statusCodes.NO_CONTENT).send();
			reproducoes.splice(indice, 1);
		} catch (error) {
			next(error);
		}
	}
);

export default router;
