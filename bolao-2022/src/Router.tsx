import { Route, Routes } from "react-router-dom";
import { Bets } from "./pages/bets";
import { BetsGroup } from "./pages/bets-group";
import { Home } from "./pages/home";
import { Player } from "./pages/player";
import { api } from "./services/api";

const games = await api.get("/games/all");

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palpites/:id" element={<Bets />} />
      <Route path="/palpites/grupos/:user_id" element={<BetsGroup />} />
      <Route path="/membro/:user_id" element={<Player />} />
    </Routes>
  );
}
