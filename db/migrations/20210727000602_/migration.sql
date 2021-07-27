-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT E'USER',
    "askUploadPrompt" BOOLEAN NOT NULL DEFAULT true,
    "askWebsitePrompt" BOOLEAN NOT NULL DEFAULT true,
    "mergeUploadToPad" BOOLEAN NOT NULL DEFAULT false,
    "MergeWebsiteToPad" BOOLEAN NOT NULL DEFAULT false,
    "backgroundSrc" TEXT DEFAULT E'https://www.mcgilltribune.com/wp-content/uploads/2020/02/hacker.png',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sentTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HackPad" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "listOrder" INTEGER,
    "textField" TEXT NOT NULL DEFAULT E'',
    "source" TEXT NOT NULL DEFAULT E'User Generated',
    "applyStyling" TEXT NOT NULL DEFAULT E'true',
    "includeSpaces" TEXT NOT NULL DEFAULT E'false',
    "backgroundSrc" TEXT DEFAULT E'https://www.mcgilltribune.com/wp-content/uploads/2020/02/hacker.png',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharConfig" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "hackPadId" INTEGER,
    "count" INTEGER NOT NULL DEFAULT 0,
    "listOrder" INTEGER,
    "color" TEXT NOT NULL DEFAULT E'',
    "bold" BOOLEAN NOT NULL DEFAULT false,
    "italics" BOOLEAN NOT NULL DEFAULT false,
    "strikeThrough" BOOLEAN NOT NULL DEFAULT false,
    "underline" BOOLEAN NOT NULL DEFAULT false,
    "fontFamily" TEXT NOT NULL DEFAULT E'Arial',
    "size" INTEGER NOT NULL DEFAULT 12,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session.handle_unique" ON "Session"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token.hashedToken_type_unique" ON "Token"("hashedToken", "type");

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
