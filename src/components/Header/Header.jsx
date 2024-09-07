import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar font-poppins font-semibold tracking-wider">
      <div className="logo font-poppins"><img src="src\assets\Logo.png" alt="" /></div>

      {/* Hamburger menu and nav links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}` }>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/dirportal" activeClassName="active">
          Alumni Connect
        </NavLink>
        <NavLink to="jobportal" activeClassName="active">
          Career Portal
        </NavLink>
        <NavLink to="/social" activeClassName="active">
          Learning Hub
        </NavLink>
        <NavLink to="/donate" activeClassName="active">
          Donate
        </NavLink>
        <NavLink to="dashboard" activeClassName="active">
          Dashboard
        </NavLink>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleDropdown}>
            More
          </span>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="events">Events</Link>
              <Link to="clubs">Clubs</Link>
              <Link to="testimonial">Testimonials</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          )}
        </div>

        {/* Signup and Login buttons for mobile view */}
        <div className="auth-buttons mobile-auth-buttons">
          <button className="signup-btn"><Link to="register">Register</Link></button>
          <button className="login-btn"> <Link to="signin">Login</Link></button>
        </div>
      </div>

      {/* Signup and Login buttons for desktop view */}
      <div className="auth-buttons desktop-auth-buttons">
        <button className="signup-btn"><Link to="register">Register</Link></button>
        <button className="login-btn">
          <Link to="signin">Login</Link></button>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Header;
