// import React from 'react'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Container, Navbar, NavbarBrand } from 'reactstrap'
// import NucampLogo from './app/assets/img/logo.png'
// import CampsitesList from './features/campsites/CampsitesList';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css'
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
