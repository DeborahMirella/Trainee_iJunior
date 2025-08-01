import usuariosService from "./src/domains/usuarios/services/usuariosService";

async function main() {
    const body = {
        id: 0,
        nome: "hermes",
        email: "hermes@gmail.com",
        senha: "123456",
        foto: null,
        privilegios: "admin"
    }
    const usuario = await usuariosService.create(body)

    console.log(usuario);
}

main();