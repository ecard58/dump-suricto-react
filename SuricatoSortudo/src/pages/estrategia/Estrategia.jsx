import "./style.css";
import "../../root/root.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ticketToRide from "../../components/img/tickettoRide.jpg";
import dominion from "../../components/img/dominion.png";
import carcassonne from "../../components/img/carcassonne.png";
import catan from "../../components/img/catan.png";
import war from "../../components/img/war.webp";
import xadrez from "../../components/img/xadrez.png";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function Estrategia() {
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
    <section className="estrategia">
      <h2>Estratégia</h2>
      <Carousel>
        <Carousel.Item interval={1700}>
          <img src={ticketToRide} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[10]?.nome}</h3>
            <p className="paragrafo">{produtos[10]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[10]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={war} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[1]?.nome}</h3>
            <p className="paragrafo">{produtos[1]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[1]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={dominion} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[8]?.nome}</h3>
            <p className="paragrafo">{produtos[8]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[8]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={carcassonne} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[7]?.nome}</h3>
            <p className="paragrafo">{produtos[7]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[7]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={catan} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[6]?.nome}</h3>
            <p className="paragrafo">{produtos[6]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[6]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={xadrez} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[4]?.nome}</h3>
            <p className="paragrafo">{produtos[4]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[4]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Estrategia;
