import React from "react";
import UserIn from "./components/UserIn.js";
import Navbar from "./components/Navbar.js";
import "./App.css";
import logo from "./images/sdl_logo_en.svg";

function App() {
  return (
    <div className="App">
      {/* Start of Header */}
      <header className="App-header">
        <div className="header-container">
          <a href="#home">
            <img src={logo} alt="logo-icon" />
          </a>
          <Navbar />
          <UserIn />
        </div>
      </header>

      <main className="App-main">this is main</main>
      <code>hello</code>
      <footer className="App-footer">This is footer</footer>
    </div>
  );
}

export default App;
