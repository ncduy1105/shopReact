import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";

import { SidebarContext } from "../contexts/SidebarContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-pink-200">
      <div>header</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
