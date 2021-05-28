import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
  const data = useContext(AppContext);
  console.log(data);
  return <h2>navbar component</h2>;
};

export default Navbar;
