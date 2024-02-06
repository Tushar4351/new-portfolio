interface Variant {
  rotate: string[];
  top?: string[];
  bottom?: string[];
  left?: string | number;
}

interface Variants {
    [key: string]: {
      open: Variant;
      closed: Variant;
    };
  }
  
  const VARIANTS: Variants = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
    // menu: {  // Added the 'menu' key
    //     open: {
    //     'z-index': '50',
    //     width: "480px",
    //     height: "650px",
    //     top: "-25px",
    //     right: "-25px",
    //     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    //   },
    //   closed: {
    //     width: "100px",
    //     height: "40px",
    //     top: "0px",
    //     right: "0px",
    //     transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
    //   },
    // },
  };
  
  export default VARIANTS;
  