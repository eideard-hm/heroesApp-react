import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PublicRoutes = ({ children }) => {

    const { userAuth } = useContext(AuthContext);

    return (!userAuth.auth)
        ? children
        : <Navigate to="/" />
};

export default PublicRoutes;
