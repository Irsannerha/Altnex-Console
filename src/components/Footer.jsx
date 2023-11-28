import React from "react";
import Card from "react-bootstrap/Card";
import "../style/stylefooter.css";
import iconLogo from "../assets/img/iconlog.png";
import iconStickTwo from "../assets/img/iconStickTwo.png";

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
            <h5>USEFULL LINKS</h5>
            <a className="link" href="">
              Home
            </a>
            <a className="link" href="">
              Profil
            </a>
            <a className="link" href="">
              Produk
            </a>
            <a className="link" href="">
              Login
            </a>
          </div>
          <div className="footer-cotact-links d-flex flex-column align-items-left justify-content-left ">
            <h5>CONTACT</h5>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Dummy, IDN 2023 Way Huwi, Lampung Selatan</p>
            </div>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>support@altnexconsole.com</p>
            </div>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95L15.0499 5ZM15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94L15.0499 1ZM21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>+62 0895 1234 56789</p>
            </div>
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
