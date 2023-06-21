import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CheckCode from "./pages/CheckCode/CheckCode.jsx";
import { AuthContextProvider } from "./contexts/authContext.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import {
  Protected,
  ProtectedCheck,
  ProtectedCheckChildren,
  ProtectedGeneral,
} from "./components/Protected/Protected.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Taller from "./pages/Taller/Taller.jsx";
import CompraVenta from "./pages/CompraVenta/CompraVenta.jsx";
import Catalogo from "./pages/Catalogo/Catalogo.jsx";
import ChangePassword from "./pages/ChangePassword/ChangePassword.jsx";


import ComprayventaHome from "./pages/ComprayventaHome/ComprayventaHome.jsx";
import CocheById from "./pages/CocheById/CocheById.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/checkCode"
              element={
                <ProtectedCheckChildren>
                  <CheckCode />
                </ProtectedCheckChildren>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/taller" element={<Taller />} />
            <Route path="/compraryvender" element={<CompraVenta />}>
              <Route index element={<ComprayventaHome />} />
              <Route path="/compraryvender/coche/:id" element={<CocheById/>}/>
            </Route>

            <Route path="/catalogo" element={<Catalogo />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
