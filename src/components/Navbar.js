import React from "react";

function Navbar({ stat, handler }) {
  console.log(stat, handler);
  return (
    <nav className="navigation" id="navigation">
      <ul>
        <li className="button">
          <a
            href="#home"
            onClick={() => {
              handler({
                ...!stat,
                Home: true,
              });
            }}
          >
            Home
          </a>
        </li>
        <li className="button">
          <a
            href="#services"
            onClick={() => {
              handler({
                ...!stat,
                Services: true,
              });
            }}
          >
            Services
          </a>
        </li>
        <li className="button">
          <a
            href="#blog"
            onClick={() => {
              handler({
                ...!stat,
                Blogs: true,
              });
            }}
          >
            Blog
          </a>
        </li>
        <li className="button">
          <a
            href="#clients"
            onClick={() => {
              handler({
                ...!stat,
                Clients: true,
              });
            }}
          >
            Our Clients
          </a>
        </li>
        <li className="button">
          <a
            href="#contact"
            onClick={() => {
              handler({
                ...!stat,
                Services: true,
              });
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
