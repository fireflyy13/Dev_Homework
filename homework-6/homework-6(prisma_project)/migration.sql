-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "letterName" TEXT NOT NULL,
    "octave" INTEGER NOT NULL,
    "timePlayed" TIMESTAMP(3) NOT NULL,
    "ifExist" BOOLEAN NOT NULL,
    "commonness" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frequency" (
    "id" SERIAL NOT NULL,
    "frequencyValue" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "ifQuality" BOOLEAN NOT NULL,
    "unit" VARCHAR(10) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Frequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Composer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" BOOLEAN NOT NULL,
    "age" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "visualAcuity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Composer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "subworksNumber" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "authorIdentifier" TEXT NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "historicalPeriod" TEXT NOT NULL,
    "firstMentioned" TIMESTAMP(3) NOT NULL,
    "modern" BOOLEAN NOT NULL,
    "relatedGenres" JSONB NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Note_letterName_key" ON "Note"("letterName");

-- CreateIndex
CREATE UNIQUE INDEX "Frequency_name_key" ON "Frequency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Composer_lastName_key" ON "Composer"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToWork_AB_unique" ON "_GenreToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToWork_B_index" ON "_GenreToWork"("B");

-- AddForeignKey
ALTER TABLE "Frequency" ADD CONSTRAINT "Frequency_name_fkey" FOREIGN KEY ("name") REFERENCES "Note"("letterName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_authorIdentifier_fkey" FOREIGN KEY ("authorIdentifier") REFERENCES "Composer"("lastName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToWork" ADD CONSTRAINT "_GenreToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToWork" ADD CONSTRAINT "_GenreToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
