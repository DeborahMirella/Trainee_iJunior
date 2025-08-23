import { NextFunction, Router } from "express";

import ArtistasService from '../services/artistasService';

import statusCodes from "../../../../utils/constants/statusCode";

const router = Router();

router.post("/", async (req, res, next: NextFunction) => {
    try {
       
        const novoArtista = await ArtistasService.createArtista(req.body);
        res.status(statusCodes.CREATED).json(novoArtista);

    } catch (error) {
        next(error);
    }
});

router.get("/", async (req, res, next:NextFunction) => {
    try {
       
        const artistas = await ArtistasService.findAllArtistas();
        res.status(statusCodes.SUCESS).json(artistas);
    } catch (error) {
       next(error)
    }
});

router.get("/:id", async (req, res, next:NextFunction) => {
    try {
        const { id } = req.params;
        
        const artista = await ArtistasService.findArtistaById(Number(id));
        
        if (!artista) {
            return res.status(statusCodes.NOT_FOUND).json({ erro: "Artista não encontrado." });
        }
        
        res.status(statusCodes.SUCESS).json(artista);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next:NextFunction) => {
    try {
        const { id } = req.params;
        
        const artistaAtualizado = await ArtistasService.updateArtista(Number(id), req.body);
        res.status(statusCodes.SUCESS).json(artistaAtualizado);
    } catch (error) {
      next(error);
    }
});

router.delete("/:id", async (req, res, next:NextFunction) => {
    try {
        const { id } = req.params;
       
        await ArtistasService.deleteArtista(Number(id));
        res.status(statusCodes.NO_CONTENT).send(); 

    } catch (error: unknown) {
       next(error);
    }
});

export default router;
