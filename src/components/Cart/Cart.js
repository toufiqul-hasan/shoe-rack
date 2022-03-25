import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Ordered Shoes</h2>
      <hr />
      <div>
        {cart.map((item) => (
          <h4 key={item.id}>{item.name}</h4>
        ))}
      </div>
    </div>
  );
};

export default Cart;