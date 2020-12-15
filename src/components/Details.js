import React, { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { Link } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  console.log(details);

  return (
    <>
      {details.map((product) => (
        <div
          className="details"
          key={product.id}
          style={
            product.type === "food"
              ? { backgroundColor: "rgba(240, 52, 52, 0.94)" }
              : product.type === "misc"
              ? { backgroundColor: "rgba(247, 202, 24, 1)" }
              : { backgroundColor: "rgba(137, 196, 244, 1)" }
          }
        >
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${product.image})` }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = "center")
            }
          />

          <div className="box-details">
            <h2 title={product.name}>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <Link to='/cart' className="cart" onClick={() => addCart(product.id)}>
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
