import { Router, Request, Response } from "express";
import reproducoesService from "../services/reproducoesService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const reproducoes = await reproducoesService.getAllReproducoes();
	res.json(reproducoes);
});

router.get("/:usuario_id/:musica_id/:data_escuta", async (req: Request, res: Response) => {
	const { usuario_id, musica_id, data_escuta } = req.params;
	const reproducao = await reproducoesService.getReproducaoById(
		Number(usuario_id),
		Number(musica_id),
		new Date(data_escuta)
	);
	res.json(reproducao);
});

router.post("/", async (req: Request, res: Response) => {
	const reproducao = await reproducoesService.createReproducao(req.body);
	res.json(reproducao);
});

router.put("/:usuario_id/:musica_id/:data_escuta", async (req: Request, res: Response) => {
	const { usuario_id, musica_id, data_escuta } = req.params;
	const reproducao = await reproducoesService.updateReproducao(
		Number(usuario_id),
		Number(musica_id),
		new Date(data_escuta),
		req.body
	);
	res.json(reproducao);
});

router.delete("/:usuario_id/:musica_id/:data_escuta", async (req: Request, res: Response) => {
	const { usuario_id, musica_id, data_escuta } = req.params;
	const reproducao = await reproducoesService.deleteReproducao(
		Number(usuario_id),
		Number(musica_id),
		new Date(data_escuta)
	);
	res.json(reproducao);
});

export default router;
