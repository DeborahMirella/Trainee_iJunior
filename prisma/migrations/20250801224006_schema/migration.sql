/*
  Warnings:

  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."reproducoes" DROP CONSTRAINT "reproducoes_usuarioId_fkey";

-- AlterTable
ALTER TABLE "public"."musicas" ALTER COLUMN "genero" DROP NOT NULL,
ALTER COLUMN "album" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Usuarios";

-- CreateTable
CREATE TABLE "public"."usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "foto" TEXT,
    "privilegios" "public"."TipoPrivilegio" NOT NULL DEFAULT 'comum',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "public"."usuarios"("email");

-- AddForeignKey
ALTER TABLE "public"."reproducoes" ADD CONSTRAINT "reproducoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
