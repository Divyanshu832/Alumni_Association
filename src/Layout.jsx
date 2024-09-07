import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import EngageCard from './components/Landing/EngageCard';

function Layout() {
  return (
    <>
      <Header/>
      
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
