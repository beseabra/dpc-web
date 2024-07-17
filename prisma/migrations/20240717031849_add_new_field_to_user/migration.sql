/*
  Warnings:

  - Added the required column `typeUser` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "typeUser" TEXT NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE TEXT;
