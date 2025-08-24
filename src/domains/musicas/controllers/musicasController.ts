import { Router, Request, Response } from "express";

const router = Router();

const musicas = [
	{ id: 1, titulo: "Tempo Perdido", artistaId: 1 },
	{ id: 2, titulo: "Show das Poderosas", artistaId: 2 }
];

// GET /musicas
router.get("/", (req: Request, res: Response) => {
	return res.json(musicas);
});

// GET /musicas/:id
router.get("/:id", (req: Request, res: Response) => {
	const musica = musicas.find(m => m.id === Number(req.params.id));
	if (!musica) return res.status(404).json({ erro: "Música não encontrada" });
	return res.json(musica);
});

// POST /musicas
router.post("/", (req: Request, res: Response) => {
	const { titulo, artistaId } = req.body;
	if (!titulo || !artistaId) return res.status(400).json({ erro: "Título e artistaId são obrigatórios" });

	const nova = { id: musicas.length + 1, titulo, artistaId };
	musicas.push(nova);
	return res.status(201).json(nova);
});

// PUT /musicas/:id
router.put("/:id", (req: Request, res: Response) => {
	const { titulo, artistaId } = req.body;
	const idx = musicas.findIndex(m => m.id === Number(req.params.id));
	if (idx === -1) return res.status(404).json({ erro: "Música não encontrada" });

	musicas[idx] = { ...musicas[idx], titulo: titulo || musicas[idx].titulo, artistaId: artistaId || musicas[idx].artistaId };
	return res.json(musicas[idx]);
});

// DELETE /musicas/:id
router.delete("/:id", (req: Request, res: Response) => {
	const idx = musicas.findIndex(m => m.id === Number(req.params.id));
	if (idx === -1) return res.status(404).json({ erro: "Música não encontrada" });

	const removida = musicas.splice(idx, 1);
	return res.json(removida[0]);
});

export default router;
