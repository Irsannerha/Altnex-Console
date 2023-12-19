import "../style/styleAdmin.css";
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
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import SuperAdminMenu from "../components/SuperAdminMenu";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { FaCheck } from "react-icons/fa";
import { Dropdown, ButtonGroup, Pagination } from "react-bootstrap";
 import AdminMenu from "../components/AdminMenu";

function KelolaPemesananAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState("");
  const [pesanan, setPesanan] = useState([]);
  useEffect(() => {
    axios
      .get("/api/get_pesanan")
      .then((response) => {
        setPesanan(response.data);
      })
      .catch((error) => console.error("Error fetching pesanan data:", error));
  }, []);

  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (user.status != "Admin" || !isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const updateStatusPesanan = async (idPesanan, status) => {
    try {
      await axios.put(`/api/update_status_pesanan/${idPesanan}`, { status });

      const updatedPesanan = pesanan.map((item) => {
        if (item.idPesanan === idPesanan) {
          return { ...item, status };
        }
        return item;
      });
      setPesanan(updatedPesanan);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPage = Math.ceil(pesanan.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pesanan.slice(indexOfFirstItem, indexOfLastItem);

  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const renderStatusOrActions = (pesananItem) => {
    if (pesananItem.status === "Pending") {
      return (
        <ButtonGroup>
          <Button
            variant="success"
            onClick={() => updateStatusPesanan(pesananItem.idPesanan, "Setuju")}
          >
            <FaCheck />
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              updateStatusPesanan(pesananItem.idPesanan, "Ditolak")
            }
          >
            X
          </Button>
        </ButtonGroup>
      );
    } else {
      return <span>{pesananItem.status}</span>;
    }
  };

  const [showBuktiModal, setShowBuktiModal] = useState(false);
  const [buktiImageUrl, setBuktiImageUrl] = useState("");

  
  const handleShowBukti = (imageUrl) => {
    setBuktiImageUrl(imageUrl);
    setShowBuktiModal(true);
  };

  return (
    <div className="d-flex justify-content-center align-item-center layar">
      <AdminMenu />
      <Card className="contenAdmin d-flex flex-column align-items-center">
        <Card.Body>
          <Card className="navbarAdmin">
            <Card.Body>
              <Navbar className="">
                <Container>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <h3>admin</h3>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>

          <Card className="conten">
            <Navbar className="">
              <Container>
                <Navbar.Brand className="d-flex align-items-left">
                  <div className="d-flex align-items-left">
                    <Form.Label className="navFromLabel">Show</Form.Label>
                    <Form.Control className="navTableFormShow" type="number" />
                  </div>
                  <div className="d-flex align-items-left">
                    <Form.Label className="navFromLabel">entries</Form.Label>
                    <Form inline className="navTableFormSearch">
                      <Row>
                        <Col xs="auto">
                          <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                          />
                        </Col>
                        <Col xs="auto">
                          <Button type="submit">Search</Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
              </Container>
            </Navbar>
            <Card>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>ID Pesanan</th>
                    <th>Nama Produk</th>
                    <th>Tipe Produk</th>
                    <th>Bukti Trasnfer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((pesananItem) => (
                    <tr key={pesananItem.idPesanan}>
                      <td>{pesananItem.idPesanan}</td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={pesananItem.gambar}
                            alt={pesananItem.namaProduk}
                            width="100"
                            height="100"
                            style={{ marginRight: "10px" }}
                          />
                          {pesananItem.namaProduk}
                        </div>
                      </td>
                      <td>{pesananItem.tipeProduk}</td>
                      <td>
                        {pesananItem.buktiTransfer ? (
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleShowBukti(pesananItem.buktiTransfer)
                            }
                          >
                            Lihat Bukti
                          </Button>
                        ) : (
                          "Tidak Ada"
                        )}
                      </td>
                      <td>{renderStatusOrActions(pesananItem)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Enter Notes</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="notes">
                  <Form.Label>Notes:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                  Save Notes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        </Card.Body>
        <Pagination>{items}</Pagination>
      </Card>
      <Modal
        show={showBuktiModal}
        onHide={() => setShowBuktiModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Bukti Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={buktiImageUrl} alt="Bukti Transfer" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBuktiModal(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default KelolaPemesananAdmin;
