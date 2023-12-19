import "../style/styleAdmin.css";
import {
  Card,
  Button,
} from "react-bootstrap";
import iconLogo from "../assets/img/iconlog.png";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SuperAdminMenu() {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    // Proses logout: Menghapus data dari localStorage, mengatur UserContext
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login')
  };

  const handleNavigateToKelolaProduk = () => {
    navigate('/KelolaProdukSuperAdmin');
  };

  const handleNavigateToKelolaAdmin = () => {
    navigate('/KelolaAdmin');
  };
  const handleNavigateToLaporanPenjualan = () => {
    navigate('/LaporanPenjualan');
  };
  const handleNavigateToKelolaPemesanan = () => {
    navigate('/KelolaPemesanan');
  };
  const handleNavigateToDashboard = () => {
    navigate('/DashboardSuperAdmin');
  };
  
  
  return (
      <Card className="menuAdmin d-flex flex-column align-items-center">
        <Card.Body>
          <div className="judulMenu d-flex flex-column align-items-center">
            <img src={iconLogo} alt="Logo" className="logoAlt" />
            <h4>AltNex Console</h4>
          </div>

          <div className="d-flex flex-column align-items-left">
            <div>
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "-23px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M16.25 11.25V3.75H26.25V11.25H16.25ZM3.75 16.25V3.75H13.75V16.25H3.75ZM16.25 26.25V13.75H26.25V26.25H16.25ZM3.75 26.25V18.75H13.75V26.25H3.75Z"
                  fill="black"
                />
              </svg>
              <Button className="tombolMenu" onClick={handleNavigateToDashboard}>Dashboard</Button>
            </div>
            <div>
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "-25px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
              >
                <path
                  d="M19 7.75C21.075 7.75 22.7375 6.075 22.7375 4C22.7375 1.925 21.075 0.25 19 0.25C16.925 0.25 15.25 1.925 15.25 4C15.25 6.075 16.925 7.75 19 7.75ZM9 7.75C11.075 7.75 12.7375 6.075 12.7375 4C12.7375 1.925 11.075 0.25 9 0.25C6.925 0.25 5.25 1.925 5.25 4C5.25 6.075 6.925 7.75 9 7.75ZM9 10.25C6.0875 10.25 0.25 11.7125 0.25 14.625V16.5C0.25 17.1875 0.8125 17.75 1.5 17.75H16.5C17.1875 17.75 17.75 17.1875 17.75 16.5V14.625C17.75 11.7125 11.9125 10.25 9 10.25ZM19 10.25C18.6375 10.25 18.225 10.275 17.7875 10.3125C17.8125 10.325 17.825 10.35 17.8375 10.3625C19.2625 11.4 20.25 12.7875 20.25 14.625V16.5C20.25 16.9375 20.1625 17.3625 20.025 17.75H26.5C27.1875 17.75 27.75 17.1875 27.75 16.5V14.625C27.75 11.7125 21.9125 10.25 19 10.25Z"
                  fill="black"
                />
              </svg>
              <Button className="tombolMenu" onClick={handleNavigateToKelolaAdmin}>Kelola Admin</Button>
            </div>
            <div>
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "-25px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M21.8751 21.875C25.0001 26.25 29.9363 23.0187 28.7501 18.75C26.9688 12.3387 26.0001 8.77 25.4963 6.885C25.3522 6.34524 25.0343 5.86803 24.5916 5.52726C24.1489 5.1865 23.6062 5.00118 23.0476 5H6.95256C5.80506 5 4.80506 5.78125 4.52631 6.89375C3.47506 11.0787 2.54131 14.7525 1.43006 18.75C0.245059 23.0187 5.18006 26.25 8.30506 21.875"
                  stroke="black"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 5V7.5C20 8.16304 19.7366 8.79893 19.2678 9.26777C18.7989 9.73661 18.163 10 17.5 10H12.5C11.837 10 11.2011 9.73661 10.7322 9.26777C10.2634 8.79893 10 8.16304 10 7.5V5M10 20C10.663 20 11.2989 19.7366 11.7678 19.2678C12.2366 18.7989 12.5 18.163 12.5 17.5C12.5 16.837 12.2366 16.2011 11.7678 15.7322C11.2989 15.2634 10.663 15 10 15C9.33696 15 8.70107 15.2634 8.23223 15.7322C7.76339 16.2011 7.5 16.837 7.5 17.5C7.5 18.163 7.76339 18.7989 8.23223 19.2678C8.70107 19.7366 9.33696 20 10 20ZM20 20C20.663 20 21.2989 19.7366 21.7678 19.2678C22.2366 18.7989 22.5 18.163 22.5 17.5C22.5 16.837 22.2366 16.2011 21.7678 15.7322C21.2989 15.2634 20.663 15 20 15C19.337 15 18.7011 15.2634 18.2322 15.7322C17.7634 16.2011 17.5 16.837 17.5 17.5C17.5 18.163 17.7634 18.7989 18.2322 19.2678C18.7011 19.7366 19.337 20 20 20Z"
                  stroke="black"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Button className="tombolMenu" onClick={handleNavigateToKelolaProduk }>Kelola Produk</Button>
            </div>
            <div className="d-flex justify-content-left align-item-left">
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "5px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="29"
                viewBox="0 0 33 29"
                fill="none"
              >
                <path
                  d="M1.75907 0.00980409C1.21196 0.11232 0.722029 0.465163 0.397062 0.990712C0.0720955 1.51626 -0.0612907 2.17147 0.0262468 2.81219C0.113784 3.45291 0.415075 4.02667 0.863839 4.40724C1.3126 4.78781 1.87208 4.94402 2.41919 4.8415H8.60783L8.97915 6.04943L10.6707 12.0891L12.3623 18.1287C12.5273 18.7568 13.2287 19.3366 13.765 19.3366H28.2052C28.7828 19.3366 29.4429 18.7568 29.6079 18.1287L32.9498 6.04943C33.1148 5.42131 32.8673 4.8415 32.2897 4.8415H13.9713L12.4035 1.36268C12.2365 0.963385 11.9787 0.6258 11.6584 0.3871C11.3381 0.148399 10.9678 0.0178417 10.5882 0.00980408L2.33667 0.00980409C2.21315 -0.00326803 2.08888 -0.00326803 1.96535 0.00980408C1.88291 0.00400082 1.80025 0.00400082 1.71781 0.00980408L1.75907 0.00980409ZM14.7965 24.1683C13.6413 24.1683 12.7336 25.2313 12.7336 26.5841C12.7336 27.937 13.6413 29 14.7965 29C15.9517 29 16.8593 27.937 16.8593 26.5841C16.8593 25.2313 15.9517 24.1683 14.7965 24.1683ZM27.1737 24.1683C26.0185 24.1683 25.1109 25.2313 25.1109 26.5841C25.1109 27.937 26.0185 29 27.1737 29C28.329 29 29.2366 27.937 29.2366 26.5841C29.2366 25.2313 28.329 24.1683 27.1737 24.1683Z"
                  fill="black"
                />
              </svg>
              <Button className="tombolMenu" onClick={handleNavigateToKelolaPemesanan}>Kelola Pesanan</Button>
            </div>

            <div className="d-flex justify-content-left align-item-left">
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "20px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M25 10L17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10ZM11.25 23.75H8.75V12.5H11.25V23.75ZM16.25 23.75H13.75V16.25H16.25V23.75ZM21.25 23.75H18.75V20H21.25V23.75ZM17.5 11.25H16.25V5L22.5 11.25H17.5Z"
                  fill="black"
                />
              </svg>
              <Button className="tombolMenu"  onClick={handleNavigateToLaporanPenjualan }>Laporan Penjualan</Button>
            </div>

            <div
              style={{ marginTop: "100px" }}
              className="d-flex justify-content-left align-item-left"
            >
              <svg
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "5px",
                  flexShrink: "0",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M25.4297 21.4453H23.3702C23.2295 21.4453 23.0977 21.5068 23.0098 21.6152C22.8047 21.8642 22.585 22.1045 22.3536 22.333C21.407 23.2805 20.2857 24.0357 19.0518 24.5566C17.7734 25.0966 16.3995 25.3736 15.0118 25.3711C13.6084 25.3711 12.2491 25.0957 10.9717 24.5566C9.73782 24.0357 8.61656 23.2805 7.66996 22.333C6.72167 21.3886 5.96552 20.2693 5.4434 19.0371C4.90141 17.7597 4.62895 16.4033 4.62895 15C4.62895 13.5967 4.90434 12.2402 5.4434 10.9629C5.96488 9.72948 6.71488 8.61912 7.66996 7.66698C8.62504 6.71483 9.73539 5.96483 10.9717 5.44334C12.2491 4.90428 13.6084 4.62889 15.0118 4.62889C16.4151 4.62889 17.7745 4.90135 19.0518 5.44334C20.2881 5.96483 21.3985 6.71483 22.3536 7.66698C22.585 7.89842 22.8018 8.13866 23.0098 8.38475C23.0977 8.49315 23.2325 8.55467 23.3702 8.55467H25.4297C25.6143 8.55467 25.7286 8.34959 25.626 8.19432C23.3789 4.70213 19.4473 2.39061 14.9795 2.40233C7.96 2.41991 2.33207 8.11815 2.40239 15.1289C2.4727 22.0283 8.09184 27.5976 15.0118 27.5976C19.4678 27.5976 23.3819 25.289 25.626 21.8056C25.7256 21.6504 25.6143 21.4453 25.4297 21.4453ZM28.0342 14.8154L23.877 11.5342C23.7217 11.4111 23.4961 11.5224 23.4961 11.7187V13.9453H14.2969C14.168 13.9453 14.0625 14.0508 14.0625 14.1797V15.8203C14.0625 15.9492 14.168 16.0547 14.2969 16.0547H23.4961V18.2812C23.4961 18.4775 23.7246 18.5889 23.877 18.4658L28.0342 15.1846C28.0622 15.1626 28.0849 15.1346 28.1005 15.1026C28.116 15.0707 28.1241 15.0356 28.1241 15C28.1241 14.9644 28.116 14.9293 28.1005 14.8973C28.0849 14.8653 28.0622 14.8373 28.0342 14.8154Z"
                  fill="black"
                />
              </svg>
              <Button className="tombolMenu" onClick={handleLogout}>Log Out</Button>
            </div>
          </div>
        </Card.Body>
      </Card>

  );
}

export default SuperAdminMenu;
