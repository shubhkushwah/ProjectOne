import React from 'react';
import "./HeroSectionStyle.css";
import { Link } from "react-router-dom";

import IntroImg from "../assets/intro-bgg.jpg"
const HeroSection = () => {
  return (
    <div className='hero'>

      <div className="mask">
        <img className='intro-img' src={ IntroImg } alt="Intro image" />
      </div>

      <div className="content">
        <p>Hi, i'm a</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/project" className="btn">Project</Link>

            <Link to="/contact" className='btn-light'>Contact</Link>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
