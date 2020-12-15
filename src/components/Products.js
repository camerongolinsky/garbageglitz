import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

export default function Products() {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const addCart = value.addCart;

  return (
    <div className="products">
      {products.map((product) => (
        <div
          className="card"
          key={product.id}
          style={
            product.type === "food"
              ? { backgroundColor: "rgba(240, 52, 52, 0.94)" }
              : product.type === "misc"
              ? { backgroundColor: "rgba(247, 202, 24, 1)" }
              : { backgroundColor: "rgba(137, 196, 244, 1)" }
          }
        >
          <Link to={`/products/${product.id}`}>
            <div
              style={{
                backgroundColor: "white",
                height: "300px",
                border: "3px solid black",
              }}
            >
              <img src={product.image} alt="" />
            </div>
          </Link>
          <div className="box">
            <h3 title={product.name}>
              <Link to={`/products/${product.id}`} className="card-box-name">
                {product.name}
              </Link>
            </h3>
            <p>{product.description}</p>
            <div className="price-row">
              <h4>${product.price}</h4>
              <button onClick={() => addCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
