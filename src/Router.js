import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import RestaurantList from './pages/RestaurantList/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurants/list" element={<RestaurantList />} />
        <Route path="/restaurants/detail/:id" element={<RestaurantDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
