import { Router, Request, Response, NextFunction } from "express";
import MusicService from "../services/musicaService";
import musicaService from "../services/musicaService";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  //Retorna todas as musicas
  try {
    const musicas = await MusicService.listarMusicas();
    res.json(musicas);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const musicaPorId = await musicaService.conseguirMusicaPorId(
      Number(req.params.id)
    );
    res.json(musicaPorId);
  } catch (error) {
    next(error);
  }
});

export default router;
