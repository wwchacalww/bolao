-- CreateTable
CREATE TABLE "bets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bet" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,
    CONSTRAINT "bets_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bets_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
