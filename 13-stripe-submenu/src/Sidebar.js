import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';
import sublinks from './data';
import SideBarItem from './SideBarItem';

const Sidebar = () => {
  const { isShowSideBar, hiddenSideBar } = useContext(AppContext);
  return (
    <aside
      className={`${
        isShowSideBar ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={hiddenSideBar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((el, idx) => {
            return <SideBarItem {...el} key={idx} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
