import React from "react";
import { useState } from "react";

import UserIn from "./components/UserIn.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Services from "./components/Services.js";
import Blogs from "./components/Blogs.js";
import OurClients from "./components/OurClients.js";
import Contact from "./components/Contact.js";
import cardContent from "./content";
import "./App.css";

function App() {
  // const [isHomeRender, setHome] = useState(true);
  // const [isServicesRender, setServices] = useState(false);
  // const [isBlogsRender, setBlogs] = useState(false);
  // const [isClientsRender, setClients] = useState(false);
  // const [isContactRender, setContact] = useState(false);

  const [thisStat, setThisStat] = useState({
    Home: true,
    Services: true,
    Blogs: true,
    Clients: true,
    Contact: true,
  });

  // const setHomeHandler = () => {
  //   setHome(!isHomeRender);
  //   setServices(false);
  //   setBlogs(false);
  //   setClients(false);
  //   setContact(false);
  // };
  // const setServiceHandler = () => setServices(!isServicesRender);
  // const setBlogHandler = () => setBlogs(!isBlogsRender);
  // const setClientsHandler = () => setClients(!isClientsRender);
  // const setContactHandler = () => setContact(!isContactRender);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <a href="#home">
            <img src={"./images/sdl_logo_en.svg"} alt="logo-icon" />
          </a>
          <Navbar stat={thisStat} handler={setThisStat} />
          <UserIn />
        </div>
      </header>

      {/* Our components will update here */}
      <main className="App-main">
        {/* {isRender.map((comp) => {
          const objKey = Object.keys(comp)[0];
          const objVal = Object.values(comp)[0];
          return objVal ? <${objKey} /> : null;
        })} */}
        {thisStat.Home ? <Home content={cardContent} /> : null}
        {thisStat.Services ? <Services /> : null}
        {thisStat.Blogs ? <Blogs /> : null}
        {thisStat.Clients ? <OurClients /> : null}
        {thisStat.Contact ? <Contact /> : null}
      </main>

      <footer className="App-footer">This is footer</footer>
    </div>
  );
}

export default App;
