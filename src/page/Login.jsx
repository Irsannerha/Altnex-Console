import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom"; // Sesuaikan dengan cara Anda menangani rute

import backgroundImage from "../assets/img/bg-ps.jpg";
import logo from "../assets/img/iconlog.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login Berhasil")
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error('There was an error:', error);
      alert('Terjadi kesalahan: ' + error.message);
    }
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
              height: "17.9rem",
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
                  marginTop: "7px",
                }}
              >
                LOGIN
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Masukkan Email Anda"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Masukkan Password Anda"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <InputGroup.Text
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                  <Link
                    to="/forgotpassword"
                    style={{ fontSize: "0.8rem", textDecoration: "none" }}
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div>
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
                    Login
                  </Button>
                  <p style={{ textAlign: "center", marginTop: "10px", fontSize: "13px" }}>
                    Do you have an account?{" "}
                    <a
                      href="/register"
                      style={{ fontSize: "0.9rem", textDecoration: "none", fontSize: "13px" }}
                    >
                      Register
                    </a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
