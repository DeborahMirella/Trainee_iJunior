import { MusicService } from "./musicas .service";
import { Musica } from "@prisma/client";
const musicaService = new MusicService();

type dadosCriacaoMusica = Omit<Musica, "id">;
type dadosAtualizacaoMusica = Partial<Omit<Musica, "id" | "artistaId">>;

export class musicaController {
  async criarMusica(dadosParaCriar: dadosCriacaoMusica) {
    try {
      const novaMusica = await musicaService.criarMusica(dadosParaCriar);
      console.log("✅ Música criada com sucesso:", novaMusica);
    } catch (error: any) {
      console.error(`❌ Erro ao criar música: ${error.message}`);
    }
  }
  async procurarMusica() {
    try {
    } catch (error: any) {}
  }

  async atualizarMusica() {
    try {
    } catch (error: any) {}
  }

  async deletarMusica() {
    try {
    } catch (error: any) {}
  }
}
