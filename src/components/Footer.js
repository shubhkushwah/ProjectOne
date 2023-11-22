import React from 'react';
import "./FooterStyle.css";

import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p>Indore, Madhya Pradesh</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            789-xxx-xxxx
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            info@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Let's Connect</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eius consectetur sint consequuntur at ducimus! Maiores voluptas veniam vero omnis!</p>
                    <div className="social">
                        <FaGithub size={30} style={{ color: 'white', marginRight: '1rem' }} />

                        <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />

                        <FaInstagram size={30} style={{ color: 'white', marginRight: '1rem' }} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
