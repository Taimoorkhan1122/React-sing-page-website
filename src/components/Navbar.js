import React from "react";

function Navbar() {
  return (
    <nav className="navigation" id="navigation">
      <ul>
        <li className="button">
          <a href="#home">Home</a>
        </li>
        <li className="button">
          <a href="#services">Services</a>
        </li>
        <li className="button">
          <a href="#blog">Blog</a>
        </li>
        <li className="button">
          <a href="#clients">Our Clients</a>
        </li>
        <li className="button">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
