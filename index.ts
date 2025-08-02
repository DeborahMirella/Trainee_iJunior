
import artistasService from "./src/domains/artistas/services/artistasService";

async function main() {

  console.log("Iniciando o teste");
  
  const NomeArtista = "Artista2";
  let artistaCriadoId: number | null = null;

  try {

    const dadosNovoArtista = {
      nome: NomeArtista,
      foto: "url_Artista2"
    };
    
    console.log("Enviando dados:", dadosNovoArtista);
    
    const artistaCriado = await artistasService.createArtista(dadosNovoArtista);
    
    artistaCriadoId = artistaCriado.id;

  console.log("\nArtista criado com sucesso! Registro inserido no banco de dados:", artistaCriado);
  
} catch (error) {

    console.error("Ocorreu uma falha durante o teste:", error);
  } 

  finally {

     if (artistaCriadoId !== null) {

      console.log(`Apagando o artista de ID: ${artistaCriadoId}`);

      try {
        await artistasService.deleteArtista(artistaCriadoId);

        console.log("O artista de teste foi removido.");
      } 
      catch (cleanupError) {

        console.error("Não foi possível apagar o artista de teste:", cleanupError);
      }
    }

    console.log("Teste finalizado");
  }
}

main();
