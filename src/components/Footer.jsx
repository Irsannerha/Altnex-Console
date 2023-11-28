import React from "react";
import Card from "react-bootstrap/Card";
import "../style/stylefooter.css";
import iconLogo from "../assets/img/iconlog.png";

function Footer() {
    return (
      <Card className="footer-card">
        <Card.Body className="footer-body">
          <div className="footer-content d-flex justify-content-center align-item-center">
            <div className="d-flex mr-4">
              <img src={iconLogo} alt="Logo" className="footer-logo" />
              <p className="footer-title">ALTNEX CONSOLE</p>
            </div>
           <div className="footer-content-links">
              <h3 className="footer-link">USEFUL LINKS</h3>
              </div>
              <div className="footer-content-link">
            <h3 className="footer-link">CONTACT</h3>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}

export default Footer;