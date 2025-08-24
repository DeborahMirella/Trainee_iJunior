import { Router } from "express";
import usuariosController from "./domains/usuarios/controllers/usuariosController";
import artistasController from "./domains/artistas/controllers/artistasController";
import musicasController from "./domains/musicas/controllers/musicasController";
import reproducoesController from "./domains/reproducoes/controllers/reproducoesController";

const routes = Router();

// Rotas de usuários
routes.use("/usuarios", usuariosController);

// Rotas de artistas
routes.use("/artistas", artistasController);

// Rotas de músicas
routes.use("/musicas", musicasController);

// Rotas de reproduções
routes.use("/reproducoes", reproducoesController);

export default routes;
