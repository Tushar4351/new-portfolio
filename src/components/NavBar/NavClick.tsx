import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import navbarItem from "../../data/navData";

const NavClick: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconControl = useAnimation();
  const navControl = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    animateNav();
  };

  const switchIcon = async () => {
    await iconControl.start({ opacity: 0 });
    toggleMenu();
    await iconControl.start({ opacity: 1 });
  };

  const animateNav = () => {
    navControl.start({
      height: isMenuOpen ? "auto" : 0,
      opacity: isMenuOpen ? 0 : 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  };

  return (
    <nav
      className={`fixed inset-0 z-50 ${
        isMenuOpen ? "bg-black1" : ""
      } text-red-500 p-8 `}
    >
      <div className="flex ml-10 justify-end">
        <motion.div
          animate={iconControl}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={switchIcon}
        >
          {isMenuOpen ? (
            <IoIosClose size={70} color="white" />
          ) : (
            <IoIosMenu size={50} color="white" />
          )}
        </motion.div>
      </div>

      <motion.ul
        //className="absolute left-0 right-0"
        className={`absolute left-0 right-0 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        animate={navControl}
        initial={{ height: 0, opacity: 0 }}
      >
        {Object.values(navbarItem).map((item, index) => (
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
    </nav>
  );
};

export default NavClick;
