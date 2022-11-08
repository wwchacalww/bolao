-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "played_at" TEXT NOT NULL,
    "first_country_id" TEXT NOT NULL,
    "second_country_id" TEXT NOT NULL,
    "match_score" TEXT,
    "status" TEXT,
    "result" TEXT
);
