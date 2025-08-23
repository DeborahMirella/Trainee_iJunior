import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import MusicaRouter from "../src/domains/musicas/controllers/musicaController";
import ArtistaRouter from "../src/domains/artistas/controllers/artistas.index";
import UsuariosRouter from "../src/domains/usuarios/controllers/index";
import ReproducoesRouter from "../src/domains/reproducoes/controllers/index"
export const app: Express = express();
import cookieParser from 'cookie-parser';
import { errorHandler } from "../src/middlewares/errorHandler"

dotenv.config();

const options: CorsOptions = {
  credentials: true,
  origin: process.env.APP_URL, //APP_URL = "http://localhost/3000"
};

app.use(cors(options));
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// rota de músicas
app.use("/api/musicas", MusicaRouter);

// rota de artistas
app.use("/api/artistas", ArtistaRouter);

// rota de usuários
app.use("/api/usuarios", UsuariosRouter);

// rota de reproduções
app.use("/api/reproducoes", ReproducoesRouter);

app.use(errorHandler);