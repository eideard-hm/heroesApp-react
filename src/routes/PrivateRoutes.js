import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PrivateRoutes = ({ children }) => {

    const { userAuth } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    (search !== '') ?
        localStorage.setItem('lastPath', `${pathname}/${search}`)
        :
        localStorage.setItem('lastPath', `${pathname}`);

    return userAuth.auth
        ? children
        : <Navigate to="login" />

};

export default PrivateRoutes;
