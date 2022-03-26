import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Qna1 from "../Qna1/Qna1";
import Qna2 from "../Qna2/Qna2";
import Qna3 from "../Qna3/Qna3";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if(cart.length < 4){
      if (!exists) {
        newCart = [...cart, selectedProduct];
      } 
      else if (exists) {
        newCart = [...cart];
        alert("Already Selected!");
      } 
      else {
        const rest = cart.filter((product) => product.id !== selectedProduct.id);
        newCart = [...rest, exists];
      }
    }
    else {
      newCart = [...cart];
      alert("Oops... Can't select more than four!");
    }
    setCart(newCart);
  };

  const randomSelection = () => {
    const newCart = cart;
    const random = newCart[Math.floor(Math.random() * newCart.length)];
    document.getElementById("random-shoe").innerHTML = random.name;
  };

  const resetCart = () => {
    let newCart = cart;
    newCart = [];
    setCart(newCart);
    document.getElementById("random-shoe").innerHTML = "";
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
        <div>
          <Qna1></Qna1>
        </div>
        <div>
          <Qna2></Qna2>
        </div>
        <div>
          <Qna3></Qna3>
        </div>
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          randomSelection={randomSelection}
          resetCart={resetCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
