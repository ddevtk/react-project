import React, { useContext } from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import SocialIcon from './socialIcon';
import LinkSideBar from './LinkSideBar';
import { AppContext } from './context';

const Sidebar = () => {
  const { isSideBarOpen, closeSideBarHandler } = useContext(AppContext);
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSideBarHandler}>
          <FaTimes />
        </button>
      </div>
      <LinkSideBar />
      <SocialIcon />
    </aside>
  );
};

export default Sidebar;
