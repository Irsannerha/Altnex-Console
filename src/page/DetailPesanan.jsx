import "../style/style.css";
import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbars from "../components/Navbars";

function DetailPesanan() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [pesanan, setPesanan] = useState({
    gambar: null,
  });

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`/api/detail_pesanan/${id}`);
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!orderDetails) {
    return <div>Order details not found.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "gambar" ? files[0] : value;
    setPesanan({ ...pesanan, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("gambar", pesanan.gambar);

    axios
      .post(`/api/upload_bukti_pembayaran/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // handle success
        if (response.data.success) {
          alert("Gambar berhasil dimasukan");
        } else {
          alert("Gagal memuat gambar");
        }
      })
      .catch((error) => {
        // handle error
        console.error("Error uploading file: ", error);
        alert("Error uploading file");
      });
  };

  return (
    <div className="mybg">
      <Navbars />
      <div
        className="d-flex justify-content-center"
        style={{
          minHeight: "calc(100vh - 56px)",
          minWidth: "1200px",
        }}
      >
        <Card
          className="m-4"
          style={{
            width: "50rem",
            minWidth: "1200px",
          }}
        >
          <Card.Header>
            <Button
              style={{ marginLeft: "65rem" }}
              disabled
              variant={getVariantByStatus(orderDetails.status)}
            >
              {orderDetails.status}
            </Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <img
                  style={{ marginTop: "10rem" }}
                  src={orderDetails.gambar}
                  alt={orderDetails.namaProduk}
                  width="100%"
                  height="auto"
                />
              </Col>
              <Col md={8}>
                <Card.Title className="mt-3 mb-5">
                  {orderDetails.namaProduk}
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Tanggal Booking:{" "}
                    {new Date(orderDetails.tanggalBooking).toLocaleDateString()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Waktu:{" "}
                    {new Date(orderDetails.tanggalBooking).toLocaleTimeString()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Pembayaran: {orderDetails.namaPembayaran}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    No Pembayaran: {orderDetails.noPembayaran}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Harga: Rp {orderDetails.totalHarga}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Lama Booking: {orderDetails.lamaBooking} Jam
                  </ListGroup.Item>
                  <Form className="mt-5">
                    Upload Bukti Pembayaran
                    <Form.Group controlId="formGambarProduk">
                      <Form.Control
                        type="file"
                        name="gambar"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form>
                  <Button variant="warning" onClick={handleSubmit}>
                    Pay
                  </Button>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function getVariantByStatus(status) {
  switch (status) {
    case "Pending":
      return "secondary";
    case "Ditolak":
      return "danger";
    case "Setuju":
      return "success";
    default:
      return "primary";
  }
}

export default DetailPesanan;
