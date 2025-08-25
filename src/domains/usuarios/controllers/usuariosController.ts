import { Router, Request, Response } from "express";

const router = Router();

// Mock: lista de usuários (em memória só para teste)
const usuarios = [
	{ id: 1, nome: "Hermes", email: "hermes@email.com" },
	{ id: 2, nome: "Maria", email: "maria@email.com" }
];

// GET /usuarios → lista todos
router.get("/", (req: Request, res: Response) => {
	return res.json(usuarios);
});

// GET /usuarios/:id → busca por id
router.get("/:id", (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = usuarios.find(u => u.id === Number(id));

	if (!usuario) {
		return res.status(404).json({ erro: "Usuário não encontrado" });
	}
	return res.json(usuario);
});

// POST /usuarios → cria novo
router.post("/", (req: Request, res: Response) => {
	const { nome, email } = req.body;

	if (!nome || !email) {
		return res.status(400).json({ erro: "Nome e email são obrigatórios" });
	}

	const novoUsuario = {
		id: usuarios.length + 1,
		nome,
		email
	};

	usuarios.push(novoUsuario);
	return res.status(201).json(novoUsuario);
});

// PUT /usuarios/:id → atualiza
router.put("/:id", (req: Request, res: Response) => {
	const { id } = req.params;
	const { nome, email } = req.body;

	const usuarioIndex = usuarios.findIndex(u => u.id === Number(id));

	if (usuarioIndex === -1) {
		return res.status(404).json({ erro: "Usuário não encontrado" });
	}

	usuarios[usuarioIndex] = {
		...usuarios[usuarioIndex],
		nome: nome || usuarios[usuarioIndex].nome,
		email: email || usuarios[usuarioIndex].email
	};

	return res.json(usuarios[usuarioIndex]);
});

// DELETE /usuarios/:id → remove
router.delete("/:id", (req: Request, res: Response) => {
	const { id } = req.params;

	const usuarioIndex = usuarios.findIndex(u => u.id === Number(id));

	if (usuarioIndex === -1) {
		return res.status(404).json({ erro: "Usuário não encontrado" });
	}

	const removido = usuarios.splice(usuarioIndex, 1);
	return res.json(removido[0]);
});

export default router;
