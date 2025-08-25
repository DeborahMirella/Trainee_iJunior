import { Router, Request, Response } from "express";

const router = Router();

const artistas = [
	{ id: 1, nome: "Legião Urbana", genero: "Rock" },
	{ id: 2, nome: "Anitta", genero: "Pop" },
];

// GET /artistas
router.get("/", (req: Request, res: Response) => {
	return res.json(artistas);
});

// GET /artistas/:id
router.get("/:id", (req: Request, res: Response) => {
	const artista = artistas.find((a) => a.id === Number(req.params.id));
	if (!artista)
		return res.status(404).json({ erro: "Artista não encontrado" });
	return res.json(artista);
});

// POST /artistas
router.post("/", (req: Request, res: Response) => {
	const { nome, genero } = req.body;
	if (!nome || !genero)
		return res.status(400).json({ erro: "Nome e gênero são obrigatórios" });

	const novo = { id: artistas.length + 1, nome, genero };
	artistas.push(novo);
	return res.status(201).json(novo);
});

// PUT /artistas/:id
router.put("/:id", (req: Request, res: Response) => {
	const { nome, genero } = req.body;
	const idx = artistas.findIndex((a) => a.id === Number(req.params.id));
	if (idx === -1)
		return res.status(404).json({ erro: "Artista não encontrado" });

	artistas[idx] = {
		...artistas[idx],
		nome: nome || artistas[idx].nome,
		genero: genero || artistas[idx].genero,
	};
	return res.json(artistas[idx]);
});

// DELETE /artistas/:id
router.delete("/:id", (req: Request, res: Response) => {
	const idx = artistas.findIndex((a) => a.id === Number(req.params.id));
	if (idx === -1)
		return res.status(404).json({ erro: "Artista não encontrado" });

	const removido = artistas.splice(idx, 1);
	return res.json(removido[0]);
});

export default router;
