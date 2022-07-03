import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-items">Home</li>
        <li className="nav-items">About</li>
        <li className="nav-items">Contact</li>
        <li className="nav-items">Us</li>
      </ul>
    </nav>
  );
}

export default Navbar