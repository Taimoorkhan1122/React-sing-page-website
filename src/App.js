import React from "react";
import UserIn from "./components/UserIn.js";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import "./App.css";

function App() {
  const cardContent = [
    "./images/cardcontent/cardcontent-1.png",
    "./images/cardcontent/cardcontent-2.png",
    "./images/cardcontent/cardcontent-3.png",
    "./images/cardcontent/cardcontent-4.png",
    "./images/cardcontent/cardcontent-5.png",
    "./images/cardcontent/cardcontent-6.png",
  ];
  return (
    <div className="App">
      {/* Start of Header */}
      <header className="App-header">
        <div className="header-container">
          <a href="#home">
            <img src={"./images/sdl_logo_en.svg"} alt="logo-icon" />
          </a>
          <Navbar />
          <UserIn />
        </div>
      </header>

      <main className="App-main">
        <Cards paths={cardContent} />
      </main>

      <footer className="App-footer">This is footer</footer>
    </div>
  );
}

export default App;
