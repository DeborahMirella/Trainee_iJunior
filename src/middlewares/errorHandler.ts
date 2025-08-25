import { Request, Response, NextFunction } from "express";
import statusCodes from "../../utils/constants/statusCode";
import { InvalidParamError } from "../../errors/InvalidParamError";
import { InvalidRouteError } from "../../errors/InvalidRouteError";
import { LoginError } from "../../errors/LoginError";
import { NotAuthorizedError } from "../../errors/NotAuthorizedError";
import { PermissionError } from "../../errors/PermissionError";
import { QueryError } from "../../errors/QueryError";
import { TokenError } from "../../errors/TokenError";
import { ConflictError } from "../../errors/ConflictError";
import { NotFoundError } from "../../errors/NotFoundError";

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof InvalidParamError) {
		return res.status(statusCodes.BAD_REQUEST).json({ error: err.message });
	}

	if (err instanceof InvalidRouteError) {
		return res.status(statusCodes.NOT_FOUND).json({ error: err.message });
	}
	if (err instanceof PermissionError) {
		return res.status(statusCodes.FORBIDDEN).json({ error: err.message });
	}
	if (err instanceof NotAuthorizedError || err instanceof LoginError) {
		return res
			.status(statusCodes.UNAUTHORIZED)
			.json({ error: err.message });
	}
	if (err instanceof TokenError) {
		return res
			.status(statusCodes.UNAUTHORIZED)
			.json({ error: err.message });
	}
	if (err instanceof QueryError) {
		return res
			.status(statusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: err.message });
	}

	if (err instanceof ConflictError) {
		return res.status(statusCodes.CONFLICT).json({ error: err.message });
	}

	if (err instanceof NotFoundError) {
		return res.status(statusCodes.NOT_FOUND).json({ error: err.message });
	}

	console.error("Erro inesperado: ", err);
	return res
		.status(statusCodes.INTERNAL_SERVER_ERROR)
		.json({ erro: "Erro interno no servidor." });
}
