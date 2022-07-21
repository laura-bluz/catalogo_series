import { GlobalStyle } from "./global";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Menu } from "./pages/Menu";
import { CadastroSerie } from "./pages/CadastroSerie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Catalogo } from "./pages/Catalogo";

// import * as firebase from "firebase";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAkWwcgQdyKGqMOB5voVFJ8tZITqjluZMw",
  authDomain: "catalogo-series-f632b.firebaseapp.com",
  projectId: "catalogo-series-f632b",
  storageBucket: "catalogo-series-f632b.appspot.com",
  messagingSenderId: "604896153265",
  appId: "1:604896153265:web:8083d1318e054bcb549c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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