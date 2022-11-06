import { Route, Routes } from "react-router-dom";
import { Bets } from "./pages/bets";
import { Home } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palpites/:id" element={<Bets />} />
    </Routes>
  );
}
