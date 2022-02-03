import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../pages/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                }
                />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>
                }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
