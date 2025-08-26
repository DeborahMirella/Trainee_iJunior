// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router, Request, Response, NextFunction } from "express";
import { verifyJWT, checkRole } from "../../../middlewares/auth";

const router = Router();

const musicas = [
	{ id: 1, nome: "Pais e Filhos", genero: "Rock", artistaId: 1 },
	{ id: 2, nome: "Envolver", genero: "Pop", artistaId: 2 },
];

// POST /musicas → cria nova (admin)
router.post("/", verifyJWT, checkRole(["admin"]), (req: Request, res: Response) => {
	const { nome, genero, artistaId } = req.body;
	if (!nome || !genero || !artistaId) return res.status(400).json({ erro: "Campos obrigatórios faltando" });

	const nova = { id: musicas.length + 1, nome, genero, artistaId };
	musicas.push(nova);
	return res.status(201).json(nova);
});

// GET /musicas → lista todas
router.get("/", verifyJWT, (req: Request, res: Response) => {
	return res.json(musicas);
});

// GET /musicas/:id → busca por id
router.get("/:id", verifyJWT, (req: Request, res: Response) => {
	const musica = musicas.find(m => m.id === Number(req.params.id));
	if (!musica) return res.status(404).json({ erro: "Música não encontrada" });
	return res.json(musica);
});

// GET /musicas/nome/:nome → busca por nome
router.get("/nome/:nome", verifyJWT, (req: Request, res: Response) => {
	const resultado = musicas.filter(m => m.nome.toLowerCase().includes(req.params.nome.toLowerCase()));
	return res.json(resultado);
});

// PATCH /musicas/:id → atualiza (admin)
router.patch("/:id", verifyJWT, checkRole(["admin"]), (req: Request, res: Response) => {
	const idx = musicas.findIndex(m => m.id === Number(req.params.id));
	if (idx === -1) return res.status(404).json({ erro: "Música não encontrada" });

	const { nome, genero, artistaId } = req.body;
	musicas[idx] = {
		...musicas[idx],
		nome: nome || musicas[idx].nome,
		genero: genero || musicas[idx].genero,
		artistaId: artistaId || musicas[idx].artistaId,
	};
	return res.json(musicas[idx]);
});

// DELETE /musicas/:id → remove (admin)
router.delete("/:id", verifyJWT, checkRole(["admin"]), (req: Request, res: Response) => {
	const idx = musicas.findIndex(m => m.id === Number(req.params.id));
	if (idx === -1) return res.status(404).json({ erro: "Música não encontrada" });

	const removido = musicas.splice(idx, 1);
	return res.json(removido[0]);
});

export default router;
