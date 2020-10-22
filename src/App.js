import React from "react";
import { useState } from "react";

import UserIn from "./components/UserIn.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Blogs from "./components/pages/Blogs.js";
import OurClients from "./components/pages/OurClients.js";
import Contact from "./components/pages/Contact.js";
import Footer from "./components/Footer.js";

import cardContent from "./content";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  const changePagehandler = (page) => setPage(page);
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <a href="#home">
            <img src={"./images/sdl_logo_en.svg"} alt="logo-icon" />
          </a>
          <Navbar currentPage={page} Pagehandler={changePagehandler} />
          <UserIn />
        </div>
      </header>

      <main className="App-main">
        {/* {isRender.map((comp) => {
          const objKey = Object.keys(comp)[0];
          const objVal = Object.values(comp)[0];
          return objVal ? <${objKey} /> : null;
        })} */}
        {page === "Home" && <Home content={cardContent} />}
        {page === "Services" && <Services />}
        {page === "Blogs" && <Blogs />}
        {page === "Our Clients" && <OurClients />}
        {page === "Contact Us" && <Contact />}
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
