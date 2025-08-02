
import artistasService from "./src/domains/artistas/services/artistasService";

async function main() {

  console.log("Iniciando o teste de criação de Artista...");

  try {

    const dadosNovoArtista = {
      nome: "Aleatorio",
      foto: "null"
    };

    console.log("Enviando os seguintes dados:", dadosNovoArtista);

    const artistaCriado = await artistasService.createArtista(dadosNovoArtista);

    console.log("Artista criado com sucesso no banco de dados:");
    console.log(artistaCriado);

  } catch (error) {

    console.error("Ocorreu uma falha durante o teste:", error);
  }
}

main();
