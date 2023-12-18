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
import DashboardSuperAdmin from "./page/DashboardSuperAdmin";
import KelolaProduk from "./page/KelolaProdukAdmin";
import KelolaAdmin from "./page/KelolaAdmin";
import LaporanPenjualan from "./page/LaporanPenjualan";
import KelolaPemesanan from "./page/KelolaPemesaan";
import HistoryPemesanan from "./page/History";
import DetailPesanan from "./page/DetailPesanan";
import Profile from "./page/Profile";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/pemesanan/:id" element={<Pemesanan />} />
        <Route path="/DashboardSuperAdmin" element={<DashboardSuperAdmin />} />
        <Route path="/KelolaProduk" element={<KelolaProduk />} />
        <Route path="/KelolaAdmin" element={<KelolaAdmin />} />
        <Route path="/LaporanPenjualan" element={<LaporanPenjualan />} />
        <Route path="/KelolaPemesanan" element={<KelolaPemesanan />} />
        <Route path="/HistoryPemesanan/:id" element={<HistoryPemesanan />} />
        <Route path="/DetailPesanan/:id" element={<DetailPesanan />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
