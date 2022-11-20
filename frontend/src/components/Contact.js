import React from 'react'
import { useRef } from "react";
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

export default function Contact() {
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
                            <div class="contact_form-container">
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
        </React.Fragment>
    )
}