import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, addToCart, decreaseAmount } = useContext(CartContext);

  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="flex w-full flex-col">
          {/* title and remove icoon */}
          <div className="mb-2 flex items-center justify-between">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="max-w-[240px] text-sm font-medium uppercase text-primary hover:underline"
            >
              {title}
            </Link>
            <button
              onClick={() => removeFromCart(id)}
              className="h-fit p-1 text-xl"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            {/* qty */}
            <div className="flex h-full max-w-[100px] flex-1 items-center border font-medium text-primary">
              {/* decrease amount */}
              <button
                onClick={() => decreaseAmount(id)}
                className="flex h-full flex-1 items-center justify-center"
              >
                <IoMdRemove />
              </button>
              <div className="flex h-full items-center justify-center px-2">
                {amount}
              </div>
              {/* increase amount */}
              <button
                onClick={() => addToCart(item, id)}
                className="flex h-full flex-1 items-center justify-center"
              >
                <IoMdAdd />
              </button>
            </div>
            {/* price */}
            <div className="flex flex-1 items-center justify-around">
              $ {price.toFixed(2)}
            </div>
            {/* final price */}
            <div className="flex flex-1 items-center justify-end font-medium text-primary">{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
