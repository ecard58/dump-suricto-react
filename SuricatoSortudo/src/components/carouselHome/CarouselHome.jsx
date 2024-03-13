import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import novidade from "../img/novidade.png";
import blacksuri1 from "../img/blacksuri1.png";
import blacksuri2 from "../img/blacksuri2.png";

function CarouselHome() {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img src={novidade} text="First slide" style={imgStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={blacksuri1} text="Second slide" style={imgStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={blacksuri2} text="Third slide" style={imgStyle} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
