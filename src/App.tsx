import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar';
import Admin from './pages/adminPage/Admin';
import ContactPage from './pages/contactPage/ContactPage';
import MainPage from './pages/homePage/MainPage';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;

