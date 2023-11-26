import React, { useState, useEffect } from "react";
import "../index.css";
import Navbars from "../components/Navbars";
import Carousel from "../components/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import iconMember from "../assets/img/iconMembers.png";
import iconGame from "../assets/img/iconStick.png";
import iconConsole from "../assets/img/iconConsole.png";
import iconRent from "../assets/img/iconRent.png";
import backgroundImage from "../assets/img/bgGold.jpg";


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
      }, 500); // Waktu tunggu sebelum menghapus kelas animasi
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(intervalId);
  }, []); // Jalankan sekali pada saat mount

  return (
    <>
      <Navbars />
      <Carousel />
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex align-items-center">
              <span className="mr-2">ALTNEX CONSOLE</span>
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
          height: "16.5rem",
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
              style={{ width: "75px", height: "75px", margin: "15px 0" }}
            />

            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                {" "}
                170+
              </Card.Title>
              <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                {" "}
                Members
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
              style={{ width: "75px", height: "75px", margin: "15px 0" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                50+
              </Card.Title>
              <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
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
              style={{ width: "75px", height: "75px", margin: "15px 0" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                10+
              </Card.Title>
              <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
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
              style={{ width: "75px", height: "75px", margin: "15px 0" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                1000+
              </Card.Title>
              <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
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
            margin: "auto", // Menempatkan elemen ke tengah secara horizontal
            display: "flex", // Menggunakan flexbox
            justifyContent: "center", // Menempatkan elemen ke tengah secara horizontal
            alignItems: "center", // Menempatkan elemen ke tengah secara vertikal
            borderRadius: "25px",
          }}
        ></Card.Body>
      </div>
    </>
  );
}

export default Beranda;
