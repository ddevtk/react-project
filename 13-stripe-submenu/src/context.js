import React, { useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const showSubmenu = () => {
    setIsShowSubmenu(true);
  };
  const hiddenSubmenu = () => {
    setIsShowSubmenu(false);
  };
  const showSideBar = () => {
    setIsShowSideBar(true);
  };
  const hiddenSideBar = () => {
    setIsShowSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isShowSubmenu,
        isShowSideBar,
        showSubmenu,
        showSideBar,
        hiddenSubmenu,
        hiddenSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
