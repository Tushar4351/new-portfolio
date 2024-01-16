import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import navbarItem from "../data/navData";

const NavClick: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-red-500 p-4">
      {isMenuOpen ? (
        <IoIosClose size={50} color="white" onClick={toggleMenu} />
      ) : (
        <IoIosMenu size={50} color="white" onClick={toggleMenu} />
      )}

      {isMenuOpen && (
        <ul className="mt-4">
          {Object.values(navbarItem).map((item, index) => (
            <li key={index} className="mb-2">
              <a href={item.link} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavClick;
