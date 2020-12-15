import React from "react";
import { Link } from "react-router-dom";
import cuteRaccoon from './cute-raccoon.png';



const Home = () => {
  return (
      <div>
        <img src={cuteRaccoon} alt='cute raccoon'/>
        {/* <Link to='/shop' className='btn-primary' >Get Trashed!</Link>   */}
        <Link to='/products' className='btn-primary' >Get Trashed!</Link>   
      </div>
  );
};



export default Home;
