import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import suricatoFooter from "../img/suricatoFooter.jpg";
import { MainFooter } from "./footer.styled";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <MainFooter className="text-center py-4">
        <img src={suricatoFooter} width={"170vw"} height={"170vh"} />
        <Link to="/contatos" style={{ color: "#d6c271" }}>
          Contatos
        </Link>
        <ul className="list-unstyled">
          <li className="mb-1">
            <a href="#" style={{ color: "white" }}>
              <FaFacebookSquare style={{ fontSize: "24px" }} />
            </a>
          </li>
          <li className="mb-1">
            <a href="#" style={{ color: "white" }}>
              <FaInstagramSquare style={{ fontSize: "24px" }} />
            </a>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li className="mb-1">
            <a href="#" style={{ color: "white" }}>
              <FaTwitterSquare style={{ fontSize: "24px" }} />
            </a>
          </li>
          <li className="mb-1">
            <a href="#" style={{ color: "white" }}>
              <FaWhatsappSquare style={{ fontSize: "24px" }} />
            </a>
          </li>
        </ul>
        <p className="TextoFooter">
          © 2023 O Suricato Sortudo. Todos os direitos reservados.
        </p>
      </MainFooter>
    </>
  );
}
export default Footer;
