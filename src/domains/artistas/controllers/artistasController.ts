import { Router, Request, Response, NextFunction } from "express";
import ArtistasService from "../services/artistasService";

const router = Router();

// Criar artista
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const artistaCriado = await ArtistasService.createArtista(req.body);
		res.status(201).json(artistaCriado);
	} catch (error) {
		next(error);
	}
});

// Listar todos os artistas
router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const artistas = await ArtistasService.findAllArtistas();
		res.status(200).json(artistas);
	} catch (error) {
		next(error);
	}
});

// Visualizar artista por ID
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		const artista = await ArtistasService.findArtistaById(id);
		if (!artista) return res.status(404).json({ mensagem: "Artista não encontrado" });
		res.status(200).json(artista);
	} catch (error) {
		next(error);
	}
});

// Atualizar artista
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		const artistaAtualizado = await ArtistasService.updateArtista(id, req.body);
		res.status(200).json(artistaAtualizado);
	} catch (error) {
		next(error);
	}
});

// Deletar artista
router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = Number(req.params.id);
		const artistaDeletado = await ArtistasService.deleteArtista(id);
		res.status(200).json(artistaDeletado);
	} catch (error) {
		next(error);
	}
});

export default router;