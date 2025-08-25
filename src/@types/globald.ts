interface JwtPayload {
	id: number;
	role: string;
	nome: string;
}

declare global {
	namespace Express {
		export interface Request {
			user?: JwtPayload;
		}
	}
}

export {};
