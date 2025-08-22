"use client";

import { motion } from "motion/react"



const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function LineAnimation () {

   return (
      <div className="absolute">
             <motion.line
            x1="100"
            y1="100"
            x2="200"
            y2="200"
            stroke="#F0D88C"
            custom={2}
      />
      </div>
        
   )

}