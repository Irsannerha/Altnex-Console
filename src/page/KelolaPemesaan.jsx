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

import { Dropdown, ButtonGroup } from "react-bootstrap";

function KelolaPemesanan() {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (user.status != "Admin" || !isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="d-flex justify-content-center align-item-center layar">
      <SuperAdminMenu />
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
                    <th>Detail Pesanan</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>###</td>
                    <td>###</td>
                    <td>###</td>
                    <td>###</td>
                    <td>###</td>
                    <td>
                      <ButtonGroup>
                        <Button variant="success">
                          <FaCheck />
                        </Button>
                        <Button
                          variant="danger"
                          style={{ fontWeight: "bold" }}
                          onClick={() => setShowModal(true)}
                        >
                          X
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
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
      </Card>
    </div>
  );
}

export default KelolaPemesanan;
