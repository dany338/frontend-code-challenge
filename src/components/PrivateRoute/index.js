import React, { useState, useEffect, useCallback } from 'react'
import { Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { waitFor } from '../../utils/waitFor';

const PrivateRoute = ({ children }) => {
  const [ user ] = useAuth();
  const [endLoad, setEndLoad] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const memoizedCallback = useCallback(
    async () => {
      await waitFor(100);
      setEndLoad(true);
    },
    [],
  );

  useEffect(() => {
    console.log('PrivateRoute');
    memoizedCallback();
    return () => {
      console.log('PrivateRoute unmount');
    }
  }, [memoizedCallback]);

  return endLoad ? (
    user ? children : <Navigate to="/" state={{ from: location }} replace />)
  : null; // navigate(from, { replace: true })
}

export default PrivateRoute;
