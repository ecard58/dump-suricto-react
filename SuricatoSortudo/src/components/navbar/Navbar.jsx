import "bootstrap/dist/css/bootstrap.min.css";
import "../../root/root.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import surilogo from "../../components/img/logosuricatocirc.png";
import { Link } from "react-router-dom";
import DarkMode from "../darkmode/DarkMode";

function Navbar1() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          sticky="top"
          style={{ background: "var(--segunda-cor)" }}
          className="mb-3"
          //   bg="dark"
          //   data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: "white" }}>
              {" "}
              <img src={surilogo} width={60} />
              &emsp;O Suricato Sortudo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu Suricato
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    to="/home"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/produtos"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Produtos
                  </Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    <NavDropdown.Item as={Link} to="/aventura">
                      Aventura
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/estrategia">
                      Estratégia
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/familia">
                      Família
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    as={Link}
                    to="/sobre"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Sobre nós
                  </Nav.Link>
                  <Nav.Link as={Link} to="/carrinho" style={{ color: "white" }}>
                    <FaShoppingCart style={{ fontSize: "24px" }} />
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="O que vamos jogar hoje?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    style={{ background: "var(--segunda-cor)" }}
                  >
                    Pesquisa
                  </Button>
                </Form>
                <DarkMode />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;
