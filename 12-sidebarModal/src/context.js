import React, { useState } from 'react';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSideBarHandler = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBarHandler = () => {
    setIsSideBarOpen(false);
  };
  const openModalHandler = () => {
    console.log('test');
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isModalOpen,
        openSideBarHandler,
        closeSideBarHandler,
        openModalHandler,
        closeModalHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
