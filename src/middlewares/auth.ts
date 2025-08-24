import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Interface para o payload do JWT
interface JwtPayload {
  id: number;
  privilegio: "USER" | "ADMIN";
}

// Extende o Request do Express para incluir o usuário autenticado
export interface AuthRequest extends Request {
  user?: JwtPayload;
}

// Middleware de autenticação
export const autenticar = (req: AuthRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ erro: "Token não fornecido" });
	}

	const token = authHeader.split(" ")[1]; // Bearer <token>

	if (!token) {
		return res.status(401).json({ erro: "Token inválido" });
	}

	try {
		const secret = process.env.JWT_SECRET || "segredo"; // use variável de ambiente em produção
		const decoded = jwt.verify(token, secret) as JwtPayload;
		req.user = decoded; // adiciona dados do usuário no request
		next(); // continua para a rota
	} catch (error: unknown) {
		console.error(error); // usado para depuração
		return res.status(401).json({ erro: "Token inválido ou expirado" });
	}
};
