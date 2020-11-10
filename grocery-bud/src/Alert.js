import { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeot = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeot);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
