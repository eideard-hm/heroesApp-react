import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../pages/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
