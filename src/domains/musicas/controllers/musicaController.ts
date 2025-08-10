import { Router, Request, Response, NextFunction } from "express";
import MusicService from "../services/musicaService";
import musicaService from "../services/musicaService";
import { ExecSyncOptions } from "child_process";

const router = Router();
//====== Create ======

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const musicaNova = await musicaService.criarMusica(req.body);

    res.status(201).json(musicaNova);
  } catch (error) {
    next(error);
  }
});

//====== Read ========

//Retorna todas as musicas
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const musicas = await MusicService.listarMusicas();
    res.json(musicas);
  } catch (error) {
    next(error);
  }
});

//Consegue música por id
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
//Consegue músicas por nome
router.get(
  "/nome/:nome",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const musicasPorNome = await musicaService.conseguirMusicasPorNome(
        String(req.params.nome)
      );
      res.json(musicasPorNome);
    } catch (error) {
      next(error);
    }
  }
);

//====== Update ======

router.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const musicaId = Number(req.params.id);
      const body = req.body;
      const musicaAtualizada = await musicaService.atualizaMusica(
        musicaId,
        body
      );

      res.status(200).json(musicaAtualizada);
    } catch (error) {
      next(error);
    }
  }
);
//====== Delete=======

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const musicaId = Number(req.params.id);

      const musicaDeleteda = await musicaService.deletaMusica(musicaId);

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
);
export default router;
