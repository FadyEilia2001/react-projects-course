import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, handleClick }) => {
  const [readMore, setReadMore] = useState(false);
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
      {readMore ? (
        <p>
          {info}...
          <button onClick={() => setReadMore(false)}>Show Less</button>
        </p>
      ) : (
        <p>
          {info.slice(0, 150)}...{" "}
          <button onClick={() => setReadMore(true)}>read more</button>
        </p>
      )}
      <button className="delete-btn" onClick={() => handleClick(id)}>
        Not Interseted
      </button>
      <footer></footer>
    </article>
  );
};

export default Tour;
