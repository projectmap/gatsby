import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";

const Layout=(props)=>{
    return(
        <div className="outerContainer">
            <div className="layoutContainer">
            <Header/>
            {props.children}
            </div>
           
             <Footer/>
        </div>
       
    )
}
  
    export default Layout;
