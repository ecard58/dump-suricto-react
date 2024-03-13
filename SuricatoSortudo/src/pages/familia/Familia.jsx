import "./style.css";
import "../../root/root.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import jogoDaVida from "../../components/img/jogoDaVida.png";
import quebraCabeça from "../../components/img/quebra-cabeca.png";
import monopoly from "../../components/img/monopoly.png";
import dixit from "../../components/img/dixit.png";
import ludo from "../../components/img/ludo.jpg";
import tabu from "../../components/img/tabu.png";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function Familia() {
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const { data } = await axios.get(url);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <section className="familia">
      <h2>Família</h2>
      <Carousel>
        <Carousel.Item interval={1700}>
          <img src={jogoDaVida} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[0]?.nome}</h3>
            <p className="paragrafo">{produtos[0]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[0]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={quebraCabeça} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[2]?.nome}</h3>
            <p className="paragrafo">{produtos[2]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[2]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={monopoly} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[5]?.nome}</h3>
            <p className="paragrafo">{produtos[5]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[5]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={dixit} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[9]?.nome}</h3>
            <p className="paragrafo">{produtos[9]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[9]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={tabu} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[12]?.nome}</h3>
            <p className="paragrafo">{produtos[12]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[12]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={ludo} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[14]?.nome}</h3>
            <p className="paragrafo">{produtos[14]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[14]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Familia;
