-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "foto" TEXT,
    "privilegios" TEXT NOT NULL DEFAULT 'comum'
);

-- CreateTable
CREATE TABLE "artistas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "foto" TEXT,
    "numero_streams" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "musicas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "genero" TEXT,
    "album" TEXT,
    "artista_id" INTEGER NOT NULL,
    CONSTRAINT "musicas_artista_id_fkey" FOREIGN KEY ("artista_id") REFERENCES "artistas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reproduções" (
    "usuario_id" INTEGER NOT NULL,
    "musica_id" INTEGER NOT NULL,
    "data_escuta" DATETIME NOT NULL,

    PRIMARY KEY ("usuario_id", "musica_id", "data_escuta"),
    CONSTRAINT "reproduções_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reproduções_musica_id_fkey" FOREIGN KEY ("musica_id") REFERENCES "musicas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
