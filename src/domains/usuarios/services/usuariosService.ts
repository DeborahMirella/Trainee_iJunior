import prisma from "../../../../config/prismaClient"

import { Usuario } from "@prisma/client";

class usuariosService {
    async create(body: usuarios){
        const usuario = await prisma.usuarios.create({
            data: {
                nome:        body.nome,
                email:       body.email,
                senha:       body.senha,
                foto:        body.foto,
                privilegios: body.privilegios
            }
        });
        return usuario
    }
}

export default new usuariosService