import React from "react";
import Tour from "./Tour";
const Tours = ({ data, handleClick }) => {
  return (
    <div>
      <h2 className="title">Our Tours</h2>
      {data.map((tour) => (
        <Tour key={tour.id} {...tour} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Tours;
