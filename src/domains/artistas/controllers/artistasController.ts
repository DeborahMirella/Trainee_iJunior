import { Router, Request, Response, NextFunction } from "express";
import artistasService from "../services/artistasService";
import statusCodes from "../../../utils/constants/statusCode";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const artistas = await artistasService.getAllArtistas();
		res.status(statusCodes.SUCCESS).json(artistas);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		const artista = await artistasService.findArtistaById(id);
		res.status(statusCodes.SUCCESS).json(artista);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const novoArtista = await artistasService.createArtista(req.body);
		res.status(statusCodes.CREATED).json(novoArtista);
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		const artistaAtualizado = await artistasService.updateArtista(id, req.body);
		res.status(statusCodes.SUCCESS).json(artistaAtualizado);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		await artistasService.deleteArtista(id);
		res.status(statusCodes.NO_CONTENT).send();
	} catch (error) {
		next(error);
	}
});

export default router;
