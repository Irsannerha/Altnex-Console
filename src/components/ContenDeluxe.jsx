import {
  Card,
  Button,
  Form,
  Modal,
  ListGroup,
  ListGroupItem,
  Table,
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import "../style/style.css";
import gambar1 from "../assets/img/image 29.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

function ContenDeluxe() {
  const { user, isLoggedIn } = useContext(UserContext);
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [durasi, setDurasi] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("");
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [pesanan, setPesanan] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
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

  const handleSubmit = () => {
    if (!product || !product.harga_sewa) {
      console.error("Informasi produk tidak lengkap");
      return;
    }

    const totalHarga = product.harga_sewa * parseInt(durasi, 10);
    const tanggalWaktu = `${tanggal} ${waktu}:00`;

    const orderData = {
      bukti_transfer: "",
      id_produk: id,
      id_user: user.id_user,
      tanggal_booking: tanggalWaktu,
      id_pembayaran: paymentPlan,
      lama_booking: parseInt(durasi, 10),
      total_harga: totalHarga,
      tipe: "Deluxe",
    };

    axios
      .post("/api/create_order", orderData)
      .then((response) => {
        if (response.data.success) {
          alert("Pesanan berhasil dibuat");
          navigate(`/detailPesanan/${response.data.id_pesanan}`);
        } else {
          alert("Gagal membuat pesanan");
        }
      })
      .catch((error) => {
        alert("Error submitting order", error);
      });
  };

  useEffect(() => {
    axios
      .get("/api/get_pesanan")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPesanan(response.data);
        } else {
          console.error("Received non-array response data:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

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
              <Form.Control
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="formTime"
              style={{ textAlign: "left", marginRight: "10px" }}
            >
              <Form.Label></Form.Label>
              <Form.Control
                type="time"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              controlId="formTime"
              style={{ textAlign: "left", width: "60px" }}
            >
              <Form.Label></Form.Label>
              <Form.Control
                id="duration"
                type="number"
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-left align-item-left">
            <Button className="cekJadwal" onClick={handleShow}>
              Cek Jadwal
            </Button>
          </div>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Jadwal PlayStation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Ini adalah jadwal PlayStation yang tersedia.
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Paket</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {pesanan.map((pesanan) => (
                    <tr key={pesanan.idPesanan}>
                      <td>{pesanan.idPesanan}</td>
                      <td>{pesanan.tipe}</td>
                      <td>
                        {new Date(pesanan.tanggalBooking).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(pesanan.tanggalBooking).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

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
                See Usage Terms for details on price changes and how to cancel.
                <div className="d-flex justify-content-end">
                  <Button className="cekJadwal" onClick={handleSubmit}>
                    Pay
                  </Button>
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
