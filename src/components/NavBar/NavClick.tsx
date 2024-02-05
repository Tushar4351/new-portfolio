import React, { useState } from "react";
import { motion, useAnimation, MotionConfig } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { navbarItem1 } from "../../data/navData";
import VARIANTS from "../../data/navClickVariants";

const NavClick: React.FC = () => {
  const [active, setActive] = useState(false);
  const navControl = useAnimation();

  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
    animateNav();
  };

  const animateNav = () => {
    navControl.start({
      height: active ? "auto" : 0,
      opacity: active ? 0 : 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  };

  return (
    <div className={` ${active ? "bg-black1 fixed inset-0 z-50 p-6" : ""} `}>
      <motion.div className="flex justify-end">
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            onClick={toggleMenu}
            className={`${
              active ? "" : ""
            } relative  h-16 w-16 rounded-full bg-principal`}
          >
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-8 bg-Blanc"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-8 bg-Blanc"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-3 bg-Blanc"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
              }}
            />
          </motion.button>
        </MotionConfig>
      </motion.div>

      <motion.ul
        className={`absolute left-0 right-0 ${
          active
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        animate={navControl}
        initial={{ height: 0, opacity: 0 }}
      >
        {Object.values(navbarItem1).map((item, index) => (
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
    </div>
  );
};

export default NavClick;
