import React, {useContext} from "react";
import { Link } from "react-router-dom";

const Shop = ({ trash, updateCart }) => {
  console.log(updateCart);
  return (
    <div>
      <div className="page-title">
        <h1>Shop</h1>
      </div>

      {trash.map((item) => {
        return (
          <section>
            <div className="products">
              <div
                className="card"
                style={
                  item.type === "food"
                    ? { backgroundColor: "rgba(240, 52, 52, 0.94)" }
                    : item.type === "misc"
                    ? { backgroundColor: "rgba(247, 202, 24, 1)" }
                    : { backgroundColor: "rgba(137, 196, 244, 1)" }
                }
              >
                <div className="box" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h3 title={item.name}>
                    {/* <Link to="/"> */}
                    {item.name}
                    {/* </Link>  */}
                  </h3>
                  <p>{item.description}</p>
                  <h2>{item.price}</h2>
                  <button onClick={() => updateCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Shop;