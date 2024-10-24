import "./cadr.css"
import React from "react";
import Picture from "../Title/picture.jsx";

const Cadr = () => {
    
    return(
        <div className="cadr">
            
            <p1>آموزشگاه</p1><p>عنوان</p>

            <span>مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب 
            با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی</span>

            <input className="search" type="text" placeholder="                                              ...دنبال چی میگردی؟"></input>
                
            <div className="circle">
                <img src="./Search.png" alt="search" />
            </div> 
            
            <Picture/>
        </div>

       
    )
}

export default Cadr;