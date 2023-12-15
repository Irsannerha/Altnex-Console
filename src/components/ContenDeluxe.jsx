import { Card, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../style/style.css";
import gambar1 from "../assets/img/image 29.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ContenDeluxe() {
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');
  const [durasi, setDurasi] = useState('');
  const [paymentPlan, setPaymentPlan] = useState('');
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/get_products/${id}`)
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  const handleSubmit = () => {
    // Kirim data ke server atau handle di sini
    console.log({ tanggal, waktu, durasi, paymentPlan });
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
            PlayStation Plus Deluxe
          </Card.Title>
          <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
            PlayStation Plus Deluxe Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </Card.Text>

          <Card.Subtitle className="mb-2 mt-4" style={{ textAlign: "left" }}>
            Input Date, Time, and Duration
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
              <Form.Control type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
            </Form.Group>

            <Form.Group
              controlId="formTime"
              style={{ textAlign: "left", marginRight: "10px" }}
            >
              <Form.Label></Form.Label>
              <Form.Control type="time" value={waktu} onChange={(e) => setWaktu(e.target.value)} />
            </Form.Group>
            <Form.Group
              controlId="formTime"
              style={{ textAlign: "left", width: "60px" }}
            >
              <Form.Label></Form.Label>
              <Form.Control id="duration" type="number" value={durasi} onChange={(e) => setDurasi(e.target.value)} />
            </Form.Group>
          </div>

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
        style={{
          marginLeft: "20px",
          backgroundColor: "#DFE3E7",
          height: "380px",
        }}
      >
        <Card.Body>
          <Card
            style={{
              border: "none",
              color: "#FCC000",
              backgroundColor: "#252524",
            }}
            className="judulMetodePembayaran"
          >
            <Card.Body>PACKAGE DELUXE</Card.Body>
          </Card>

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
            <Button className="tombolJenisPembayaran" onClick={() => setPaymentPlan('bayar01')}>Dana</Button>
            <Button className="tombolJenisPembayaran" onClick={() => setPaymentPlan('bayar02')}>Gopay</Button>
            <Button className="tombolJenisPembayaran" onClick={() => setPaymentPlan('bayar03')}>ATM/Bank Trasnfer</Button>
          </div>
          <div className="d-flex justify-content-center align-item-center mt-4">
            <div style={{ width: "80%" }}>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                See Usage Terms for details on price changes and how to cancel.
                <div className="d-flex justify-content-end">
                  <Button className="cekJadwal" onClick={handleSubmit}>Pay</Button>
                </div>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContenDeluxe;
