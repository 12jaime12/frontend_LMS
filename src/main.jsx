import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import CheckCode from './pages/CheckCode/CheckCode.jsx'
import { AuthContextProvider } from './contexts/authContext.jsx'
import Login from './pages/Login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/checkCode" element={<CheckCode/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element/>
            <Route path="/changePassword" element/>
            <Route path="/forgotPassword" element/>
            <Route path="/dashboard" element/>


          </Route>
        </Routes>
      </AuthContextProvider>
      
    </BrowserRouter>

  </React.StrictMode>,
)
