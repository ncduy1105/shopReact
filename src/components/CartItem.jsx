import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
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
            <button className="h-fit p-1 text-xl">
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>
          <div className="flex h-[36px] gap-x-2 bg-pink-200 text-sm">
            {/* qty */}
            <div>{amount}</div>
            {/* item price */}
            <div>{price}</div>
            {/* final price */}
            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
