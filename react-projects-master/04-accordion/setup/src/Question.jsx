import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prevState) => !prevState);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        {!open && (
          <button className="btn" onClick={handleClick}>
            <AiOutlinePlus />
          </button>
        )}
      </header>

      {open && (
        <header>
          <p>{info}</p>
          <button className="btn" onClick={handleClick}>
            <AiOutlineMinus />
          </button>
        </header>
      )}
    </div>
  );
};

export default Question;
