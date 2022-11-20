import React from 'react'
import { Link } from 'react-router-dom'

export default function Feature() {
    
    function openNav(){
        document.getElementById("myNav").classList.toggle("menu_width");
        document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
    }

    return (
        <React.Fragment>
            <div className="hero_area2">
               
               <header className="header_section">
                   <div className="container-fluid">
                       <nav className="navbar navbar-expand-lg custom_nav-container">
                           <a className="navbar-brand" href="index.html">
                               <span>
                                  
                               </span>
                           </a>

                           <div className="navbar-collapse" id="">
                               <div className="custom_menu-btn">
                                   <button  onClick={openNav}>
                                       <span className="s-1"> </span>
                                       <span className="s-2"> </span>
                                       <span className="s-3"> </span>
                                   </button>
                               </div>
                               <div id="myNav" className="overlay">
                                   <div className="overlay-content">
                                       <Link to="/">HOME</Link>
                                       <Link to="/Feature">FEATURE</Link>
                                       <Link to="/About">ABOUT</Link>
                                       <Link to="/Contact">CONTACT</Link>
                                   </div>
                               </div>
                           </div>
                       </nav>
                   </div>
               </header>
              
           </div>
        </React.Fragment>
    )
}