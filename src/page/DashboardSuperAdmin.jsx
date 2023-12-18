import React, { useState, useEffect } from "react";
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
// import { Bar } from "react-chartjs-2";
import SuperAdminMenu from "../components/SuperAdminMenu";
import BarChart from "../components/BarChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserShield, faBox } from "@fortawesome/free-solid-svg-icons";
import "../style/styleAdmin.css";

function DashboardSuperAdmin() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [chartData, setChartData] = useState([]);

  const fetchData = () => {
    fetch('/api/total_members')
    .then(response => response.json())
    .then(data => {
      setTotalUsers(data.total_members);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });

    fetch('/api/total_admins')
    .then(response => response.json())
    .then(data => {
      setTotalAdmins(data.total_admins);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });

    fetch('/api/total_products')
    .then(response => response.json())
    .then(data => {
      setTotalProducts(data.total_products);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });

    fetch(`/api/total_harga_per_bulan?tahun=2023`)
    .then(response => response.json())
    .then(data => {
      const newChartData = Object.entries(data).map(([bulan, total]) => ({
        Year: bulan,
        value: total,
      }));
      setChartData(newChartData);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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

          <Card className="conten ">
            <h2>Overview</h2>
            <Row className="justify-content-center align-items-center">
              <Col>
                <div className="dashboard-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <p>Jumlah Akun Terdaftar: {totalUsers}</p>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faUserShield} size="lg" />
                    <p>Jumlah Admin: {totalAdmins}</p>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faBox} size="lg" />
                    <p>Jumlah Produk: {totalProducts}</p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
              <Col>
                <h3>Total Pendapatan</h3>
                <BarChart data={chartData} />
              </Col>
            </Row>
          </Card>
        </Card.Body>
      </Card>
    </div>

    // <div className="dashboard-super-admin">
    //   <SuperAdminMenu />

    //   <Container className="layar">
    //     <Row className="justify-content-center align-items-center">
    //       <Col>

    //       </Col>
    //       <Col>
    //         <Card>
    //           <Card.Body></Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default DashboardSuperAdmin;
