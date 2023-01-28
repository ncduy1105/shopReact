import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } x-20 fixed top-0 h-full w-full bg-white px-4 shadow-2xl transition-all duration-[350ms] ease-in-out md:w-[35vw] lg:px-[35px] xl:max-w-[30vw] 3xl:max-w-[25vw]`}
    >
      <div className="flex items-center justify-between border-b py-8">
        <div className="text-sm font-semibold uppercase">Shopping Bag(0)</div>
        <div
          onClick={handleClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
