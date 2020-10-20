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
  const [isRender, setRender] = useState([
    { Home: true },
    { Services: false },
    { Blog: false },
    { OurClients: false },
    { Contact: false },
  ]);

  const isRendered = (componentId) => {
    setRender({
      ...isRender,
      componentId: !isRender.componentId,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <a href="#home">
            <img src={"./images/sdl_logo_en.svg"} alt="logo-icon" />
          </a>
          <Navbar />
          <UserIn />
        </div>
      </header>

      {/* Our components will update here */}
      <main className="App-main">
        {isRender.map((comp) => {
          return Object.values(comp)[0]
            ? console.log("render")
            : console.log("don't");
        })}
        <Home content={cardContent} handleRender={isRender} />
        <Services />
        <Blogs />
        <OurClients />
        <Contact />
      </main>

      <footer className="App-footer">This is footer</footer>
    </div>
  );
}

export default App;
