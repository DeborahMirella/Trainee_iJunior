import { Request, Response, NextFunction } from "express";
import statusCodes from "../utils/constants/statusCode";

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) {
	console.error(err.stack);
	res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
		message: err.message || "Erro interno no servidor",
	});
}
