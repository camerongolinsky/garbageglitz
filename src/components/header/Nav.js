import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster } from "@fortawesome/free-solid-svg-icons";
import {DataContext} from '../DataProvider';

const Nav = (props) => {
  const [ menu, setMenu ] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const styleMenu = {
    left: menu ? 0 : '-100%'
  }

  return (
    <div>
      <ul style={styleMenu}>
        <li>
          <Link to="/" className="navstyle">
            Home
          </Link>
        </li>
        
        <li>
          <Link to="/products" className="navstyle">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="navstyle">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navstyle">
            Contact
          </Link>
        </li>
        <li className='cart-icon'>
          <span>{cart.length}</span>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faDumpster}
              className='fa-3x'
            />
          </Link>
        </li>
        <li onClick={toggleMenu}>X</li>

        <div className="menu" onClick={toggleMenu}>
        Menu
      </div>
      </ul>      
    </div>
  );
};

export default Nav;
