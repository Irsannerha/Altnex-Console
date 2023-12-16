import "../style/style.css";
import axios from "axios";
import {
  Card,
  Button,
  Table,
  Navbar,
  Container,
  Form,
  Row,
  Col,
  Modal,
  ListGroup,
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import Navbars from "../components/Navbars";

function HistoryPemesanan() {
  const { user, isLoggedIn } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(`/api/get_pesanan/${user.id_user}`);
          setOrders(response.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchOrders();
    }
  }, [user.id_user, isLoggedIn]);

  if (!isLoggedIn) {
    navigate("/login");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const getVariantByStatus = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Ditolak":
        return "danger";
      case "Setuju":
        return "success";
      default:
        return "primary"; // atau beberapa variant default lainnya
    }
  };

  return (
    <div className="mybg">
      <Navbars />
      {orders.map((order) => (
        <Card
          key={order.idPesanan}
          className="mt-5 mx-auto"
          style={{ width: "110rem" }}
        >
          <Card.Header as="h5">
            {new Date(order.tanggalBooking).toLocaleDateString()}
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="d-flex justify-content-between align-items-center">
                <div className="product-details">
                  <div className="d-flex align-items-center">
                    <img
                      src={order.gambar}
                      alt={order.namaProduk}
                      width="100"
                      height="100"
                      style={{ marginRight: "10px" }}
                    />
                    <div>
                      <strong>{order.namaProduk}</strong>
                      <div
                        style={{
                          color: "#6B6B6B",
                          fontSize: "0.8rem",
                        }}
                      >
                        Waktu Penyewaan
                      </div>
                      <div>
                        {new Date(order.tanggalBooking).toLocaleTimeString()}
                      </div>
                      <div
                        style={{
                          color: "#6B6B6B",
                          fontSize: "0.8rem",
                        }}
                      >
                        Waktu Di Sewa
                      </div>
                      <div>{order.lamaBooking} Jam</div>
                      <div
                        style={{
                          color: "#6B6B6B",
                          fontSize: "0.8rem",
                        }}
                      >
                        Total Harga
                      </div>
                      <div>Rp {order.totalHarga}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button disabled variant={getVariantByStatus(order.status)}>
                    {order.status}
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default HistoryPemesanan;
