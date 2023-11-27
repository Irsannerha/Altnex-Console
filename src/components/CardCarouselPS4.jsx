import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style/stylecard.css";
import iconPs from "../assets/img/ps4cons.png";
const carouselData = [
  {
    title: "Sony PlayStation 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    price: "Rp.10.000",
    rating: 5,
    imageUrl: iconPs,
  },
];

function CardCarouselPS4() {
  return (
    <Carousel className="control">
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <Card border="success" className="text-center card-item">
            <Card.Img className="card-img" src={item.imageUrl} />
            <Card.Body>
              <Card.Title className="card-title">{item.title}</Card.Title>
              <Card.Text className="card-text">{item.description}</Card.Text>
              <Card.Text className="card-text-count">{item.price}</Card.Text>
              <div className="rating">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
              <div>
                <Button
                  className="button"
                  type="submit"
                  href="/pemesanan"
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#3DB5FF")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#FFB031")
                  }
                >
                  Sewa
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardCarouselPS4;
