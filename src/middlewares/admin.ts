/*// src/middlewares/admin.ts
import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth";

// Middleware para permitir apenas administradores
export const apenasAdmin = (
	req: AuthRequest,
	res: Response,
	next: NextFunction
) => {
	if (!req.user) {
		return res.status(401).json({ erro: "Usuário não autenticado" });
	}

	if (req.user.privilegio !== "ADMIN") {
		return res
			.status(403)
			.json({ erro: "Acesso restrito a administradores" });
	}

	next();
};
*/
