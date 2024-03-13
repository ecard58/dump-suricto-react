import pandemic from "../../components/img/pandemic.png";
import ilhaProibida from "../../components/img/ilhaProibida.jpg";
import "./style.css";
import "../../root/root.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function Aventura() {
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
    <section className="aventura">
      <h2>Aventura</h2>
      <Carousel>
        <Carousel.Item interval={1700}>
          <img src={pandemic} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[11]?.nome}</h3>
            <p className="paragrafo">{produtos[11]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[11]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1700}>
          <img src={ilhaProibida} width={"400px"} height={"400px"} />
          <Carousel.Caption style={{ width: "400px", alignContent: "center" }}>
            <h3>{produtos[3]?.nome}</h3>
            <p className="paragrafo">{produtos[3]?.descricao}</p>
            <p className="paragrafo">Valor: {produtos[3]?.valor}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Aventura;
