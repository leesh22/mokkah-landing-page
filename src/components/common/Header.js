import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';
import mokkahIcon from '../../images/mokkah-icon\.png';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      <img src={mokkahIcon} alt="" />
    </Link>
    <nav>
      <ul>
        <li>
          <a href="mailto:help@mokkahshoes.co.uk" target="_blank"><span className='fa fa-envelope'></span></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Mokkahshoes/" target="_blank"><span className='fa fa-facebook-square'></span></a>
        </li>
        <li>
          <a href="https://www.instagram.com/mokkahshoes/" target="_blank"><span className='fa fa-instagram'></span></a>
        </li>
        <li>
          <a href="https://twitter.com/Mokkahshoes" target="_blank"><span className='fa fa-twitter-square'></span></a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
