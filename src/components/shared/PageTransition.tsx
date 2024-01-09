import React from "react";
import { easeIn, motion } from "framer-motion";

const PageTransition = () => {
  const variant = {
    initial: { x: "-100%", w: "100%" },
    animate: { x: "0", w: "0" },
    exit: {
      x: ["0", "100%"],
      width: ["0", "100%"],
    },
  };

  return (
    <div>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full bg-primary z-[30]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full bg-primary-dark2 z-[20]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full bg-primary-dark z-[20]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default PageTransition;
