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
  CardBody,
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import iconLogo from "../assets/img/iconlog.png";
import SuperAdminMenu from "../components/SuperAdminMenu";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function KelolaProduk() {
  const [showAlert, setShowAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id_produk: "",
    kategoriPS: "",
    gambar: null,
  });

  useEffect(() => {
    axios
      .get("/api/get_products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "gambar" ? files[0] : value;
    setProduct({ ...product, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id_produk", product.id_produk);
    formData.append("kategoriPS", product.kategoriPS);
    formData.append("gambar", product.gambar);

    try {
      await axios.post("/api/save_product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const response = await axios.get("/api/get_products");
      setProducts(response.data.products);
      setShowAlert(true);
      setProduct({
        id_produk: "",
        kategoriPS: "",
        gambar: null,
      });

      handleCloseModal();
    } catch (error) {}
  };

  const [showModal, setShowModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDelete = async (id_produk) => {
    try {
      await axios.delete(`/api/hapus_produk?id_produk=${id_produk}`);
      // Perbarui daftar product setelah penghapusan
      const updatedProducts = products.filter(
        (product) => product.id_produk !== id_produk
      );
      setProducts(updatedProducts);
      setShowDeleteAlert(true);
    } catch (error) {
      alert("Error deleting product:", error);
    }
  };

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
                    Tambah Produk
                  </Button>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Tambah Produk</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="formNamaProduk">
                          <Form.Label>Id Produk</Form.Label>
                          <Form.Control
                            type="text"
                            name="id_produk"
                            value={product.id_produk}
                            onChange={handleInputChange}
                            placeholder="Masukkan nama produk"
                          />
                        </Form.Group>
                        <Form.Group controlId="formTipeProduk">
                          <Form.Label>Tipe Produk</Form.Label>
                          <Form.Control
                            as="select"
                            name="kategoriPS"
                            value={product.kategoriPS}
                            onChange={handleInputChange}
                          >
                            <option value="/">Pilih Tipe</option>
                            <option value="Playstation 3">Playstation 3</option>
                            <option value="Playstation 4">Playstation 4</option>
                            <option value="Playstation 5">Playstation 5</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGambarProduk">
                          <Form.Label>Gambar Produk</Form.Label>
                          <Form.Control
                            type="file"
                            name="gambar"
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
            {showDeleteAlert && (
              <Alert
                variant="danger"
                onClose={() => setShowDeleteAlert(false)}
                dismissible
              >
                Produk berhasil dihapus!
              </Alert>
            )}
            <Card>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>ID Produk</th>
                    <th>Produk Produk</th>
                    <th>Gambar Produk</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id_produk}>
                      <td>{product.id_produk}</td>
                      <td>{product.kategoriPS}</td>
                      <td>
                        <img
                          src={product.gambar}
                          alt={product.kategoriPS}
                          width="100"
                          height="100"
                        />
                      </td>
                      <td>
                        <button className="buttonAction">
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
                          onClick={() => handleDelete(product.id_produk)}
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
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KelolaProduk;
