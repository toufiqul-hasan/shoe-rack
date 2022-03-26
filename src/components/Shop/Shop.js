import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
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
    if (!exists) {
      newCart = [...cart, selectedProduct];
    } 
    else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      newCart = [...rest, exists];
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