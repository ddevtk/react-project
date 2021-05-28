import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
  const { showSideBar, showSubmenu, hiddenSubmenu } = useContext(AppContext);
  const displaySubmenu = e => {
    const tempBtn = e.target.getBoundingClientRect();
    const centerLocation = (tempBtn.right + tempBtn.left) / 2;
    const bottomCustom = tempBtn.bottom - 5;
    showSubmenu(e.target.textContent, { centerLocation, bottomCustom });
  };

  const hiddenSubmenuHandler = e => {
    if (!e.target.classList.contains('link-btn')) {
      hiddenSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={hiddenSubmenuHandler}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button className='btn toggle-btn' onClick={showSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
