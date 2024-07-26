"use client";
import React from "react";
import { motion } from "framer-motion";
const Card = ({ children }: any) => {
  return (
    <motion.div
      initial={{
        x: -1000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5
        },
      }}
      className="bg-white rounded-lg p-5 w-fit h-fit shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default Card;
