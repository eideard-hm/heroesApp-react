import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DcScreen from '../pages/dc/DcScreen';
import LoginScreen from '../pages/login/LoginScreen';
import MarvelScreen from '../pages/marvel/MarvelScreen';
import SearchScreen from '../pages/search/SearchScreen';

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default AppRoutes;
