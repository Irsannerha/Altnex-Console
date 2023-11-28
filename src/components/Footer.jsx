import React from "react";
import Card from "react-bootstrap/Card";
import "../style/stylefooter.css";
import iconLogo from "../assets/img/iconlog.png";

function Footer() {
  return (
    <Card className="footer-card">
      <Card.Body className="footer-body">
        <div className="footer-content d-flex justify-content-center align-item-center">
          <div className="d-flex flex-column align-items-center footer-logo">
            <div className="d-flex justify-content-left align-item-left mr-4 ">
              <img src={iconLogo} alt="Logo" className="logoAlt" />
              <p className="footer-title">ALTNEX CONSOLE</p>
            </div>
            <p>
              PlayStation RENTAL ALTNEX CONSOLE Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="footer-content-links d-flex flex-column align-items-left justify-content-left ">
            <h5>USEFUL LINKS</h5>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          </div>
          <div className="footer-cotact-links d-flex flex-column align-items-left justify-content-left ">
            <h5>CONTACT</h5>
            <p>asas</p>
            <p>asas</p>
            <p>asas</p>
          </div>
          <div className="footer-news-links d-flex flex-column align-items-left justify-content-left">
            <h5>NEWSLATTER</h5>
            <p>asas</p>
            <p>asas</p>
            <p>asas</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;
