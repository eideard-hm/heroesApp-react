import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PrivateRoutes = ({ children }) => {

    const { userAuth } = useContext(AuthContext);

        return userAuth.auth
            ? children
            : <Navigate to="login" />

};

export default PrivateRoutes;
