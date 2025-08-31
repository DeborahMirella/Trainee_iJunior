import { Router, Request, Response } from "express";
import usuariosService from "../services/usuariosService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const usuarios = await usuariosService.getAllUsuarios();
  res.json(usuarios);
});

router.get("/:id", async (req: Request, res: Response) => {
  const usuario = await usuariosService.getUsuarioById(Number(req.params.id));
  res.json(usuario);
});

router.post("/", async (req: Request, res: Response) => {
  const usuario = await usuariosService.createUsuario(req.body);
  res.json(usuario);
});

router.put("/:id", async (req: Request, res: Response) => {
  const usuario = await usuariosService.updateUsuario(Number(req.params.id), req.body);
  res.json(usuario);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const usuario = await usuariosService.deleteUsuario(Number(req.params.id));
  res.json(usuario);
});

export default router;
