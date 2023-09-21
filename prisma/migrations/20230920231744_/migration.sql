-- CreateTable
CREATE TABLE "builds" (
    "id" SERIAL NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "builds_pkey" PRIMARY KEY ("id")
);
