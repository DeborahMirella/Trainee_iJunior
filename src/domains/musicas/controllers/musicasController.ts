import { Router, Request, Response } from "express";
import musicasService from "../services/musicasService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const musicas = await musicasService.getAllMusicas();
	res.json(musicas);
});

router.get("/:id", async (req: Request, res: Response) => {
	const musica = await musicasService.getMusicaById(Number(req.params.id));
	res.json(musica);
});

router.post("/", async (req: Request, res: Response) => {
	const musica = await musicasService.createMusica(req.body);
	res.json(musica);
});

router.put("/:id", async (req: Request, res: Response) => {
	const musica = await musicasService.updateMusica(Number(req.params.id), req.body);
	res.json(musica);
});

router.delete("/:id", async (req: Request, res: Response) => {
	const musica = await musicasService.deleteMusica(Number(req.params.id));
	res.json(musica);
});

export default router;
