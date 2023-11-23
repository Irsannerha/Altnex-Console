import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom"; // Sesuaikan dengan cara Anda menangani rute

import backgroundImage from "../assets/img/bg-ps.jpg";
import logo from "../assets/img/iconlog.png";

function NewPass() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <img
            src={`${logo}`}
            alt="Logo"
            style={{
              width: "160px",
              height: "100px",
            }}
          />
          <Card
            border="success"
            style={{
              width: "25rem",
              height: "14rem",
              backgroundColor: "#F6F4F1",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                NEW PASSWORD
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Password Baru Anda"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan Ulangi Password Baru Anda"
                    />
                    <InputGroup.Text
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    width: "120px",
                    height: "40px",
                    backgroundColor: "#FFB031",
                    display: "block",
                    margin: "auto",
                    transition: "background-color 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#3DB5FF")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#FFB031")
                  } //hover
                >
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default NewPass;
