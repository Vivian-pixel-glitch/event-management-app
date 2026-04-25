// In components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Assuming you have a Footer

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container"> {/* Optional container for page content */}
        <Outlet /> {/* Child routes will be rendered here */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;