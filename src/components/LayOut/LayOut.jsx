// src/layouts/LayOut.jsx
import { Outlet } from "react-router-dom";
import Header from "../landingComponent/header/Header/"; // اطمینان از مسیر صحیح
import Footer from "../landingComponent/footer/Footer"; // اطمینان از مسیر صحیح
import NewsArticles from "../landingComponent/NewsArticles/NewsArticles"
const LayOut = () => {
    return (
        <>
            <Header />
            < NewsArticles />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayOut;
