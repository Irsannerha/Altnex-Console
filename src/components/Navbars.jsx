import Logo from "../assets/img/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";

function Navbars() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Navbar
        className={`bg-body-tertiary ${scrolled ? "scrolled" : ""}`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="95"
              height="25"
              className="d-inline-block align-top"
            />{" "}
            ALTNEX CONSOLE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-3">
                Home
              </Nav.Link>
              <Nav.Link href="#produk" className="me-3">
                Produk
              </Nav.Link>
              <Nav.Link href="#kontak" className="me-3">
                Kontak
              </Nav.Link>
              <Nav.Link href="/login" style={{ fontWeight: "bold" }}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
