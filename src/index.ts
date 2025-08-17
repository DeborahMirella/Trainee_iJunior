import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

import artistasRouter from "./domains/artistas/controllers/artistasController";
import musicasRouter from "./domains/musicas/controllers/musicaController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.APP_URL, credentials: true }));
app.use(express.json());

// Rotas
app.use("/artistas", artistasRouter);
app.use("/musicas", musicasRouter);

// Middleware de erro
app.use(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(err: Error, _req: Request, res: Response, _next: NextFunction) => {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
