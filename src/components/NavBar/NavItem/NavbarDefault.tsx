import React, { useState } from "react";
import { navbarItem1 } from "../../../data/navData"
import { motion } from "framer-motion";
function NavbarDefault() {
  const initialActiveIndex = 0; // Set the initial active index
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const navItems = Object.values(navbarItem1).slice(0, -3);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex gap-10 items-center">
      <ul className="flex items-center gap-2 text-black1 font-argenMed">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              onClick={() => handleItemClick(index)}
              className={`${
                index === activeIndex ? "" : "hover:text-white/60"
              } relative px-8 py-4 rounded-xl text-lg outline-sky-400 transition focus-visible:outline-2`}
            >
              {index === activeIndex && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-black1/20 mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <a
          href={navbarItem1.contact.link}
          className="font-argenMed px-8 py-4 rounded-2xl text-Blanc bg-black1"
        >
          {navbarItem1.contact.label}
        </a>
      </div>
    </nav>
  );
}

export default NavbarDefault;
