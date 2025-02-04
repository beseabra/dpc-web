-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "publicationDate" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
