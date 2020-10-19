import React from "react";
import "./card.css";

function Cards({ paths }) {
  return (
    <section>
      <div className="card-img-container">
        {paths.map((imgUrl, index) => {
          return <img src={imgUrl} key={index} alt={`card ${index}`} />;
        })}
      </div>
    </section>
  );
}

export default Cards;
