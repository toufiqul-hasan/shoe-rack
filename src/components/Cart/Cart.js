import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart, handleRemoveProduct, randomSelection, random, resetCart }) => {

  return (
    <div className="cart">
      <h2>Selected Shoes</h2>
      <hr />
      <div className="cart-product">
        {cart.map((item) => (
          <h4 key={item.id}>
            <img key={item.id} src={item.img} alt="" />
            {item.name}
            <button onClick={() => handleRemoveProduct()} className="delete-button">
              <FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
            </button>
          </h4>
        ))}
      </div>
      <div>
        <button className="cart-button" onClick={() => randomSelection(random)}>
          Choose One For Me
        </button>
        <p id="random-shoe"></p>
      </div>
      <div>
        <button className="cart-button" onClick={() => resetCart(cart)}>
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;