import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style/stylecrd.css";
import iconPs from "../assets/img/ps3cons.png";

const carouselData = [
  {
    title: "Sony PlayStation 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    price: "Rp.5000",
    rating: 5,
    imageUrl: iconPs,
  },
  {
    title: "Sony PlayStation 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    price: "Rp.5000",
    rating: 5,
    imageUrl: iconPs,
  },
  {
    title: "Sony PlayStation 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    price: "Rp.5000",
    rating: 5,
    imageUrl: iconPs,
  },
  {
    title: "Sony PlayStation 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    price: "Rp.5000",
    rating: 5,
    imageUrl: iconPs,
  },
];

function CardCarouselPS3() {
  return (
    <div className="card-container">
      {carouselData.map((item, index) => (
        <Card key={index} border="success" className="text-center card-items">
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#FFB031")}
              >
                Sewa
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardCarouselPS3;
