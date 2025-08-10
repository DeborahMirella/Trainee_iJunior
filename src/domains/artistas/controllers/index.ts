import { Router } from "express";

import ArtistasService from '../services/artistasService';

const router = Router();

router.post("/", async (req, res) => {
    try {
       
        const novoArtista = await ArtistasService.createArtista(req.body);
        res.status(201).json(novoArtista);

    } catch (error: unknown) {
        if (error instanceof Error) {

            
            res.status(400).json({ erro: error.message });
        } else {
            res.status(500).json({ erro: "Ocorreu um erro desconhecido ao criar o artista." });
        }
    }
});

router.get("/", async (req, res) => {
    try {
       
        const artistas = await ArtistasService.findAllArtistas();
        res.status(200).json(artistas);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ erro: error.message });
        } else {
            res.status(500).json({ erro: "Ocorreu um erro desconhecido ao listar os artistas." });
        }
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const artista = await ArtistasService.findArtistaById(Number(id));
        
        if (!artista) {
            return res.status(404).json({ erro: "Artista não encontrado." });
        }
        
        res.status(200).json(artista);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ erro: error.message });
        } else {
            res.status(500).json({ erro: "Ocorreu um erro desconhecido ao buscar o artista." });
        }
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        const artistaAtualizado = await ArtistasService.updateArtista(Number(id), req.body);
        res.status(200).json(artistaAtualizado);
    } catch (error: unknown) {
      
        if (error instanceof Error) {
            res.status(400).json({ erro: error.message });
        } else {
            res.status(500).json({ erro: "Ocorreu um erro desconhecido ao atualizar o artista." });
        }
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
       
        await ArtistasService.deleteArtista(Number(id));
        res.status(204).send(); 

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ erro: error.message });
        } else {
            res.status(500).json({ erro: "Ocorreu um erro desconhecido ao deletar o artista." });
        }
    }
});

export default router;
