import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "../style/style.css";
import gambar1 from "../assets/img/image 29.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function ContenExtra() {
  const { user, isLoggedIn } = useContext(UserContext);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [paymentPlan, setPaymentPlan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [tipePaket, setTipePaket] = useState('');
  const handlePriceSelection = (price, tipe) => {
    setSelectedPrice(price);
    setTipePaket(tipe);
  };
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

  let prices = { regular: 10000, ac: 20000, vip: 30000 };
  if (product && product.kategoriPS === "Playstation 5") {
    prices = { regular: 30000, ac: 40000, vip: 50000 };
  } else if (product && product.kategoriPS === "Playstation 4") {
    prices = { regular: 20000, ac: 30000, vip: 40000 };
  } else if (product && product.kategoriPS === "Playstation 5") {
    prices = { regular: 10000, ac: 20000, vip: 30000 };
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const handlePayment = () => {
    if (!product || !product.harga_sewa) {
      console.error("Informasi produk tidak lengkap");
      return;
    }

    const tanggalWaktu = `${tanggal} 09:00:00`;

    const orderData = {
      bukti_transfer: "",
      id_produk: id,
      id_user: user.id_user,
      tanggal_booking: tanggalWaktu,
      id_pembayaran: paymentPlan,
      lama_booking: 8,
      total_harga: selectedPrice,
      tipe: tipePaket
    };

    axios
      .post("/api/create_order", orderData)
      .then((response) => {
        if (response.data.success) {
          alert("Pesanan berhasil dibuat");
        } else {
          alert("Gagal membuat pesanan");
        }
      })
      .catch((error) => {
        alert("Error submitting order", error);
      });
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
          <img
            style={{ float: "left" }}
            src={product.gambar}
            alt={product.kategoriPS}
            width="100"
            height="100"
          />
          <Card.Title style={{ textAlign: "left" }}>
            PlayStation Plus Extra
          </Card.Title>
          <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
            PlayStation Plus Extra Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </Card.Text>
          <Card.Subtitle className="mb-2 mt-4" style={{ textAlign: "left" }}>
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
              <Form.Control
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
              />
            </Form.Group>
          </div>

          <Card className="cardHargaExtra mt-3">
            <Card.Body>
              <Card.Title
                style={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginTop: "5px",
                }}
              >
                Play night package
              </Card.Title>

              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between mb-2">
                  <div className="d-flex flex-column align-items-center">
                    <p style={{ fontSize: "12px", marginBottom: "-1px" }}>
                      Cigarette room
                    </p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === prices.regular && "selected"
                      }`}
                      onClick={() => handlePriceSelection(prices.regular, 'Cigarette Room')}
                    >
                      {prices.regular}
                    </Button>
                    <p className="durasiPaketExtra">09:00 PM s.d 05:30 AM</p>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <p style={{ fontSize: "12px", marginBottom: "-1px" }}>
                      AC room
                    </p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === prices.ac && "selected"
                      }`}
                      onClick={() => handlePriceSelection(prices.ac, 'AC Room')}
                    >
                      {prices.ac}
                    </Button>
                    <p className="durasiPaketExtra">09:00 PM s.d 05:30 AM</p>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <p style={{ fontSize: "12px", marginBottom: "-1px" }}>
                      VIP room
                    </p>
                    <Button
                      className={`hargaButton ${
                        selectedPrice === prices.vip && "selected"
                      }`}
                      onClick={() => handlePriceSelection(prices.vip, 'VIP')}
                    >
                      {prices.vip}
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
              <Button
                className="tombolJenisPembayaran"
                onClick={() => setPaymentPlan("bayar01")}
              >
                Dana
              </Button>
              <Button
                className="tombolJenisPembayaran"
                onClick={() => setPaymentPlan("bayar02")}
              >
                Gopay
              </Button>
              <Button
                className="tombolJenisPembayaran"
                onClick={() => setPaymentPlan("bayar03")}
              >
                ATM/Bank Trasnfer
              </Button>
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
                  See Usage Terms for details on price changes and how to
                  cancel.
                  <div className="d-flex justify-content-end">
                    <Button className="cekJadwal" onClick={handlePayment}>
                      Pay
                    </Button>
                  </div>
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
