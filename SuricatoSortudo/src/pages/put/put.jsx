import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../root/root.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerlat from "../../components/img/bannerlat.png";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function Put() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState(null);
  const [imagem, setImagem] = useState("");
  const [productId, setProductId] = useState("");

  const submitPut = async () => {
    const produtoAtualizado = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      valor: valor,
      imagem: imagem,
    };

    try {
      const { data } = await axios.put(
        `${url}/${productId}`,
        produtoAtualizado
      );
      console.log("Produto atualizado: ", data);
      alert("Produto atualizado com sucesso!");
      setNome("");
      setDescricao("");
      setCategoria("");
      setValor(null);
      setImagem("");
      setProductId("");
    } catch (error) {
      console.error("Erro ao atualizar o produto: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPut();
  };

  useEffect(() => {
    if (productId) {
      axios.get(`${url}/${productId}`).then((response) => {
        const produto = response.data;
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setCategoria(produto.categoria);
        setValor(produto.valor);
        setImagem(produto.imagem);
      });
    }
  }, [productId]);

  return (
    <div>
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
            <h2>Atualizar Produto</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <label>
                ID do Produto:
                <input
                  type="text"
                  placeholder="Digite o ID do produto"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  style={{ margin: 10, padding: 8 }}
                />
              </label>
              <br />

              <label>
                Nome:
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
                Descrição:
                <input
                  type="text"
                  placeholder="Descrição do produto"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  style={{ margin: 10, padding: 8 }}
                />
              </label>
              <br />

              <label>
                Categoria:
                <select
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
                Valor:
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
                Imagem:
                <input
                  type="text"
                  placeholder="Insira a URL da imagem"
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                  style={{ margin: 10, padding: 8 }}
                />
              </label>
              <br />

              <button type="submit">Atualizar Produto</button>
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
    </div>
  );
}

export default Put;
