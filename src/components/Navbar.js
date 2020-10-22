import React from "react";

function Navbar({ currentPage, Pagehandler }) {
  const pageList = ["Home", "Services", "Blogs", "Our Clients", "Contact Us"];
  return (
    <nav className="navigation" id="navigation">
      <ul>
        {pageList.map((page, index) => {
          return (
            <li className="button" key={index}>
              <a href={`#${page}`} onClick={() => Pagehandler(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
