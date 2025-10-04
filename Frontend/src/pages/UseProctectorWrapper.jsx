import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseProctectorWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); // run when token/navigate changes

  return <>{children}</>;
};

export default UseProctectorWrapper;
