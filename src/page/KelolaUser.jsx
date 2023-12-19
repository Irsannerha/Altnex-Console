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
  Alert,
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import iconLogo from "../assets/img/iconlog.png";
import SuperAdminMenu from "../components/SuperAdminMenu";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Pagination } from "react-bootstrap";
 import AdminMenu from "../components/AdminMenu";

function KelolaUser() {
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [admin, setAdmin] = useState({
    nama: "",
    email: "",
    password: "",
    foto: "",
  });

  useEffect(() => {
    axios
      .get("/api/get_member")
      .then((response) => setAdmins(response.data.admins))
      .catch((error) => console.error("Error fetching admin data:", error));
  }, []);

  
  
  const handleDelete = async (email) => {
    try {
      await axios.delete(`/api/hapus_user?email=${email}`);
      // Perbarui daftar admin setelah penghapusan
      const updatedAdmins = admins.filter((admin) => admin.email !== email);
      setAdmins(updatedAdmins);
      setShowDeleteAlert(true);
    } catch (error) {
      alert("Error deleting admin:", error);
    }     
  };

  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (user.status != "Admin" || !isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPage = Math.ceil(admins.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = admins.slice(indexOfFirstItem, indexOfLastItem);

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
            <Card.Body>
              <Navbar className="">
                <Container>
                  <Navbar.Brand className="d-flex align-items-left">
                    <div className="d-flex align-items-left">
                      <Form.Label className="navFromLabel">Show</Form.Label>
                      <Form.Control
                        className="navTableFormShow"
                        type="number"
                      />
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
                 
                </Container>
              </Navbar>
              {showAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Data berhasil diinputkan!
                </Alert>
              )}
              <Card>
                <Table responsive="sm">
                  {showDeleteAlert && (
                    <Alert
                      variant="danger"
                      onClose={() => setShowDeleteAlert(false)}
                      dismissible
                    >
                      Admin berhasil dihapus!
                    </Alert>
                  )}
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Foto</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((admin) => (
                      <tr key={admin.id_user}>
                        <td>{admin.id_user}</td>
                        <td>
                          <img src={admin.foto} width="100" height="100" />
                        </td>
                        <td>{admin.nama}</td>
                        <td>{admin.email}</td>
                        <td>{admin.password}</td>
                        <td>
                          <button
                            id="hapus"
                            className="buttonAction"
                            onClick={() => handleDelete(admin.email)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                d="M3.625 6H5.625H21.625"
                                stroke="#A30D11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.625 6V4C8.625 3.46957 8.83571 2.96086 9.21079 2.58579C9.58586 2.21071 10.0946 2 10.625 2H14.625C15.1554 2 15.6641 2.21071 16.0392 2.58579C16.4143 2.96086 16.625 3.46957 16.625 4V6M19.625 6V20C19.625 20.5304 19.4143 21.0391 19.0392 21.4142C18.6641 21.7893 18.1554 22 17.625 22H7.625C7.09457 22 6.58586 21.7893 6.21079 21.4142C5.83571 21.0391 5.625 20.5304 5.625 20V6H19.625Z"
                                stroke="#A30D11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.625 11V17"
                                stroke="#A30D11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.625 11V17"
                                stroke="#A30D11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Card.Body>
          </Card>
        </Card.Body>
        <Pagination>{items}</Pagination>
      </Card>
    </div>
  );
}

export default KelolaUser;
