import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
const Home = () => {

    return (
        <>
            <Navbar />
            {/* Childern */}
            <Outlet />
            <Footer />
        </>
    );
}
export default Home;
