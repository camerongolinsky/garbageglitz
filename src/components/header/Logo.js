import React from 'react';
import { Link } from 'react-router-dom';
import sittingRaccoon from './sitting-raccoon.png';
import './Logo.css';


const Logo = () => {
    return(
        <div className='logo'> 
          <img src={sittingRaccoon} alt='Sitting Raccoon' />
          <Link to="/" className='logo'><h1>Garbage Glitz</h1></Link>
        </div>
    )

}

export default Logo;