import Logo from "../assets/img/logo.png";
import "../index.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Navbars() {
  const [scrolled, setScrolled] = useState(false);
  const { user, isLoggedIn } = useContext(UserContext);
  const { setUser, setIsLoggedIn } = useContext(UserContext);

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

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const handleLogout = () => {
    // Proses logout: Menghapus data dari localStorage, mengatur UserContext
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleHistory = (id_user) => {
    navigate(`/HistoryPemesanan/${id_user}`);
  };

  

  return (
    <>
      <Navbar
        className={`bg-body-tertiary ${scrolled ? "scrolled" : ""}`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="nav-text" href="/">
            <img
              alt=""
              src={Logo}
              width="110"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ALTNEX CONSOLE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="me-3">
                Home
              </Nav.Link>
              <Nav.Link href="#produk" className="me-3">
                Produk
              </Nav.Link>
              <Nav.Link href="#kontak" className="me-3">
                Kontak
              </Nav.Link>
              {
                isLoggedIn ? (
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <Image
                        src={user.gambar}
                        roundedCircle
                        className="profile-pic"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item href={`/HistoryPemesanan/${user.id_user}`}>History</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link href="/login" style={{ fontWeight: "bold" }}>
                    Login
                  </Nav.Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
