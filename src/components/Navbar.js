import React from 'react';
import { Link } from 'react-router-dom';
 


const Nav = () => {

    const NavStyle ={
        color: 'white'
    }

    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/">Luxury Trash</Link>
                    
                    <ul className="nav-links">
                    <Link to="/" className={NavStyle}>
                            <li>Home</li>
                        </Link>
                        <Link to="/about" className={NavStyle}>
                            <li>About</li>
                        </Link>
                        <Link to="/shop" className={NavStyle}>
                            <li>Trash Shop</li>
                        </Link>

                    </ul>
                </div>
            </nav>  
    )
}

export default Nav;