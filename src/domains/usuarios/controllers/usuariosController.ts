// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router, Request, Response, NextFunction } from "express";
import { login } from "../../../middlewares/auth";

const router = Router();

// Mock: lista de usuários (em memória só para teste)
const usuarios = [
	{ id: 1, nome: "Hermes", email: "hermes@email.com", senha: "1234", privilegios: "admin" },
	{ id: 2, nome: "Maria", email: "maria@email.com", senha: "1234", privilegios: "comum" }
];

// GET /usuarios → lista todos
router.get("/", (req: Request, res: Response) => {
	return res.json(usuarios.map(u => ({ id: u.id, nome: u.nome, email: u.email })));
});

// GET /usuarios/:id → busca por id
router.get("/:id", (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = usuarios.find(u => u.id === Number(id));

	if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
	return res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
});

// POST /usuarios → cria novo
router.post("/", (req: Request, res: Response) => {
	const { nome, email, senha, privilegios } = req.body;

	if (!nome || !email || !senha) {
		return res.status(400).json({ erro: "Nome, email e senha são obrigatórios" });
	}

	const novoUsuario = {
		id: usuarios.length + 1,
		nome,
		email,
		senha,
		privilegios: privilegios || "comum"
	};

	usuarios.push(novoUsuario);
	return res.status(201).json({ id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email });
});

// PUT /usuarios/:id → atualiza
router.put("/:id", (req: Request, res: Response) => {
	const { id } = req.params;
	const { nome, email, senha, privilegios } = req.body;

	const usuarioIndex = usuarios.findIndex(u => u.id === Number(id));

	if (usuarioIndex === -1) return res.status(404).json({ erro: "Usuário não encontrado" });

	usuarios[usuarioIndex] = {
		...usuarios[usuarioIndex],
		nome: nome || usuarios[usuarioIndex].nome,
		email: email || usuarios[usuarioIndex].email,
		senha: senha || usuarios[usuarioIndex].senha,
		privilegios: privilegios || usuarios[usuarioIndex].privilegios
	};

	return res.json({ id: usuarios[usuarioIndex].id, nome: usuarios[usuarioIndex].nome, email: usuarios[usuarioIndex].email });
});

// DELETE /usuarios/:id → remove
router.delete("/:id", (req: Request, res: Response) => {
	const { id } = req.params;

	const usuarioIndex = usuarios.findIndex(u => u.id === Number(id));
	if (usuarioIndex === -1) return res.status(404).json({ erro: "Usuário não encontrado" });

	const removido = usuarios.splice(usuarioIndex, 1);
	return res.json({ id: removido[0].id, nome: removido[0].nome, email: removido[0].email });
});

// POST /usuarios/login → login
router.post("/login", login);

export default router;
