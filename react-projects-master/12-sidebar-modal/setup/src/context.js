import React, { useState, useContext } from "react";

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [isSidebar, setisSidebar] = useState(false);

  console.log(isModal, isSidebar);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const toggleSideBar = () => {
    setisSidebar(!isSidebar);
  };

  return (
    <AppContext.Provider
      value={{ isModal, isSidebar, toggleModal, toggleSideBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
