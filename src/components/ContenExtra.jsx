import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "../style/style.css";
import gambar1 from "../assets/img/image 29.png";

function ContenExtra() {
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePriceSelection = (price) => {
    setSelectedPrice(price);
  };

  const handlePayment = () => {
    // Kode untuk mengirimkan data ke database
    console.log(`Selected Price: ${selectedPrice}`);
    // Tambahkan logika atau panggilan API ke database di sini
  };
  return (
    <div className="d-flex justify-content-center align-item-center">
      <Card
        className="contenPemesanan"
        style={{
          marginRight: "20px",
          backgroundColor: "#F5F7FA",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            PlayStation Plus Extra
          </Card.Title>
          <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
            PlayStation Plus Extra Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </Card.Text>
          <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>
            Input Date
          </Card.Subtitle>
          <div
            className="d-flex justify-content-left align-item-left"
            style={{ marginTop: "-20px" }}
          >
            <Form.Group
              controlId="formDate"
              style={{
                textAlign: "left",
                marginRight: "10px",
                width: "140px",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>

          <Card className="cardHargaExtra mt-3">
            <Card.Body>
              <Card.Title
                style={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Play night package
              </Card.Title>

              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between mb-2">
                  <div className="d-flex flex-column align-items-center">
                    <p style={{fontSize: "12px", marginBottom: "-1px"}}>Cigarette room</p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === 10000 && "selected"
                      }`}
                      onClick={() => handlePriceSelection(10000)}
                    >
                      10000
                    </Button>
                    <p className="durasiPaketExtra">09:00 PM s.d 05:30 AM</p>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <p style={{fontSize: "12px", marginBottom: "-1px"}}>AC room</p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === 25000 && "selected"
                      }`}
                      onClick={() => handlePriceSelection(25000)}
                    >
                      25000
                    </Button>
                    <p className="durasiPaketExtra">09:00 PM s.d 05:30 AM</p>
                  </div>

                  <div  className="d-flex flex-column align-items-center">
                    <p style={{fontSize: "12px", marginBottom: "-1px"}}>VIP room</p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === 30000 && "selected"
                      }`}
                      onClick={() => handlePriceSelection(30000)}
                    >
                      30000
                    </Button>
                    <p className="durasiPaketExtra">09:00 PM s.d 05:30 AM</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-left align-item-left">
            <Button className="cekJadwal">Cek Jadwal</Button>
          </div>

          <img
            style={{
              width: "350px",
              height: "134px",
              marginTop: "10px",
            }}
            src={gambar1}
            alt="Your Image"
          />
        </Card.Body>
      </Card>

      <Card
        className="contenPemesanan boederRadius"
        style={{ marginLeft: "20px", backgroundColor: "#DFE3E7", height: "380px"}}
      >
        <Card.Body>
          <Card
            style={{
              border: "none",
              color: "#252524",
              backgroundColor: "#fcc000",
            }}
            className="judulMetodePembayaran"
          >
            <Card.Body>PACKAGE EXTRA</Card.Body>
          </Card>
          
          <div className="d-flex flex-column align-items-center">

          <Card.Title
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Choose a payment plan
          </Card.Title>
          <div className="d-flex flex-column align-items-center">
            <Button className="tombolJenisPembayaran">Dana</Button>
            <Button className="tombolJenisPembayaran">Gopay</Button>
            <Button className="tombolJenisPembayaran">ATM/Bank Trasnfer</Button>
          </div>
          <div className="d-flex justify-content-center align-item-center mt-4">
            <div style={{ width: "80%", }}>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "bold",
                  
                }}
              >
                See Usage Terms for details on price changes and how to cancel.
              </p>
            </div>
          </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContenExtra;
