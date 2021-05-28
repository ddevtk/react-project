import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';
const Modal = () => {
  const { closeModalHandler, isModalOpen } = useContext(AppContext);
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
      onClick={closeModalHandler}
    >
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={closeModalHandler}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
