import React from "react";
import { motion } from "framer-motion";
import { headerLogo } from "../assets/images";

const Preloader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={headerLogo}
        alt="Loading..."
        className="w-1/2 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5"
      />
    </motion.div>
  );
};

export default Preloader;
