import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const handleClick = (id) => {
    setPeople([]);
  };
  return (
    <main>
      <div className="container">
        <h3>{people && `${people.length} birthdays today`}</h3>
        {people &&
          people.map((person) => {
            return <List key={person.id} {...person} />;
          })}

        <button onClick={handleClick}>Clear all</button>
      </div>
    </main>
  );
}

export default App;
