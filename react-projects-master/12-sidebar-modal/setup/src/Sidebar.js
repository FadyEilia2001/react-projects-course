import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebar, toggleSideBar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding dude" />
        <button className="close-btn" onClick={toggleSideBar}>
          <FaTimes />
        </button>
      </div>

      <uL className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </uL>

      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
