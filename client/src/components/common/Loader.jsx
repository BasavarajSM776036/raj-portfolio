import React from "react";
import { motion } from "framer-motion";

const Loader = ({ size = "medium" }) => {
  const sizes = {
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-3",
    large: "w-20 h-20 border-4",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} border-transparent border-t-accent-cyan border-r-accent-purple rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          boxShadow:
            "0 0 10px rgba(6, 182, 212, 0.2), inset 0 0 10px rgba(168, 85, 247, 0.2)",
        }}
      />
    </div>
  );
};

export default Loader;
