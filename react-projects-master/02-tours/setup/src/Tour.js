import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, handleClick }) => {
  console.log(handleClick);
  return (
    <article className="single-tour">
      <img src={image} alt="place" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
      </footer>
      <p>{info}</p>
      <button className="delete-btn" onClick={() => handleClick(id)}>
        Not Interseted
      </button>
      <footer></footer>
    </article>
  );
};

export default Tour;
