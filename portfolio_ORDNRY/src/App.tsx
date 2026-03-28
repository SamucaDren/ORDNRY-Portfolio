import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import FrontEnd from "./pages/Front_end/index.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/front-end" element={<FrontEnd />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
