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

               <section className="feature_section layout_padding2 layout_margin">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Amazing Features To Use <br />
                            Our Application
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box">
                                <div className="head-box">
                                    <div className="img-box">
                                       

                                    </div>
                                    <h6>
                                        Use Anytime, Anywhere
                                    </h6>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Anywhere in the world just open any browser and access this chat application.
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="head-box">
                                    <div className="img-box">
                                        
                                    </div>
                                    <h6>
                                        Modern Design
                                    </h6>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        One of the main feature is that a user can select an avatar as a profile.
                                        Uses socket.io for implementing chatting feature.
                                        Uses MongoDB for database needs. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="head-box">
                                    <h6>
                                        Registration process
                                    </h6>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Simple signin, signup. 
                                        To get access to the chat's functionality, 
                                        the simplest way to do so is that a user must 
                                        register in the app and create a profile. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              
           </div>
        </React.Fragment>
    )
}