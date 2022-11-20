import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Home(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zcj2aky', 'template_e9alucg', form.current, 'XML7kgA0iHe1C8meN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
        );
        e.target.reset()
      };

    function openNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
          .querySelector(".custom_menu-btn")
          .classList.toggle("menu_btn-style");
    }

    return (
        <React.Fragment>
            <div className="hero_area">
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <a className="navbar-brand" href="index.html">

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
               

                <section className="slider_section position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <h2>

                                    </h2>
                                    <h1>
                                        Chat <br />
                                        application
                                    </h1>
                                    <div className="regstyle">
                                        <Link to="/Login">sign in</Link>
                                        <Link to="/Register">sign up</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="img-box">
                                                <img src="images/chat.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
           
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


            <section className="about_section layout_padding">
                <div className="container">
                    <div className="heading_container ">
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

            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="d-flex ">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="contact_form-container">
                            <div>
                                <div>
                                <input type="text" placeholder="Name" name = 'name' required />
                                </div>
                                <div>
                                <input type="email" placeholder="Email" name = 'email' required />
                                </div>
                                <div>
                                <input type="subject" placeholder="Subject" name = 'subject' required />
                                </div>
                                <div>
                                <input type="text" placeholder="Message" name = 'message' required />
                                </div>
                                
                                <button type="submit">
                                    send
                                </button>
                                
                            </div>
                            </div>
                        </form>

                        </div>
                        <div className="col-md-6">
                            <div className="contact_img-box">
                                <img src="images/chat.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           


            <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
            <script type="text/javascript" src="js/bootstrap.js"></script>

          
        </React.Fragment>
    )
}