import { Router } from "express";
import usuariosRouter from "./domains/usuarios/controllers/usuariosController";
import artistasRouter from "./domains/artistas/controllers/artistasController";
import musicasRouter from "./domains/musicas/controllers/musicasController";
import reproducoesRouter from "./domains/reproducoes/controllers/reproducoesController";
import { verifyJWT, checkRole } from "./middlewares/auth";

const router = Router();

// usuários
router.use("/usuarios", usuariosRouter);

// artistas
router.use("/artistas", artistasRouter);

// músicas (JWT + admin)
router.use("/musicas", verifyJWT, checkRole("admin"), musicasRouter);

// reproduções
router.use("/reproducoes", reproducoesRouter);

export default router;
