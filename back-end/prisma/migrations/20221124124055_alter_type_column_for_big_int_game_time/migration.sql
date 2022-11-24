/*
  Warnings:

  - You are about to alter the column `game_time` on the `games` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "played_at" TEXT NOT NULL,
    "first_country_id" TEXT NOT NULL,
    "second_country_id" TEXT NOT NULL,
    "group" TEXT NOT NULL DEFAULT 'GRUPO A',
    "match_score" TEXT,
    "status" TEXT,
    "result" TEXT,
    "game_time" BIGINT NOT NULL DEFAULT 0
);
INSERT INTO "new_games" ("first_country_id", "game_time", "group", "id", "match_score", "played_at", "result", "second_country_id", "status") SELECT "first_country_id", "game_time", "group", "id", "match_score", "played_at", "result", "second_country_id", "status" FROM "games";
DROP TABLE "games";
ALTER TABLE "new_games" RENAME TO "games";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
