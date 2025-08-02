-- CreateEnum
CREATE TYPE "public"."TipoPrivilegio" AS ENUM ('comum', 'premium', 'admin');

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
    "genero" TEXT,
    "album" TEXT,
    "artista_id" INTEGER NOT NULL,

    CONSTRAINT "musicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reproduções" (
    "id" SERIAL NOT NULL,
    "data_escuta" TIMESTAMP(3) NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "musica_id" INTEGER NOT NULL,

    CONSTRAINT "reproduções_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "public"."usuarios"("email");

-- AddForeignKey
ALTER TABLE "public"."musicas" ADD CONSTRAINT "musicas_artista_id_fkey" FOREIGN KEY ("artista_id") REFERENCES "public"."artistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reproduções" ADD CONSTRAINT "reproduções_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reproduções" ADD CONSTRAINT "reproduções_musica_id_fkey" FOREIGN KEY ("musica_id") REFERENCES "public"."musicas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
