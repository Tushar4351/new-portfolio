import { useState, useEffect, type RefObject } from "react";
import { useAnimate, stagger } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import MenuItem from "./MenuItem";

type Animation = [
  string,
  { [key: string]: string | number },
  { [key: string]: any }
][];

//Creating the animation when navbar got clicked

function useMenuAnimation(active: boolean): RefObject<HTMLDivElement> {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: Animation = active
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate(menuAnimations);
  }, [active]);

  return scope;
}

//main part off the navClick 

const NavClick: React.FC = () => {
  const [active, setActive] = useState(false);
  const scope = useMenuAnimation(active);

  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div ref={scope} className="fixed top-7 right-3 z-50 ">
      <MenuItem />
      <AnimatedButton active={active} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavClick;
