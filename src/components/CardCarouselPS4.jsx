import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style/stylecard.css";
import iconPs from "../assets/img/ps5cons.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardCarouselPS4() {
  const navigate = useNavigate();
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get_ps4")
      .then((response) => setCarouselData(response.data.products))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10, // Nilai yang lebih kecil
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 10, // Nilai yang lebih kecil
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 5, // Nilai yang lebih kecil
    },
  };

  const handleProductClick = (id_produk) => {
    navigate(`/pemesanan/${id_produk}`);
  };

  return (
    <Carousel responsive={responsive}>
      {carouselData.map((item) => (
        <Card
          key={item.id_produk}
          border="success"
          className="text-center card-item"
        >
          <Card.Img className="card-img" src={item.gambar} />
          <Card.Body>
            <Card.Title className="card-title">{item.kategoriPS}</Card.Title>
            <Card.Text className="card-text">Lorem Ipsum Dolor....</Card.Text>
            <Card.Text className="card-text-count">Rp. {item.harga_sewa}</Card.Text>
            <div className="rating">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i} className="star">
                  &#9733;
                  &#9733;
                  &#9733;
                  &#9733;
                  &#9733;
                </span>
              ))}
            </div>
            <Button
              className="button"
              type="button"
              onClick={() => handleProductClick(item.id_produk)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3DB5FF")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FFB031")}
            >
              Sewa
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Carousel>
  );
}

export default CardCarouselPS4;
