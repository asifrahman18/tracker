/*
  Warnings:

  - You are about to alter the column `status` on the `tracker` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `tracker` MODIFY `status` ENUM('CLOSED', 'IN_PROGRESS') NOT NULL DEFAULT 'IN_PROGRESS';
