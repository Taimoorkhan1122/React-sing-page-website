import React from "react";
import "./services.css";

function Services() {
  const image = "./images/services-background.png";
  const imgStyle = {
    margin: "22px 0",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 50%",
    backgroundSize: "100% auto",
    width: "100%",
  };

  return (
    <div className="services-container">
      <div className="hero-container">
        <div className="logo">
          <img src="./images/era-element.svg" alt="arc logo" />
        </div>

        <div className="main-image" style={imgStyle}>
          <img
            className="front-image"
            src="./images/services-image.png"
            alt="car"
          />
        </div>
        <div className="mb-main-image" style={imgStyle}>
          <img className="mb-image" src="./images/mb-img.png" alt="car" />
        </div>

        <div className="paragraph">
          <p>Smart control & protection system for your car</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
