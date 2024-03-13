import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";
import Sobre from "./pages/sobre/Sobre";
import Produtos from "./pages/produtos/Produtos";
import Aventura from "./pages/aventura/Aventura";
import Estrategia from "./pages/estrategia/Estrategia";
import Familia from "./pages/familia/Familia";
import Carrinho from "./pages/carrinho/Carrinho";
import Post from "./pages/post/post";
import Contatos from "./pages/contatos/contatos";
import Login from "./pages/login/login";
import Put from "./pages/put/put";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/estrategia" element={<Estrategia />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/post" element={<Post />} />
        <Route path="/put" element={<Put />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
