-- CreateTable
CREATE TABLE "HackPad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "userId" INTEGER,
    "listOrder" INTEGER,
    "textField" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT 'User Generated',
    "applyStyling" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "CharConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "hackPadId" INTEGER,
    "count" INTEGER NOT NULL DEFAULT 0,
    "listOrder" INTEGER,
    "color" TEXT NOT NULL DEFAULT '',
    "bold" BOOLEAN NOT NULL DEFAULT false,
    "italics" BOOLEAN NOT NULL DEFAULT false,
    "strikeThrough" BOOLEAN NOT NULL DEFAULT false,
    "underline" BOOLEAN NOT NULL DEFAULT false,
    "fontFamily" TEXT NOT NULL DEFAULT 'Arial',
    "size" INTEGER NOT NULL DEFAULT 12
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "askUploadPrompt" BOOLEAN NOT NULL DEFAULT true,
    "askWebsitePrompt" BOOLEAN NOT NULL DEFAULT true,
    "mergeUploadToPad" BOOLEAN NOT NULL DEFAULT false,
    "MergeWebsiteToPad" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("createdAt", "email", "hashedPassword", "id", "name", "role", "updatedAt") SELECT "createdAt", "email", "hashedPassword", "id", "name", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
