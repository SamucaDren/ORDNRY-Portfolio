import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
