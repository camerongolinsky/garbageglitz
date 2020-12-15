import React, { useState } from "react";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Shop from "../pages/Shop";
import Products from './Products';
import Details from "./Details";
import Cart from "../pages/Cart";
// import { TRASH } from "../trash";
import { Route } from "react-router-dom";
import "./Header.css";



const Section = (props) => {
  return (
    <section className="container-home">
      <div className="btn-position">
        <Route path="/" exact component={Home} />
      </div>
      <div>
        <Route
          path="/products" exact component={Products}
          // render={() => <Products 
            // trash={TRASH} updateCart={props.updateCart} 
          //>}
        />
        <Route path="/products/:id" exact component={Details} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart}
        // render={() => <Cart 
        // cartData={props.cartData} 
        // >} 
        />
      </div>
    </section>
  );
};

export default Section;
