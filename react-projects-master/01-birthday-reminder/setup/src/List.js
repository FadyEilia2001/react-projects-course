import React from "react";

const List = ({ name, age, image }) => {
  console.log(image);
  return (
    <div className="person">
      <img src={image} alt="person info" />
      <section>
        <h4>{name}</h4>
        <p>{age} years</p>
      </section>
    </div>
  );
};

export default List;
