import Navbars from "../components/Navbars";
import { Card, Button, Form } from "react-bootstrap";
import "../style/style.css";
import gameOver from "../assets/img/gameOver.png";
import ContenDeluxe from "../components/ContenDeluxe";
import ContenExtra from "../components/ContenExtra";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function Pemesanan() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/get_products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);
  const [currentContent, setCurrentContent] = useState("Deluxe");

  const switchToDeluxe = () => {
    setCurrentContent("Deluxe");
  };

  const switchToExtra = () => {
    setCurrentContent("Extra");
  };
  

  let contentComponent;
  if (currentContent === "Deluxe") {
    contentComponent = <ContenDeluxe />;
  } else {
    contentComponent = <ContenExtra />;
  }
  
  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    } else if (user.status != "Member"){
      navigate('/Dashboard');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="mybg">
      <Navbars />
      <div className="d-flex flex-column align-items-center">
        <div className=" mt-4">
          <h1>CHOOSE YOUR GAMING PLAN</h1>
        </div>
        <div
          className="text-black d-flex justify-content-center align-item-center "
          style={{
            marginTop: "-10px",
            fontSize: "14px",
          }}
        >
          <p>
            Pick from two new gaming options to get the games and benefits you
            need
          </p>
        </div>

        <Card className="cardPemesanan boederRadius">
          <Card.Body>
            <Button
              style={{
                backgroundColor: "#252524",
                color: "#FCC000",
                marginRight: "20px",
              }}
              className="tombolPaket boederRadius"
              onClick={switchToDeluxe}
            >
              DELUXE
              <div
                className="subTextDeluxe"
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Play, connect, explore
              </div>
            </Button>
            <Button
              style={{
                backgroundColor: "#FCC000",
                color: "#252524",
                marginLeft: "20px",
              }}
              className="tombolPaket boederRadius"
              onClick={switchToExtra}
            >
              EXTRA
              <div style={{ fontSize: "12px" }} className="subTextExtra">
                Experience all the benefits
              </div>
            </Button>
            {contentComponent}
          </Card.Body>
        </Card>

        <div style={{ marginTop: "-140px" }}>
          <img
            style={{
              marginTop: "-100px",
            }}
            src={gameOver}
            alt="Your Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Pemesanan;
