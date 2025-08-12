import { Router } from "express";
import {
	criarReproducao,
	listarReproducoes,
	atualizarReproducao,
	deletarReproducao
} from "../services/reproducoesService";

const router = Router();

// Criar reprodução
router.post("/", async (req, res) => {
	try {
		// Espera que o body tenha usuario_id, musica_id e data_escuta
		const { usuario_id, musica_id, data_escuta } = req.body;

		if (!usuario_id || !musica_id || !data_escuta) {
			return res.status(400).json({ erro: "usuario_id, musica_id e data_escuta são obrigatórios" });
		}

		const novaReproducao = await criarReproducao({
			usuario_id,
			musica_id,
			data_escuta: new Date(data_escuta),
		});
		res.status(201).json(novaReproducao);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Listar todas as reproduções
router.get("/", async (_req, res) => {
	try {
		const reproducoes = await listarReproducoes();
		res.json(reproducoes);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Atualizar reprodução
router.put("/:usuario_id/:musica_id/:data_escuta", async (req, res) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;
		const novosDados = req.body;

		if (!usuario_id || !musica_id || !data_escuta) {
			return res.status(400).json({ erro: "usuario_id, musica_id e data_escuta são obrigatórios nos params" });
		}

		const reproducaoAtualizada = await atualizarReproducao(
			Number(usuario_id),
			Number(musica_id),
			new Date(data_escuta),
			novosDados
		);
		res.json(reproducaoAtualizada);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

// Deletar reprodução
router.delete("/:usuario_id/:musica_id/:data_escuta", async (req, res) => {
	try {
		const { usuario_id, musica_id, data_escuta } = req.params;

		if (!usuario_id || !musica_id || !data_escuta) {
			return res.status(400).json({ erro: "usuario_id, musica_id e data_escuta são obrigatórios nos params" });
		}

		await deletarReproducao(
			Number(usuario_id),
			Number(musica_id),
			new Date(data_escuta)
		);
		res.status(204).send();
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ erro: error.message });
		} else {
			res.status(400).json({ erro: "Erro desconhecido" });
		}
	}
});

export default router;
