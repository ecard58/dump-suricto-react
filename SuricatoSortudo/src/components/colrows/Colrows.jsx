import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselHome from "../carouselHome/CarouselHome";
import lancamentos from "../../components/img/lancamentos.png";
import bannerlat from "../img/bannerlat.png";

function Colrows() {
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
          <hr />
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
          <h2>Destaques Recentes</h2>
          <br />
          <CarouselHome />
          <hr />
          <h2>Novidades</h2>
          <p>
            Os jogos de tabuleiro continuam a evoluir e surpreender os
            entusiastas com novidades emocionantes. Uma tendência notável é a
            fusão entre jogos de tabuleiro tradicionais e a tecnologia,
            resultando em experiências inovadoras. Jogos que incorporam
            aplicativos e dispositivos eletrônicos, como tablets e smartphones,
            oferecem uma interatividade única, adicionando elementos digitais ao
            jogo físico. Isso proporciona novas dimensões de estratégia e
            imersão, como em jogos de exploração espacial que usam realidade
            aumentada para dar vida ao universo do jogo.
          </p>
          <p>
            Outra tendência é a crescente popularidade de jogos de tabuleiro
            temáticos e licenciados. Franquias de sucesso, como filmes, séries
            de TV e videogames, estão sendo adaptadas para o formato de
            tabuleiro, permitindo que os fãs mergulhem ainda mais fundo em seus
            universos favoritos. Além disso, o mercado de jogos de tabuleiro
            está vendo uma expansão na diversidade de temas e mecânicas,
            tornando mais fácil para jogadores de todas as idades e interesses
            encontrarem jogos que atendam às suas preferências. Essas novas
            abordagens e temas inovadores estão impulsionando a criatividade no
            mundo dos jogos de tabuleiro e tornando a experiência de jogo mais
            emocionante do que nunca.
          </p>
          <hr />
          <a href="#" target="_blank">
            <img src={lancamentos} alt="banner lancamentos" style={imgStyle} />
          </a>
          <hr />
          <h2>Clássicos x Modernos</h2>
          <p>
            Os jogos de tabuleiro modernos se destacam das versões clássicas em
            diversos aspectos, refletindo a evolução do gênero ao longo do
            tempo. Enquanto os jogos de tabuleiro clássicos costumam ter regras
            simples e mecânicas diretas, os modernos frequentemente introduzem
            complexidade estratégica mais profunda, oferecendo uma gama mais
            variada de escolhas aos jogadores. Além disso, os jogos modernos
            muitas vezes valorizam a imersão e a narrativa, com temas ricos e
            componentes de alta qualidade, tornando a experiência mais
            envolvente. A colaboração entre jogadores também é uma
            característica notável em muitos jogos modernos, ao contrário dos
            clássicos, que muitas vezes enfatizam a competição direta. Em
            resumo, os jogos de tabuleiro modernos oferecem uma gama mais ampla
            de experiências, apelando para um público diversificado e elevando o
            hobby a novos patamares de criatividade e inovação.
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

export default Colrows;
