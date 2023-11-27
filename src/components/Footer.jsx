import React from "react";
import Card from "react-bootstrap/Card";
import iconLogo from "../assets/img/iconlog.png";

function Footer() {
    return (
        <Card className="footer-card" style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000" }}>
            <Card.Body style={{ backgroundColor: "#FFB031" }}>
                <div className="footer-content">
                    <div className="footer-left">
                        <img src={iconLogo} alt="Logo" className="footer-logo" />
                        <span className="footer-title">ALTNEX CONSOLE</span>
                    </div>
                    <div className="footer-right">
                        <span className="footer-link">USEFUL LINKS</span>
                        <span className="footer-link">CONTACT</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Footer;