import { Router, Request, Response } from "express";

const router = Router();

const reproducoes = [
	{ id: 1, usuarioId: 1, musicaId: 1, data: "2025-08-01" },
	{ id: 2, usuarioId: 2, musicaId: 2, data: "2025-08-02" },
];

// GET /reproducoes → lista todas
router.get("/", (req: Request, res: Response) => {
	return res.json(reproducoes);
});

// GET /reproducoes/:id → busca por id
router.get("/:id", (req: Request, res: Response) => {
	const repr = reproducoes.find(r => r.id === Number(req.params.id));
	if (!repr) return res.status(404).json({ erro: "Reprodução não encontrada" });
	return res.json(repr);
});

// POST /reproducoes → cria nova
router.post("/", (req: Request, res: Response) => {
	const { usuarioId, musicaId, data } = req.body;
	if (!usuarioId || !musicaId || !data) return res.status(400).json({ erro: "Campos obrigatórios faltando" });

	const nova = { id: reproducoes.length + 1, usuarioId, musicaId, data };
	reproducoes.push(nova);
	return res.status(201).json(nova);
});

// PUT /reproducoes/:id → atualiza
router.put("/:id", (req: Request, res: Response) => {
	const idx = reproducoes.findIndex(r => r.id === Number(req.params.id));
	if (idx === -1) return res.status(404).json({ erro: "Reprodução não encontrada" });

	const { usuarioId, musicaId, data } = req.body;
	reproducoes[idx] = {
		...reproducoes[idx],
		usuarioId: usuarioId || reproducoes[idx].usuarioId,
		musicaId: musicaId || reproducoes[idx].musicaId,
		data: data || reproducoes[idx].data,
	};
	return res.json(reproducoes[idx]);
});

export default router;
