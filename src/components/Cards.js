import React from "react";
import "./card.css";

function Cards({ paths }) {
  return (
    <section>
      <div className="card-img-container">
        {paths.map((imgUrl, index) => {
          return (
            <div className="card-img" key={index}>
              <img src={imgUrl} key={index + 1} alt={`card ${index}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Cards;
