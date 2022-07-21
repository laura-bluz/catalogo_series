import { GlobalStyle } from "./global";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Menu } from "./pages/Menu";
import { CadastroSerie } from "./pages/CadastroSerie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Catalogo } from "./pages/Catalogo";


export function App() {
  return (
    <div className="App">

      {/* Rotas */}

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cadastroserie" element={<CadastroSerie />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Router>

      <GlobalStyle />
    </div>
  );
}