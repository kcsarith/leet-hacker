/*
  Warnings:

  - You are about to drop the column `userId` on the `HackPad` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "backgroundSrc" TEXT DEFAULT 'https://www.mcgilltribune.com/wp-content/uploads/2020/02/hacker.png';

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HackPad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "listOrder" INTEGER,
    "textField" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT 'User Generated',
    "applyStyling" TEXT NOT NULL DEFAULT 'true',
    "includeSpaces" TEXT NOT NULL DEFAULT 'false',
    "backgroundSrc" TEXT DEFAULT 'https://www.mcgilltribune.com/wp-content/uploads/2020/02/hacker.png'
);
INSERT INTO "new_HackPad" ("applyStyling", "createdAt", "id", "includeSpaces", "listOrder", "name", "source", "textField", "updatedAt") SELECT "applyStyling", "createdAt", "id", "includeSpaces", "listOrder", "name", "source", "textField", "updatedAt" FROM "HackPad";
DROP TABLE "HackPad";
ALTER TABLE "new_HackPad" RENAME TO "HackPad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
