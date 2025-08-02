import prisma from "../../prisma"

export async function criarUsuario(dados: {
  nome: string,
  email: string,
  senha: string,
  foto?: string,
  privilegios?: "comum" | "premium" | "admin"
}) {
  const usuario = await prisma.usuarios.create({
    data: dados
  })
  return usuario
}

export async function listarUsuarios() {
  const usuarios = await prisma.usuarios.findMany()
  return usuarios
}

export async function atualizarUsuario(id: number, dados: {
  nome?: string,
  email?: string,
  senha?: string,
  foto?: string,
  privilegios?: "comum" | "premium" | "admin"
}) {
  const usuario = await prisma.usuarios.update({
    where: { id },
    data: dados
  })
  return usuario
}


export async function deletarUsuario(id: number) {
  await prisma.usuarios.delete({
    where: { id }
  })
}
