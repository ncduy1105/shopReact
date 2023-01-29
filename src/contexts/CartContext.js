import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(`$ ${0}`);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // new instance of product with added amount : 1
    const cartItem = cart.find((item) => item.id === id);
    // if product already in cart it will be true
    if (cartItem) {
      // if added product found already existing
      const newCart = [...cart].map((item) => {
        // destructure current cart into newCart array and map through it
        if (item.id === id) {
          // if existing product is being added again do the below:
          return { ...item, amount: cartItem.amount + 1 };
          // + 1 to amount of the added product
        } else {
          return item;
          // add unchanged products to the newCart array
        }
      });
      setCart(newCart);
      // set cart with new updated one
    } else {
      setCart([...cart, newItem]);
      // add new product to the cart
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
