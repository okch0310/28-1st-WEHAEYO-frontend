import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const Router = () => {
  return(
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/login" element={<Login/>} />
            <Route path ="/signup" element={<Signup/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
  )
}   


export default Router;