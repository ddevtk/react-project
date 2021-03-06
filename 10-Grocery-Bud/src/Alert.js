import React, { useEffect } from 'react';

const Alert = ({ type, message, removeAlert, list }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      removeAlert('', '', false);
    }, 3000);
    return () => clearInterval(timer);
  }, [list]);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
