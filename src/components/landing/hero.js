import React from 'react';

import heroImg from '../../images/hero-image.png';

const Hero = () =>
  <div className="hero">
    <div className="inner ">
      <h1 className="title">Mokkah shoes</h1>
      <span className="image fit">
        <img src={heroImg} alt="" />
      </span>
    </div>
  </div>

export default Hero;
