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
    if (cart.length < 4) {
      if (!exists) {
        newCart = [...cart, selectedProduct];
        document.getElementById("random-shoe").innerHTML = "";
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

  const handleRemoveProduct = (item) => {
    const rest = cart.filter(product => product.id !== item.id);
    setCart(rest);
  };

  const randomSelection = () => {
    if (cart.length > 0) {
      const newCart = cart;
      const random = newCart[Math.floor(Math.random() * newCart.length)];
      document.getElementById("random-shoe").innerHTML = `<img src="${random.img}">${random.name}`;
      let brandNewCart = cart;
      brandNewCart = [];
      setCart(brandNewCart);
    } 
    else {
      return;
    }
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
          handleRemoveProduct={handleRemoveProduct}
          randomSelection={randomSelection}
          resetCart={resetCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;