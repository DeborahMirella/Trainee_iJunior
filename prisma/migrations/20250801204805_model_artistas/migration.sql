-- CreateEnum
CREATE TYPE "public"."TipoPrivilegio" AS ENUM ('comum', 'premium', 'admin');

-- CreateTable
CREATE TABLE "public"."Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT,
    "privilegios" "public"."TipoPrivilegio" NOT NULL DEFAULT 'comum',

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."artistas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT,
    "numero_streams" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "artistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."musicas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "artistaId" INTEGER NOT NULL,

    CONSTRAINT "musicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reproducoes" (
    "data_escuta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "musicaId" INTEGER NOT NULL,

    CONSTRAINT "reproducoes_pkey" PRIMARY KEY ("usuarioId","musicaId","data_escuta")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "public"."Usuarios"("email");

-- AddForeignKey
ALTER TABLE "public"."musicas" ADD CONSTRAINT "musicas_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "public"."artistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reproducoes" ADD CONSTRAINT "reproducoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reproducoes" ADD CONSTRAINT "reproducoes_musicaId_fkey" FOREIGN KEY ("musicaId") REFERENCES "public"."musicas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
