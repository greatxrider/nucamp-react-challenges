// import React from 'react'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css'
// import { Container, Navbar, NavbarBrand } from 'reactstrap'
// import NucampLogo from './app/assets/img/logo.png'
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  )
}

export default App
