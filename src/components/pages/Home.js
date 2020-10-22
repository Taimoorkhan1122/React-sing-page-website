import React from "react";
import Cards from "../Cards";
import "./home.css";

function Home({ content }) {
  return (
    <div className="container">
      <div className="hero-container">
        <span>At Smart Driving Labs</span> we develop a platform that combines
        technologies, data and vehicles into a single ecosystem. Our products
        are beneficial for car owners, carmakers, insurance companies, car
        dealers and fleets.
      </div>
      <Cards paths={content} />
    </div>
  );
}

export default Home;
