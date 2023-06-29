import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CheckCode from './pages/CheckCode/CheckCode.jsx';
import { AuthContextProvider } from './contexts/authContext.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import {
  Protected,
  ProtectedCheck,
  ProtectedCheckChildren,
  ProtectedGeneral,
} from './components/Protected/Protected.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Taller from './pages/Taller/Taller.jsx';
import CompraVenta from './pages/CompraVenta/CompraVenta.jsx';
import Catalogo from './pages/Catalogo/Catalogo.jsx';
import ChangePassword from './pages/ChangePassword/ChangePassword.jsx';

import ComprayventaHome from './pages/ComprayventaHome/ComprayventaHome.jsx';
import CocheById from './pages/CocheById/CocheById.jsx';
import CatalogoHome from './pages/CatalogoHome/CatalogoHome.jsx';
import Profile from './pages/Profile/Profile.jsx';
import CatalogoMarca from './components/CatalogoMarca/CatalogoMarca.jsx';
import CochePersonalizar from './components/CochePersonalizar/CochePersonalizar.jsx';
import CreateCoche from './pages/CreateCoche/CreateCoche.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx';
import InfoCoches from './components/InfoCoches/InfoCoches.jsx';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es.json';
import CochesPerfil from './components/CochesPerfil/CochesPerfil.jsx';
import Conocenos from './pages/Conocenos/Conocenos.jsx';

TimeAgo.addDefaultLocale(es);
TimeAgo.addLocale(es);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/checkCode"
              element={
                <ProtectedCheckChildren>
                  <CheckCode />
                </ProtectedCheckChildren>
              }
            />
            <Route path="/createCoche" element={<CreateCoche />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route path="/profile/:variable/:id" element={<CochesPerfil />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/taller"
              element={
                <Protected>
                  <Taller />
                </Protected>
              }
            />
            <Route path="/compraryvender" element={<CompraVenta />}>
              <Route index element={<ComprayventaHome />} />
              <Route
                path="/compraryvender/coche/:id"
                element={
                  <Protected>
                    <CocheById />
                  </Protected>
                }
              />
            </Route>
            <Route path="/catalogo" element={<Catalogo />}>
              <Route index element={<CatalogoHome />} />
              <Route path="/catalogo/:marca" element={<CatalogoMarca />} />
              <Route
                path="/catalogo/:marca/info/:id"
                element={
                  <Protected>
                    <InfoCoches />
                  </Protected>
                }
              />
              <Route
                path="/catalogo/:marca/personalizar/:id"
                element={
                  <Protected>
                    <CochePersonalizar />
                  </Protected>
                }
              />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
