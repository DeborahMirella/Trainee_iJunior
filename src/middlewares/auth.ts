/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "defaultSecret";

// middleware para verificar JWT
export function verifyJWT(req: Request, res: Response, next: NextFunction) {
	const token = req.headers["authorization"];
	if (!token) return res.status(401).json({ message: "Token não fornecido" });

	jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
		if (err) return res.status(403).json({ message: "Token inválido" });
		(req as any).user = decoded;
		next();
	});
}

// middleware para verificar papel (role)
export function checkRole(role: string) {
	return (req: Request, res: Response, next: NextFunction) => {
		const user = (req as any).user;
		if (!user || user.role !== role) {
			return res.status(403).json({ message: "Acesso negado" });
		}
		next();
	};
}
