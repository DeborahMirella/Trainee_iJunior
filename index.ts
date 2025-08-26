import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import routes from "./src/routes";
import { errorHandler } from "./src/middlewares/errorHandler";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Middleware de log de requisições
app.use((req: Request, _res: Response, next: NextFunction) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

// Rotas
app.use("/", routes);

// Middleware global de tratamento de erros
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	console.error("Erro global:", err);
	errorHandler(err as Error, _req, res, _next);
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
