/*
  Warnings:

  - Added the required column `duracao` to the `musicas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."musicas" ADD COLUMN     "duracao" INTEGER NOT NULL;
