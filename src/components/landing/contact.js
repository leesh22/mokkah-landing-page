import React from 'react';

import ContactForm from '../contact/ContactForm';

const Hero = () =>
  <div className="contact">
    <div className="inner">
      <h2>Get in touch</h2>
      <p><a href="mailto:help@mokkahshoes.co.uk" target="_blank">help@mokkahshoes.co.uk </a></p>
      <ContactForm/>
    </div>
  </div>

export default Hero;
