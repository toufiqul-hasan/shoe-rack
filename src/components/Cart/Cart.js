import React from "react";
import "./Cart.css";

const Cart = ({ cart, randomSelection, random, resetCart }) => {
  return (
    <div className="cart">
      <h2>Selected Shoes</h2>
      <hr />
      <div>
        {cart.map((item) => (
          <h4 id="reset" key={item.id}>
            {item.name}
          </h4>
        ))}
      </div>
      <div>
        <button className="cart-btn" onClick={() => randomSelection(random)}>
          Choose One For Me
        </button>
        <p id="random-shoe"></p>
      </div>
      <div>
        <button className="cart-btn" onClick={() => resetCart(cart)}>
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;