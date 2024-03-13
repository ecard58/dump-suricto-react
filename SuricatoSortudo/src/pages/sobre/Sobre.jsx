import "./Sobre.css";
import "../../root/root.css";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import bannerlat from "../../components/img/bannerlat.png";
import { Link } from "react-router-dom";

function Sobre() {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <Container>
      <Row className="">
        <Col
          className="column-background-1 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          <h4>Links úteis</h4>
          <div>
            <ul className="lista-lateral">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#"> Frete</Link>
              </li>
              <li>
                <Link to="#"> Agenda</Link>
              </li>
              <li>
                <Link to="#"> Apoiadores</Link>
              </li>
              <li>
                <Link to="/sobre"> Sobre nós</Link>
              </li>
              <li>
                <Link to="/contatos"> Contato</Link>
              </li>
              <hr />
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/post">Adicionar Produto</Link>
              </li>
              <li>
                <Link to="/put">Alterar Produto</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          xs={8}
          className="column-background-2 rounded"
          style={{ padding: "10px" }}
        >
          <h2>Sobre Nós</h2>
          <br />

          <hr />

          <p>
            Bem-vindo ao Suricato Sortudo, a sua loja de jogos de tabuleiro!
            Somos apaixonados por jogos e nosso objetivo é trazer a você a
            melhor seleção de jogos de tabuleiro do mercado. Aqui no Suricato
            Sortudo, acreditamos que os jogos de tabuleiro são uma maneira
            fantástica de reunir as pessoas. Seja para uma noite em família, uma
            reunião de amigos ou um evento de team building, temos o jogo
            perfeito para você. Nossa missão é simples: proporcionar a você a
            melhor experiência de compra de jogos de tabuleiro. Trabalhamos
            incansavelmente para selecionar os jogos mais divertidos,
            desafiadores e envolventes. Desde os clássicos atemporais até as
            novidades mais quentes, temos algo para todos. Além disso, estamos
            sempre aqui para ajudar. Se você precisa de recomendações ou tem
            dúvidas sobre um jogo, nossa equipe de especialistas em jogos está
            pronta para ajudar. Então, se você está procurando o próximo grande
            jogo para adicionar à sua coleção, ou apenas começando no mundo dos
            jogos de tabuleiro, o Suricato Sortudo é o lugar para você. Venha
            explorar nossa incrível seleção de jogos hoje!
          </p>
        </Col>
        <Col
          className="column-background-3 rounded"
          style={{ marginInline: "10px", padding: "10px" }}
        >
          <a href="#" target="_blank">
            <img src={bannerlat} alt="banner lateral" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;
