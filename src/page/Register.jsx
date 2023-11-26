import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios';

import backgroundImage from "../assets/img/bg-ps.jpg";
import logo from "../assets/img/iconlog.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [inputData, setInputData] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    try {
      if (inputData.password !== inputData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const response = await axios.post('/api/register', inputData);
      console.log(response.data);
      // Handle response / success
      if (response.data.status === "success") {
        alert("User berhasil ditambahkan");
      } else {
        alert("Gagal menambahkan User");
      }
    } catch (error) {
      console.error('Error sending data', error);
      // Handle error
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
              height: "22.5rem",
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
                REGISTER
              </Card.Title>
              <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" name="nama" placeholder="Masukkan Nama Anda" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Masukkan Email Anda"
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Masukkan Password Anda"
                      onChange={handleInputChange}
                    />
                    <InputGroup.Text
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name = "confirmPassword"
                      placeholder="Masukkan Ulangi Password Anda"
                      onChange={handleInputChange}
                    />
                    <InputGroup.Text
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

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
                    Register
                  </Button>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "13px",
                    }}
                  >
                    Already have an account?{" "}
                    <a
                      href="/login"
                      style={{
                        textDecoration: "none",
                        fontSize: "13px",
                      }}
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Register;