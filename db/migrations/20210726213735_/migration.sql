-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HackPad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "userId" INTEGER,
    "listOrder" INTEGER,
    "textField" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT 'User Generated',
    "applyStyling" TEXT NOT NULL DEFAULT 'true',
    "includeSpaces" TEXT NOT NULL DEFAULT 'false',
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_HackPad" ("applyStyling", "createdAt", "id", "includeSpaces", "listOrder", "name", "source", "textField", "updatedAt", "userId") SELECT "applyStyling", "createdAt", "id", "includeSpaces", "listOrder", "name", "source", "textField", "updatedAt", "userId" FROM "HackPad";
DROP TABLE "HackPad";
ALTER TABLE "new_HackPad" RENAME TO "HackPad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
