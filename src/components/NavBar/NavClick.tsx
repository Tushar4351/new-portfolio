import React, { useState } from "react";
import { motion } from "framer-motion";
import { navbarItem1 } from "../../data/navData";
import AnimatedButton from "./AnimatedButton";

const NavClick: React.FC = () => {
  const navItems = Object.values(navbarItem1).slice(0, -2);
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };
  return (
    <>
      <AnimatedButton active={active} toggleMenu={toggleMenu} />
      {active && (
        <motion.div
          className={` ${active ? "bg-black1 fixed inset-0 z-50 p-6" : ""} `}
        >
          {active && <AnimatedButton active={active} toggleMenu={toggleMenu} />}
          {active && (
            <motion.ul
              className="absolute left-0 right-0"
              transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            >
              {Object.values(navItems).map((item, index) => (
                <li
                  key={index}
                  className={`mb-10 ${
                    item.label === "Contact" ? "bg-principal" : ""
                  } text-center rounded-full p-4`}
                >
                  <a
                    href={item.link}
                    className="text-Blanc text-2xl xsm:text-5xl font-argenMed md:m-6"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      )}
    </>
  );
};

export default NavClick;
