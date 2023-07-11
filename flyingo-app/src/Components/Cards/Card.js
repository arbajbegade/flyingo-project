import React from "react";
import "../Css/Card.css";

function Card({ title, img, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      <div className="btn">
        <button>
          <a href="">more</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
