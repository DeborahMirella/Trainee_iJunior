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
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader) {
			return res.status(401).json({ erro: "Token não fornecido" });
		}

		const parts = authHeader.split(" ");
		if (parts.length !== 2 || parts[0] !== "Bearer") {
			return res.status(401).json({ erro: "Formato do token inválido" });
		}

		const token = parts[1];

		const secret = process.env.JWT_SECRET || "segredo"; // use variável de ambiente em produção
		const decoded = jwt.verify(token, secret) as JwtPayload;

		// adiciona dados do usuário no request
		req.user = decoded;

		// continua para a rota
		next();

	} catch (error: unknown) {
		console.error("Erro no middleware de autenticação:", error);
		res.status(401).json({ erro: "Token inválido ou expirado" });
	}
};
