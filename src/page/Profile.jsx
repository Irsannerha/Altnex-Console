import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
} from "react-bootstrap";
import "../style/style.css";
import Navbars from "../components/Navbars";
import axios from "axios";

const UserProfile = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [users, setUser] = useState({
    nama: "",
    email: "",
    password: "",
    foto: "",
  });

  const [tempUser, setTempUser] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/get_user?email=${user.email}`)
      .then((response) => setTempUser(response.data))
      .catch((error) => console.error("Error fetching admin data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "foto" ? files[0] : value;
    setUser({ ...users, [name]: newValue });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!users.nama || !users.email || !users.password || !users.foto) {
      alert("Lengkapi");
      return;
    }

    const formData = new FormData();
    formData.append("nama", users.nama);
    formData.append("email", users.email);
    formData.append("password", users.password);
    formData.append("foto", users.foto);

    try {
      await axios.post(`/api/update_user?id_user=${user.id_user}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Sukses Mengubah Profile");

      setUser({
        nama: "",
        email: "",
        password: "",
        foto: "",
      });
    } catch (error) {
      console.error("Error Updating User:", error);
    }
  };

  return (
    <div className="mybg" style={{ minHeight: "100vh" }}>
      <Navbars />
      <Container className="d-flex vh-100">
        <Row className="justify-content-center align-self-center w-100">
          <Col md={6}>
            <Card style={{ width: "50rem", height: "50rem" }}>
              <Card.Body>
                <Card style={{ height: "48rem" }}>
                  <Card.Body>
                    <Image
                      src={tempUser.gambar}
                      roundedCircle
                      className="d-block mx-auto mb-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h3 className="text-center mb-3">{user.nama}</h3>
                    <Form>
                      <Form.Group controlId="formNama">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control
                          type="text"
                          name="nama"
                          value={users.nama}
                          onChange={handleInputChange}
                          placeholder="Masukkan Nama"
                        />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          value={users.email}
                          onChange={handleInputChange}
                          placeholder="Masukkan Email"
                        />
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          name="password"
                          value={users.password}
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
                    <Button
                      variant="primary"
                      type="submit"
                      className="d-block mx-auto mt-3"
                      onClick={(event) => handleUpdate(event)}
                    >
                      Ubah
                    </Button>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
