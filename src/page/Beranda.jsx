import React, { useState, useEffect } from "react";
import "../index.css";
import Navbars from "../components/Navbars";
import Carousel from "../components/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


function Beranda() {
  const promoTexts = [
    "Promo ! Besar-Besaran dapatkan diskon nya sekarang juga!...",
    "Promo ! Buruan Mainkan sekarang juga!...",
    "Sambut ! Ajang bergengsi lomba PES 2023. Buruan Daftar Sekarang juga!...",
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
    </>
  );
}

export default Beranda;
