// src/layouts/LayOut.jsx
import { Outlet } from "react-router-dom";
import Header from "../landingComponent/header/Header/"; // اطمینان از مسیر صحیح
import Footer from "../landingComponent/Footer/Footer"; // اطمینان از مسیر صحیح
import NewsArticles from "../landingComponent/NewsArticles/NewsArticles";
import Podcast from '../landingComponent/Podcast/Podcast/';
const LayOut = () => {
    return (
        <>
            <Header />
            < NewsArticles />
            <Podcast />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayOut;
