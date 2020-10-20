import React from "react";
import UserIn from "./components/UserIn.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
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
        <Home content={cardContent} />
      </main>

      <footer className="App-footer">This is footer</footer>
    </div>
  );
}

export default App;
