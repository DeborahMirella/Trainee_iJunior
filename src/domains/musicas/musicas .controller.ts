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
  async listarMusicas() {
    try {
      const musicas = await musicaService.listarMusicas();
      if (musicas.length === 0) {
        console.log("\nℹ️ Nenhuma música encontrada.");
        return;
      }

      console.log("\n--- Lista de Músicas ---");
      console.table(
        musicas.map((m) => ({
          ID: m.id,
          Nome: m.nome,
          Duração: m.duracao,
          Gênero: m.genero,
          Álbum: m.album,
          Artista: m.artistaId,
        }))
      );
    } catch (error: any) {
      console.error(`\n❌ Erro ao listar músicas: ${error.message}`);
    }
  }

  async conseguirMusicaPorId(id: number) {
    try {
      const musica = await musicaService.conseguirMusicaPorId(id);
      console.log("\n🎵 Música Encontrada por ID:");
      console.log(musica);
    } catch (error: any) {
      console.error("\n❌ Erro ao listar músicas: ", error.message);
    }
  }

  async conseguirMusicasPorNome(nome: string) {
    try {
      const musicas = await musicaService.conseguirMusicasPorNome(nome);
      if (musicas.length === 0) {
        console.log(`\nℹ️ Nenhuma música encontrada com o termo "${nome}".`);
        return;
      }

      console.log(`\n🎵 Músicas Encontradas com o termo "${nome}"`);
      console.table(
        musicas.map((m) => ({
          ID: m.id,
          Nome: m.nome,
          Duração: m.duracao,
          Gênero: m.genero,
          Álbum: m.album,
          Artista: m.artistaId,
        }))
      );
    } catch (error: any) {
      console.error("\n❌ Erro ao bucas músicas: ", error.message);
    }
  }

  async atualizarMusica(
    id: number,
    dadosParaAtualizar: dadosAtualizacaoMusica
  ) {
    try {
      const musicaAtualizada = await musicaService.atualizaMusica(
        id,
        dadosParaAtualizar
      );
      console.log("✅ Música atualizada com sucesso:", musicaAtualizada);
    } catch (error: any) {
      console.error(`❌ Erro ao atualizar música: ${error.message}`);
    }
  }

  async deletarMusica(id: number) {
    try {
      const musicaDeletada = await musicaService.deletaMusica(id);
      console.log(
        `\n✅ Música "${musicaDeletada.nome}" (ID: ${musicaDeletada.id}) foi removida com sucesso!`
      );
    } catch (error: any) {
      console.error(`\n❌ Erro ao remover música: ${error.message}`);
    }
  }
}
