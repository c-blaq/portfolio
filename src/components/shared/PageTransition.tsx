import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
  const variant = {
    initial: { x: "-100%", width: "100%" },
    animate: { x: "0%", width: "0%" },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <div>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-0 bg-primary z-[30]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-0 bg-primary-dark2 z-[20]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-0 bg-primary-dark z-[10]"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default PageTransition;
