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
} from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import SuperAdminMenu from "../components/SuperAdminMenu";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
 import { Dropdown } from "react-bootstrap";

function LaporanPenjualan() {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const getMonthNumber = (monthName) => {
    const monthNumbers = {
      Januari: 1,
      Februari: 2,
      Maret: 3,
      April: 4,
      Mei: 5,
      Juni: 6,
      Juli: 7,
      Agustus: 8,
      September: 9,
      Oktober: 10,
      November: 11,
      Desember: 12,
    };
    return monthNumbers[monthName];
  };

  const [selectedMonth, setSelectedMonth] = useState("Januari");
  const [pesananData, setPesananData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/get_pesanan")
      .then((response) => {
        setPesananData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  const filteredData = pesananData.filter((item) => {
    const monthOfBooking = new Date(item.tanggalBooking).getMonth() + 1; // Bulan di JavaScript dimulai dari 0
    return monthOfBooking === getMonthNumber(selectedMonth);
  });

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
  };

  const renderTableBody = () => {
    return filteredData.map((item) => (
      <tr key={item.idPesanan}>
        <td>{item.idPesanan}</td>
        <td>{item.username}</td>
        <td>{item.tipeProduk}</td>
        <td>{new Date(item.tanggalBooking).toLocaleDateString()}</td>
        <td>{new Date(item.tanggalBooking).toLocaleTimeString()}</td>
        <td>{`Rp ${item.totalHarga}`}</td>
      </tr>
    ));
  };

  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (user.status != "Super Admin" || !isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                  <Dropdown onSelect={(selected) => setSelectedMonth(selected)}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      {selectedMonth}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {months.map((month) => (
                        <Dropdown.Item key={month} eventKey={month}>
                          {month}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Card>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>ID Penjualan</th>
                    <th>Username</th>
                    <th>Tipe Prangkat</th>
                    <th>Tgl Booking</th>
                    <th>Waktu Booking</th>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>{renderTableBody()}</tbody>
              </Table>
            </Card>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LaporanPenjualan;
