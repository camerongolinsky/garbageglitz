import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "./header/Logo";
import Nav from "./header/Nav";

const Header = (props) => {
  return (
    <div>
      <header>
        <Logo />
        <Nav cartData={props.cartData} />
      </header>
    </div>
  );
};

export default Header;
