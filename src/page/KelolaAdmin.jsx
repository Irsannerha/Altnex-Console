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

function KelolaAdmin() {
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
      .get("/api/get_admin")
      .then((response) => setAdmins(response.data.admins))
      .catch((error) => console.error("Error fetching admin data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "foto" ? files[0] : value;
    setAdmin({ ...admin, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", admin.nama);
    formData.append("email", admin.email);
    formData.append("password", admin.password);
    formData.append("foto", admin.foto);

    try {
      await axios.post("/api/save_admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowAlert(true);

      setAdmin({
        nama: "",
        email: "",
        password: "",
        foto: "",
      });

      handleCloseModal();
    } catch (error) {
      console.error("Error saving admin:", error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDelete = async (email) => {
    try {
      await axios.delete(`/api/hapus_admin?email=${email}`);
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

  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleShowModalEdit = () => setShowModalEdit(true);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleEdit = (adminData) => {
    setSelectedAdmin(adminData);
    handleShowModalEdit();
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("nama", admin.nama);
    formData.append("email", admin.email);
    formData.append("password", admin.password);
    formData.append("foto", admin.foto);

    try {
      await axios.post(`/api/update_admin?id_user=${selectedAdmin}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowAlert(true);

      setAdmin({
        nama: "",
        email: "",
        password: "",
        foto: "",
      });

      handleCloseModalEdit();
    } catch (error) {
      console.error("Error Updating admin:", error);
    }
  };

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
                  <Navbar.Collapse className="justify-content-end">
                    <Button className="navButton" onClick={handleShowModal}>
                      <svg
                        style={{
                          marginRight: "10px",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.5 2.75C8.5 2.55109 8.42098 2.36032 8.28033 2.21967C8.13968 2.07902 7.94891 2 7.75 2C7.55109 2 7.36032 2.07902 7.21967 2.21967C7.07902 2.36032 7 2.55109 7 2.75V7H2.75C2.55109 7 2.36032 7.07902 2.21967 7.21967C2.07902 7.36032 2 7.55109 2 7.75C2 7.94891 2.07902 8.13968 2.21967 8.28033C2.36032 8.42098 2.55109 8.5 2.75 8.5H7V12.75C7 12.9489 7.07902 13.1397 7.21967 13.2803C7.36032 13.421 7.55109 13.5 7.75 13.5C7.94891 13.5 8.13968 13.421 8.28033 13.2803C8.42098 13.1397 8.5 12.9489 8.5 12.75V8.5H12.75C12.9489 8.5 13.1397 8.42098 13.2803 8.28033C13.421 8.13968 13.5 7.94891 13.5 7.75C13.5 7.55109 13.421 7.36032 13.2803 7.21967C13.1397 7.07902 12.9489 7 12.75 7H8.5V2.75Z"
                          fill="white"
                        />
                      </svg>
                      Tambah Admin
                    </Button>

                    {/* Modal Tambah Data */}
                    <Modal show={showModal} onHide={handleCloseModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Tambah Admin</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formNama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                              type="text"
                              name="nama"
                              value={admin.nama}
                              onChange={handleInputChange}
                              placeholder="Masukkan Nama"
                            />
                          </Form.Group>
                          <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="text"
                              name="email"
                              value={admin.email}
                              onChange={handleInputChange}
                              placeholder="Masukkan Email"
                            />
                          </Form.Group>
                          <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="text"
                              name="password"
                              value={admin.password}
                              onChange={handleInputChange}
                              placeholder="Masukan Password"
                            />
                          </Form.Group>
                          <Form.Group controlId="formFotoProfil">
                            <Form.Label>Foto Profil</Form.Label>
                            <Form.Control
                              type="file"
                              name="foto"
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                          Tutup
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                          Simpan
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Admin</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form>
                            <Form.Group controlId="formNama">
                              <Form.Label>Nama</Form.Label>
                              <Form.Control
                                type="text"
                                name="nama"
                                value={admin.nama}
                                onChange={handleInputChange}
                                placeholder="Masukkan Nama"
                              />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="text"
                                name="email"
                                value={admin.email}
                                onChange={handleInputChange}
                                placeholder="Masukkan Email"
                              />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="text"
                                name="password"
                                value={admin.password}
                                onChange={handleInputChange}
                                placeholder="Masukan Password"
                              />
                            </Form.Group>
                            <Form.Group controlId="formFotoProfil">
                              <Form.Label>Foto Profil</Form.Label>
                              <Form.Control
                                type="file"
                                name="foto"
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Form>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseModalEdit}
                        >
                          Tutup
                        </Button>
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={() => handleUpdate()}
                        >
                          Update
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Navbar.Collapse>
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
                            id="edit"
                            className="buttonAction"
                            onClick={() => handleEdit(admin.id_user)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <path
                                d="M11.625 4H4.625C4.09457 4 3.58586 4.21071 3.21079 4.58579C2.83571 4.96086 2.625 5.46957 2.625 6V20C2.625 20.5304 2.83571 21.0391 3.21079 21.4142C3.58586 21.7893 4.09457 22 4.625 22H18.625C19.1554 22 19.6641 21.7893 20.0392 21.4142C20.4143 21.0391 20.625 20.5304 20.625 20V13"
                                stroke="#624DE3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M19.125 2.5C19.5228 2.10217 20.0624 1.87868 20.625 1.87868C21.1876 1.87868 21.7272 2.10217 22.125 2.5C22.5228 2.89782 22.7463 3.43739 22.7463 4C22.7463 4.56261 22.5228 5.10217 22.125 5.5L12.625 15L8.625 16L9.625 12L19.125 2.5Z"
                                stroke="#624DE3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
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

export default KelolaAdmin;
