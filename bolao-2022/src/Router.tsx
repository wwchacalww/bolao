import { Route, Routes } from "react-router-dom";
import { Bets } from "./pages/bets";
import { BetsGroup } from "./pages/bets-group";
import { BetsOcto } from "./pages/bets-octo";
import { BetsQuartas } from "./pages/bets-quartas";
import { Games } from "./pages/games";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Player } from "./pages/player";
import { Game } from "./pages/game";
import { Cartaxo } from "./pages/cartaxo";
import { Realville } from "./pages/realville";
import { GameRealVille } from "./pages/games-realville";
import { GameCartaxo } from "./pages/games-cartaxo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartaxo" element={<Cartaxo />} />
      <Route path="/realville" element={<Realville />} />
      <Route path="/palpites/:id" element={<Bets />} />
      <Route path="/palpites/grupos/:user_id" element={<BetsGroup />} />
      <Route path="/palpites/oitavas/:user_id" element={<BetsOcto />} />
      <Route path="/palpites/quartas/:user_id" element={<BetsQuartas />} />
      <Route path="/membro/:user_id" element={<Player />} />
      <Route path="/login" element={<Login />} />
      <Route path="/games" element={<Games />} />
      <Route path="/game/:game_id" element={<Game />} />
      <Route path="/game/cartaxo/:game_id" element={<GameCartaxo />} />
      <Route path="/game/realville/:game_id" element={<GameRealVille />} />
    </Routes>
  );
}
