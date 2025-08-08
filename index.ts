import ArtistasService from "./src/domains/artistas/artistasService"
import { criarUsuario, listarUsuarios } from "./src/domains/usuarios/usuariosService"
import { MusicService } from "./src/domains/musicas/musicaService"
import { criarReproducao, listarReproducoes } from "./src/domains/reproducoes/reproducoesService"

const musicService = new MusicService

async function main() {
  await criarUsuario({
    nome: "Hermes1",
    email: "hermes2@gmail.com",
    senha: "123456",
    privilegios: "admin"
  })

  const usuarios = await listarUsuarios()
  console.log("Usuários:", usuarios)

  const novoArtista = await ArtistasService.createArtista({
    nome: "Coldplay1",
    foto: "coldplay.jpg"
  })
  console.log("Artista criado:", novoArtista)

  const artistas = await ArtistasService.findAllArtistas()
  console.log("Lista de artistas:", artistas)

  await ArtistasService.updateArtista(novoArtista.id, { foto: "coldplay_novo.jpg" })
  console.log("Artista atualizado")

  const novaMusica = await musicService.criarMusica({
    nome: "Paper",
    genero: "Rock",
    album: "Parachutes",
    artista_id: novoArtista.id
  })
  console.log("Música criada:", novaMusica)

  const musicas = await musicService.listarMusicas()
  console.log("Lista de músicas:", musicas)

  const novaReproducao = await criarReproducao({
    usuario_id: usuarios[0].id,
    musica_id: novaMusica.id,
    data_escuta: new Date()
  })
  console.log("Reprodução criada:", novaReproducao)

  const reproducoes = await listarReproducoes()
  console.log("Lista de reproduções:", reproducoes)
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    const prisma = (await import('./src/prisma')).default
    await prisma.$disconnect()
  })
