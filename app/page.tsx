"use client";

import LineAnimation from "@/data/animations";
import { easeInOut, motion } from "motion/react"

export default function HomePage () {
  return (
    <div className="relative min-h-screen flex justify-center mt-60 gradient-text text-[30px]">
  
          Find Qualified Islamic School Substitute Teachers - Quickly
        
      <div className="absolute w-full">
            <LineAnimation></LineAnimation>
      </div>  
        
        
    </div>
  )
}