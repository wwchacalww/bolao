import { Route, Routes } from "react-router-dom";
import { Bets } from "./pages/bets";
import { BetsGroup } from "./pages/bets-group";
import { BetsOcto } from "./pages/bets-octo";
import { Games } from "./pages/games";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Player } from "./pages/player";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palpites/:id" element={<Bets />} />
      <Route path="/palpites/grupos/:user_id" element={<BetsGroup />} />
      <Route path="/palpites/oitavas/:user_id" element={<BetsOcto />} />
      <Route path="/palpites/quartas/:user_id" element={<BetsOcto />} />
      <Route path="/membro/:user_id" element={<Player />} />
      <Route path="/login" element={<Login />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}
