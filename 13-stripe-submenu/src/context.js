import React, { useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [location, setLocation] = useState({});
  const [subLink, setSubLink] = useState({ page: '', links: [] });
  const hiddenSubmenu = () => {
    setIsShowSubmenu(false);
  };
  const showSubmenu = (text, coordinate) => {
    setLocation(coordinate);
    setIsShowSubmenu(true);
    const subLink = sublinks.find(link => link.page === text);
    setSubLink(subLink);
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
        location,
        subLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
