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

import KelolaAdmin from "./page/KelolaAdmin";
import LaporanPenjualan from "./page/LaporanPenjualan";
import KelolaPemesanan from "./page/KelolaPemesaan";
import HistoryPemesanan from "./page/History";
import DetailPesanan from "./page/DetailPesanan";
import Profile from "./page/Profile";
import DashboardAdmin from "./page/DashboardAdmin";
import KelolaUser from "./page/KelolaUser";
import KelolaProdukSuperAdminMenu from "./page/KelolaProdukSuperAdmin";
import KelolaPemesananAdmin from "./page/KelolaPemesanaAdmin";
import LaporanPenjualanAdmin from "./page/LaporanPenjualanAdmin";
import KelolaProdukSuperAdmin from "./page/KelolaProdukSuperAdmin";

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
      
        <Route path="/KelolaAdmin" element={<KelolaAdmin />} />
        <Route path="/LaporanPenjualan" element={<LaporanPenjualan />} />
        <Route path="/KelolaPemesanan" element={<KelolaPemesanan />} />
        <Route path="/HistoryPemesanan/:id" element={<HistoryPemesanan />} />
        <Route path="/DetailPesanan/:id" element={<DetailPesanan />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/KelolaUser" element={<KelolaUser />} />
        <Route path="/KelolaProdukSuperAdmin" element={<KelolaProdukSuperAdmin />} />
        <Route path="/KelolaPemesananAdmin" element={<KelolaPemesananAdmin />} />
        <Route path="/LaporanPenjualanAdmin" element={<LaporanPenjualanAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
