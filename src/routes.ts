import { Router } from "express";
import usuariosController from "./domains/usuarios/controllers/usuariosController";
import artistasController from "./domains/artistas/controllers/artistasController";
import musicasController from "./domains/musicas/controllers/musicasController";
import reproducoesController from "./domains/reproducoes/controllers/reproducoesController";
import { verifyJWT } from "./middlewares/auth";

const routes = Router();

// Rotas de usuários
routes.use("/usuarios", usuariosController);

// Rotas de artistas (necessário autenticação)
routes.use("/artistas", verifyJWT, artistasController);

// Rotas de músicas (necessário autenticação)
routes.use("/musicas", verifyJWT, musicasController);

// Rotas de reproduções (necessário autenticação)
routes.use("/reproducoes", verifyJWT, reproducoesController);

export default routes;
