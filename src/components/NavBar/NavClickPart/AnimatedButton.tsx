import { motion } from "framer-motion";
import VARIANTS from "../../../data/navClickVariants";
import type { FC } from "react";

interface AnimatedButtonProps {
  active: boolean;
  toggleMenu: () => void;
}

//Button Component

const AnimatedButton: FC<AnimatedButtonProps> = ({ active, toggleMenu }) => {
  return (
    <motion.div className="flex justify-end ">
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={toggleMenu}
        className={`${
          active ? "rounded-full bg-principal" : "bg-black1"
        } absolute cursor-pointer top-0 right-0 overflow-hidden h-16 w-16 rounded-full bg-transparent`}
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
    </motion.div>
  );
};

export default AnimatedButton;
