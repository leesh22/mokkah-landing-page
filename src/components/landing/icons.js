import React from 'react';

import fitIcon from '../../images/fit-icon.png';
import qualityIcon from '../../images/quality-icon.png';
import styleIcon from '../../images/style-icon.png';

const Icons = () =>
  <div className='icon-wrapper'>
    <div className='icon-item'>
      <img src={styleIcon} alt="" />
      <h3>Style</h3>
    </div>
    <div className='icon-item'>
      <img src={fitIcon} alt="" />
      <h3>Fit</h3>
    </div>
    <div  className='icon-item'>
      <img src={qualityIcon} alt="" />
      <h3>Quality</h3>
    </div>
  </div>

export default Icons;
