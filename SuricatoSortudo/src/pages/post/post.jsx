import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerlat from "../../components/img/bannerlat.png";
import { Link } from "react-router-dom";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function post() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState(null);
  const [imagem, setImagem] = useState("");

  const submeter = async () => {
    if (nome == null || descricao == null || valor == null || imagem == null) {
      alert("Preencha todos os campos.");
      return;
    }
    const novoProduto = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      valor: valor,
      imagem: imagem,
    };

    try {
      const { data } = await axios.post(url, novoProduto);
      console.log("Produto cadastrado: ", data);
      alert("Produto cadastrado: ", data);
      setNome("");
      setDescricao("");
      setCategoria("");
      setValor(null);
      setImagem("");
    } catch (error) {
      console.error("Erro ao cadastrar produto: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h2>Cadastrar produtos</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                placeholder="Digite o nome do produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{ margin: 10, padding: 8 }}
              />
            </label>
            <br />

            <label>
              Descrição
              <input
                type="text"
                placeholder="Descreva o produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                style={{ margin: 10, padding: 8 }}
              />
            </label>
            <br />

            <label>
              Categoria
              <select
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                style={{ margin: 10, padding: 8 }}
              >
                <option value="Aventura">Aventura</option>
                <option value="Estratégia">Estratégia</option>
                <option value="Família">Família</option>
              </select>
            </label>
            <br />

            <label>
              Valor
              <input
                type="number"
                placeholder="Digite o valor do produto"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                style={{ margin: 10, padding: 8 }}
              />
            </label>
            <br />
            <label>
              Imagem
              <input
                type="text"
                placeholder="Cole aqui a URL da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                style={{ margin: 10, padding: 8 }}
              />
            </label>
            <br />

            <button onClick={submeter} style={{ margin: 10, padding: 10 }}>
              Submeter
            </button>
          </form>
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

export default post;
