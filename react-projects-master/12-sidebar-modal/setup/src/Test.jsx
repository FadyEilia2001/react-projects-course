import React, { useState, useRef } from "react";

export default function Test() {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);

  let data = [
    {
      id: 1,
      name: "test 1",
    },
    {
      id: 2,
      name: "test 2",
    },
  ];

  const handleClick = () => {
    setEdit(!edit);
    inputRef.current.focus();
  };

  return (
    <>
      {!edit ? (
        <h1 onClick={() => setEdit(!edit)}>hello</h1>
      ) : (
        <input ref={inputRef} type="text" placeholder="start typing..." />
      )}
    </>
  );
}
