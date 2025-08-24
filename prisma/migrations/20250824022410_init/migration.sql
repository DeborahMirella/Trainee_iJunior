-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `privilegios` ENUM('comum', 'premium', 'admin') NOT NULL DEFAULT 'comum',

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artistas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `numero_streams` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musicas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `album` VARCHAR(191) NULL,
    `artista_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reproduções` (
    `usuario_id` INTEGER NOT NULL,
    `musica_id` INTEGER NOT NULL,
    `data_escuta` DATETIME(3) NOT NULL,

    PRIMARY KEY (`usuario_id`, `musica_id`, `data_escuta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `musicas` ADD CONSTRAINT `musicas_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reproduções` ADD CONSTRAINT `reproduções_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reproduções` ADD CONSTRAINT `reproduções_musica_id_fkey` FOREIGN KEY (`musica_id`) REFERENCES `musicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
