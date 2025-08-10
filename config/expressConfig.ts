import cors, { CorsOptions } from "cors";
import express, { Express } from "express";
import dotenv from "dotenv";

import usuariosRouter from "../src/domains/usuarios/Controllers/index";
import reproducoesRouter from "../src/domains/reproducoes/Controllers/index"; // <-- importa o router reproducoes

dotenv.config();

export const app: Express = express();

const options: CorsOptions = {
    credentials: true,
    origin: process.env.APP_URL
}

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// rota de usuários
app.use("/api/usuarios", usuariosRouter);

// rota de reproduções
app.use("/api/reproducoes", reproducoesRouter);
