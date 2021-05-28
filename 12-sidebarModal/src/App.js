import React, { Fragment } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
function App() {
  return (
    <Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </Fragment>
  );
}

export default App;
