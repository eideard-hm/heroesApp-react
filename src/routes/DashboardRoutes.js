import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DcScreen from '../pages/dc/DcScreen';
import HeroScreen from '../pages/hero/HeroScreen';
import MarvelScreen from '../pages/marvel/MarvelScreen';
import SearchScreen from '../pages/search/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

           <div className='container'>
                <Routes>
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="hero/:id" element={<HeroScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
           </div>

        </>
    );
};

export default DashboardRoutes;
