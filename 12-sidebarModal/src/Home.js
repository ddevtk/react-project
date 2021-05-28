import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
  const { openSideBarHandler, openModalHandler } = useContext(AppContext);
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBarHandler}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModalHandler}>
        show modal
      </button>
    </main>
  );
};

export default Home;
