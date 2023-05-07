import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import logo from "./img/logo.webp";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 30) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-3 shadow-md" : "bg-none py-5"
      } fixed z-20 w-screen transition-all duration-200`} style={{marginBottom:"1000px"}}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={"/"}>
          <div className="w-[200px]">
            <img className="h-[150px] w-full" src={logo} alt="shop logo" />
          </div>
        </Link>
        <ul style={{}}>
            <li class="nav-item">
                <Link class="nav-link active" to="">HOME</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/men">MEN</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/women">WOMEN</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/jewelery">JEWELERY</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/electronics">ELETRONICS</Link> {/**a thanh Link href thanh to */}
            </li>
        </ul>
        
        <button className="relative" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
          <span
            className={`${
              itemAmount > 0 ? "block" : "hidden"
            } absolute -right-2 -bottom-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 p-[1px] text-[12px] text-white`}
          >
            {itemAmount}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
