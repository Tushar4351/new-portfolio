import { motion } from "framer-motion";
import { navbarItem2 } from "../../../data/navData";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed() {
  const navItems = Object.values(navbarItem2);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-4 left-1/2 -translate-x-1/2 rounded-full px-1 py-6 bg-black2"
    >
      <ul className="flex items-center gap-2 text-Blanc font-argenMed">
        {navItems.map((item, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            key={index}
          >
            <a
              href={item.link}
              className={`px-10 py-6 text-xl hover:bg-Blanc hover:text-black2 hover:rounded-full ${
                item.label === "Home" ? "bg-black1/20" : ""
              }`}
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
export default NavbarFixed;
