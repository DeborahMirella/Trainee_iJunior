import { Request, Response, NextFunction } from "express";
import { sign, verify } from "jsonwebtoken";
interface JwtPayload {
    id: number;
    role: string;
    nome: string;
}

export function generateJWT(user: { id: number; nome: string; privilegios: string }, res: Response) {
	const payload: JwtPayload = { id: user.id, nome: user.nome, role: user.privilegios };

	const secretKey = process.env.SECRET_KEY || "SECRET";
	const token = sign({ user: payload }, secretKey, { expiresIn: 3600 });

	res.cookie("jwt", token, { httpOnly: true, sameSite: "strict" });
	return token; // retornando token para Postman
}

export async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const { email, senha } = req.body;
		if (!email || !senha) return res.status(400).json({ erro: "Email e senha são obrigatórios" });

		// Mock: busca usuário
		const usuarios = [
			{ id: 1, nome: "Hermes", email: "hermes@email.com", senha: "1234", privilegios: "admin" },
			{ id: 2, nome: "Maria", email: "maria@email.com", senha: "1234", privilegios: "comum" }
		];
		const user = usuarios.find(u => u.email === email && u.senha === senha);
		if (!user) return res.status(401).json({ erro: "Email ou senha incorretos" });

		const token = generateJWT(user, res);
		return res.json({ message: "Login realizado com sucesso", token });
	} catch (error) {
		next(error);
	}
}

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(" ")[1] || req.cookies.jwt;

	if (!token) return res.status(401).json({ erro: "Acesso negado. Nenhum token fornecido" });

	try {
		const secretKey = process.env.SECRET_KEY || "SECRET";
		const decoded = verify(token, secretKey) as { user: JwtPayload };
		req.user = decoded.user;
		next();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return res.status(401).json({ erro: "Token inválido" });
	}
}

export function checkRole(allowedRoles: string[]) {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.user || !allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ erro: "Acesso proibido" });
		}
		next();
	};
}
