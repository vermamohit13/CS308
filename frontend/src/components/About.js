import React from 'react'
import react from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    
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


           
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="heading_container d-flex justify-content-lg-start">
                        <h2>
                            Our Team
                        </h2>
                    </div>
                    
                    <div className="rows">
                        <div className="col">
                            <img className = "member_images" src="images/mohit.jpg" alt="Snow" />
                            <h6><a href="https://www.linkedin.com/in/mohit3301/">Mohit Verma</a></h6> 
                        </div>
                        <div className="col">
                            <img className = "member_images" src="images/ramay.jpg" alt="Snow" />
                            <h6> <a href="https://www.linkedin.com/in/ramay-maheshwari-2a6524217/">Ramay Maheshwari </a></h6>
                        </div>
                        <div className="col">
                            <img className = "member_images" src="images/dipesh.jpeg" alt="Snow" />
                            <h6> <a href="https://www.linkedin.com/in/dipesh-sharma-b38b12218/">Dipesh Sharma</a></h6>
                        </div>
                        <div className="col">
                            <img className = "member_images" src="images/vish.jpg" alt="Snow" />
                            <h6><a href="https://www.linkedin.com/in/vishwasgarg44/">Vishwas Garg</a> </h6>
                        </div>
                        <div className="col">
                            <img className = "member_images" src="images/kanishk2.jpg" alt="Snow" />
                            <h6> <a href = "https://www.linkedin.com/in/kanishk-singla-0a9667218/">Kanishk Singla</a> </h6>
                        </div>  
                    </div>
                    
                </div>
            </section>

        </React.Fragment>
    )
}