import express, { Request, Response, NextFunction } from "express";
import routes from "./src/routes";

const app = express();
app.use(express.json());

// Middleware de log de requisições
app.use((req: Request, _res: Response, next: NextFunction) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

// Rotas
app.use("/", routes);

// Middleware global de tratamento de erros
app.use((err: unknown, _req: Request, res: Response) => {
	console.error("Erro global:", err);

	if (err instanceof Error) {
		return res.status(500).json({ erro: err.message });
	}

	return res.status(500).json({ erro: "Erro interno do servidor" });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
