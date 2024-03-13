import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerlat from "../../components/img/bannerlat.png";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";
function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState("false");
  const [deleteErro, setDeleteErro] = useState("");

  const getProdutos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const deleteProduto = async (id) => {
    // Recupera as informações do usuário
    const usuario = JSON.parse(localStorage.getItem("info"));

    // Verifica se o usuário pode deletar
    if (usuario && usuario.canDelete) {
      try {
        const response = await axios.delete(`${url}/${id}`);
        if (response.status === 200) {
          const arrayFiltrado = produtos.filter((item) => item.id !== id);
          setProdutos(arrayFiltrado);
        } else {
          throw new Error("Erro ao deletar produto");
        }
      } catch (error) {
        console.error(error);
        setDeleteErro("Erro ao deletar produto");
      }
    } else {
      console.error("Usuário não tem permissão para deletar produtos");
      setDeleteErro("Usuário não tem permissão para deletar produtos");
    }
  };
  useEffect(() => {
    getProdutos();
  }, []);

  const pesquisaProdutos = produtos.filter((produto) => {
    return (
      produto.nome.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      produto.categoria.toLowerCase().startsWith(pesquisa.toLowerCase())
    );
  });

  return (
    <>
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
            <label>
              Pesquise por nome ou categoria
              <br />
              <input
                type="text"
                placeholder="O que vamos jogar hoje?"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                style={{ margin: 20, padding: 10, width: 255 }}
              />
            </label>
            <br />

            <button
              onClick={getProdutos}
              disabled={true}
              style={{ marginBottom: 20 }}
            >
              Listar todos os produtos
            </button>

            <div className="row">
              {pesquisaProdutos.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={item.imagem} //url
                      className="card-img-top product-image"
                      alt={item.nome}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.nome}</h5>
                      <p className="card-text">{item.categoria}</p>
                      <p className="card-text">R$ {item.valor}</p>
                      <p className="card-text">ID {item.id}</p>
                      <button className="btn btn-primary">
                        <FaShoppingCart style={{ fontSize: "24px" }} />{" "}
                        Adicionar ao Carrinho
                      </button>
                    </div>
                    <button
                      style={{
                        width: "202px",
                        marginLeft: `20px`,
                        left: `40px`,
                        marginBottom: `20px`,
                      }}
                      onClick={() => deleteProduto(item.id)}
                      className="btn btn-danger"
                    >
                      <FaTrash style={{ fontSize: "24px" }} /> Excluir
                    </button>
                    {deleteErro && <p>{deleteErro}</p>}
                  </div>
                </div>
              ))}
            </div>
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
    </>
  );
}

export default Produtos;
