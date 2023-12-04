import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Beranda from "./page/Beranda";
// import Kontak from "./page/Kontak";
// import Tentang from "./page/Tentang";
import Login from "./page/Login";
import Register from "./page/Register";
import ForgotPassword from "./page/ForgotPassword";
import NewPassword from "./page/NewPassword";
import NotFound from "./page/NotFound";
import Pemesanan from "./page/Pemesanan";
import KelolaProduk from "./page/KelolaProdukAdmin";
import KelolaAdmin from "./page/KelolaAdmin";


// import Checkout from "./page/Checkout";
// import Dashboard from "./page/Dashboard";
// import UserLogin from "./components/UserLogin";
// import UserRegis from "./components/UserRegis";
// import Produk from "./components/Produk";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/Pemesanan" element={<Pemesanan />} />
        <Route path="/KelolaProduk" element={<KelolaProduk />} />
        <Route path="/KelolaAdmin" element={<KelolaAdmin />} />

        {/* <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregis" element={<UserRegis />} />
        <Route path="/produk" element={<Produk />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
