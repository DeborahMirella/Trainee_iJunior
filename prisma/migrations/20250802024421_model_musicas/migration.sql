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
    "artistaId" INTEGER NOT NULL,
    CONSTRAINT "musicas_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "artistas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reproducoes" (
    "data_escuta" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "musicaId" INTEGER NOT NULL,

    PRIMARY KEY ("usuarioId", "musicaId", "data_escuta"),
    CONSTRAINT "reproducoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reproducoes_musicaId_fkey" FOREIGN KEY ("musicaId") REFERENCES "musicas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "foto" TEXT,
    "privilegios" TEXT NOT NULL DEFAULT 'comum'
);
INSERT INTO "new_usuarios" ("email", "foto", "id", "nome", "privilegios", "senha") SELECT "email", "foto", "id", "nome", "privilegios", "senha" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
