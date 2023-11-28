import React, { useState, useEffect } from "react";
import "../index.css";
import "../style/style.css";
import Navbars from "../components/Navbars";
import Carousel from "../components/Carousel";
import CardCarouselPS3 from "../components/CardCarouselPS3";
import CardCarouselPS4 from "../components/CardCarouselPS4";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import iconMember from "../assets/img/iconMembers.png";
import iconGame from "../assets/img/iconStick.png";
import iconConsole from "../assets/img/iconConsole.png";
import iconRent from "../assets/img/iconRent.png";
import backgroundImage from "../assets/img/bgGold.jpg";
import iconLogo from "../assets/img/iconlog.png";
import CardCarouselPS5 from "../components/CardCarouselPS5";


function Beranda() {
  const promoTexts = [
    "Promo ! Besar-Besaran dapatkan diskon nya sekarang juga!...",
    "Promo Bulan November!, GRATIS 1 Jam untuk semua game. Buruan Mainkan sekarang juga!...",
    "Sambutlah ! Ajang bergengsi lomba FIFA23. Buruan Ambil Hadiahnya dan Daftar Sekarang juga!...",
    "Telah dibuka Paket Malam. Makin seru dengan harga yang terjangkau!",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Ganti ke kata-kata berikutnya dengan efek animasi
      const promoTextElement = document.getElementById("promo-text");
      promoTextElement.classList.add("fade-out");

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === promoTexts.length - 1 ? 0 : prevIndex + 1
        );

        promoTextElement.classList.remove("fade-out");
      }, 500); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); //

  return (
    <>
      <div className="mybg">
        <Navbars />
        <Carousel />
        <Navbar className="bg-body-tertiary" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <div className="d-flex align-items-center">
                <span className="mr-2 title-ps">ALTNEX CONSOLE</span>
                <div className="vertical-line mx-2"></div>
                <div>
                  <p id="promo-text" className="m-0">
                    {promoTexts[currentTextIndex]}
                  </p>
                </div>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="text-center mt-4" style={{ margin: "20px 0" }}>
          <h4>BEST PLAYSTATION GAME RENTAL IN ALTNEX CONSOLE</h4>
        </div>
        <Card
          border="success"
          style={{
            width: "75.5rem",
            height: "17.5rem",
            backgroundColor: "#FFB031",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            margin: "auto", // Menempatkan elemen ke tengah secara horizontal
            display: "flex", // Menggunakan flexbox
            justifyContent: "center", // Menempatkan elemen ke tengah secara horizontal
            alignItems: "center", // Menempatkan elemen ke tengah secara vertikal
            borderRadius: "25px",
          }}
        >
          <Card.Body></Card.Body>
          <div
            style={{
              height: "225rem",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Card
              style={{
                width: "17rem",
                height: "12.5rem",
                margin: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={iconMember}
                style={{ width: "85px", height: "85px", margin: "25px 0" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "-30px",
                    fontSize: "25px",
                  }}
                >
                  270+
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "17px",
                    margin: "-10px",
                  }}
                >
                  Member
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "17rem",
                height: "12.5rem",
                margin: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={iconGame}
                style={{ width: "85px", height: "85px", margin: "25px 0" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "-30px",
                    fontSize: "25px",
                  }}
                >
                  100+
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "17px",
                    margin: "-10px",
                  }}
                >
                  Games
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "17rem",
                height: "12.5rem",
                margin: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={iconConsole}
                style={{ width: "85px", height: "85px", margin: "25px 0" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "-30px",
                    fontSize: "25px",
                  }}
                >
                  10+
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "17px",
                    margin: "-10px",
                  }}
                >
                  Console
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "17rem",
                height: "12.5rem",
                margin: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={iconRent}
                style={{ width: "85px", height: "85px", margin: "25px 0" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "-30px",
                    fontSize: "25px",
                  }}
                >
                  1000+
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "17px",
                    margin: "-10px",
                  }}
                >
                  Has Been Rent
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Card>
        <div className="text-center mt-4" style={{ margin: "20px 0px" }}>
          <Card.Body
            border="success"
            style={{
              width: "75.5rem",
              height: "30.5rem",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              margin: "auto",
              display: "flex",
              justifyContent: "flex-start", // Updated to align items at the left
              alignItems: "flex-start", // Updated to align items at the top
              flexDirection: "column", // Added to make items stack vertically
              borderRadius: "25px",
              padding: "20px", // Added padding for better appearance
            }}
          >
            <Card.Img
              src={iconLogo}
              style={{
                width: "220px",
                height: "120px",
                marginBottom: "30px",
                textAlign: "left",
              }}
            />
            <div style={{ textAlign: "left", marginTop: "-60px" }}>
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                ALTNEX CONSOLE
              </span>
            </div>
            <div
              style={{ textAlign: "justify", width: "45%", maxWidth: "100%" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </Card.Body>
        </div>
        <div className="text-center mt-4" style={{ margin: "20px 0" }}>
          <h2>DISCOVER THE PLAYSTATION CONSOLE</h2>
          <p
            style={{
              fontSize: "0.85rem",
              textAlign: "center",
              width: "37%",
              maxWidth: "100%",
              margin: "auto",
              display: "block",
            }}
          >
            Play stick and console of incredible PS3, PS4, PS5 and classic
            PlayStation games, and discover epic adventures, unique indies,
            favourites, and everything in between.
          </p>
        </div>
        <div className="text-center mt-4" style={{ margin: "20px 0" }}>
          <h4>PlayStation 3</h4>
        </div>
        <CardCarouselPS3 />
        <div className="text-center mt-4" style={{ margin: "20px 0" }}>
          <h4>PlayStation 4</h4>
        </div>
        <CardCarouselPS4 />
        <div className="text-center mt-4" style={{ margin: "20px 0" }}>
          <h4>PlayStation 5</h4>
        </div>
        <CardCarouselPS5 />
      </div>
      <Footer />
    </>
  );
}

export default Beranda;
