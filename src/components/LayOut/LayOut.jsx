import { Outlet } from "react-router-dom";
import Header from "../landingComponent/header/Header";
import Footer from "../landingComponent/footer/Footer";

const LayOut = () => {
    return ( <>
        <Header/>
        <Outlet/>
        <Footer/>
    </> );
}
 
export default LayOut;