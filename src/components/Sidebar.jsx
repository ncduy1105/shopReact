import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 z-30 h-full w-full bg-white px-4 shadow-2xl transition-all duration-[350ms] ease-in-out md:w-[50vw] lg:max-w-[50vw] lg:px-[35px] xl:max-w-[38vw] 3xl:max-w-[28vw]`}
    >
      <div className="flex items-center justify-between border-b py-8">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex h-[560px] flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b lg:h-[680px]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="mt-4 flex flex-col gap-y-3 py-4">
        <div className="flex w-full items-center justify-between ">
          {/* total */}
          <div className="font-semibold uppercase">
            <span className="mr-2">Total: </span>$ {total.toFixed(2)}
          </div>
          {/* clear cart icon */}
          <button
            onClick={clearCart}
            className="flex h-12 w-12 items-center justify-center bg-red-500 py-4 text-xl text-white"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
