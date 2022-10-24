import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { toggleModal, toggleSideBar } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={toggleSideBar}>
        <FaBars />
      </button>

      <button className="btn" onClick={toggleModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
