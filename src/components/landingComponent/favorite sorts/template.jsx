import React from "react";
import "./template.css"
const template = () =>{
    return(
        <div className="template">
            <ul>
                <li className="favorite">محبوب ترین دسته بندی ها
                    <h1>گستره وسیعی از محبوب ترین دوره ها</h1>
                </li>
            </ul>

                <img src="Rectangle 14.png"></img>

                <div className="box">
                    <span>امنیت شبکه</span>
                    <img src="Security Shield.png"></img>
                </div>

                <div className="box">
                    <span>بازی سازی</span>
                    <img src="Game Controller.png"></img>
                </div>

                <div className="box">
                    <span>تحلیل داده</span>
                    <img src="Pie Chart.png"></img>
                </div>

                <div className="box">
                    <span>طراحی صفحات وب</span>
                    <img src="Windows 10.png"></img>
                </div>

        </div>
        
    )
}

export default template;