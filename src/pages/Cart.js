import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/DataProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const decrease = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to dump this trash?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h2 style={{ TextAlgin: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <React.Fragment>
      {cart.map((product) => (
        <div
          className="details cart"
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
            style={{ backgroundImage: `url(${product.image})` }}/>

          <div className="box-details">
            <h2 title={product.name}>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>

            <div className="amount">
              <button className="count" onClick={() => decrease(product.id)}>
                {" "}
                -{" "}
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increase(product.id)}>
                {" "}
                +{" "}
              </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product.id)}>
            <FontAwesomeIcon
              icon={faWindowClose}
              className='fa-2x'
            />
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total: ${total}</h3>
      </div>
    </React.Fragment>
  );
}
