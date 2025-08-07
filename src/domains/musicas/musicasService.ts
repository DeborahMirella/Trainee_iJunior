import prisma from "../../../config/prisma";

export async function criarMusica(dados: {
  nome: string;
  genero?: string;
  album?: string;
  artista_id: number;
}) {
  const musica = await prisma.musicas.create({
    data: dados,
  });
  return musica;
}

export async function listarMusicas() {
  const musicas = await prisma.musicas.findMany({
    include: {
      artistas: true,
    },
  });
  return musicas;
}

export async function atualizarMusica(
  id: number,
  dados: {
    nome?: string;
    genero?: string;
    album?: string;
    artista_id?: number;
  }
) {
  const musica = await prisma.musicas.update({
    where: { id },
    data: dados,
  });
  return musica;
}

export async function deletarMusica(id: number) {
  await prisma.musicas.delete({
    where: { id },
  });
}
