"use client";

import SelectCard from "@/components/school-account-flow/select-card";
import { useState } from "react"
import { iconImages } from "@/data/icons";
import { motion } from "motion/react"

export default function SelectAccount({Next} : {Next: () => void}) {


  const [selection, setSelection] = useState("")

  const handleSelection = (selection: string) => {
    setSelection(selection)
  }

  return (
        <div className="flex flex-col justify-center items-center mt-20 md:mt-45">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-20">
              <SelectCard
              color="var(--honey)"
              borderColor="var(--dark-maroon)"
              textColor="var(--dark-maroon)"
              body = "I need a substitute teacher"
              iconSrc= {iconImages.schoolRed.src}
              iconAlt = {iconImages.schoolRed.alt}
              onClick={() => handleSelection("organization")}
              selectionState= {selection}
              cardType="organization"
              ></SelectCard>
              <SelectCard
              color= "var(--lake-green)"
              borderColor= "var(--forest-green)"
              textColor= "white"
              body = "I am a substitute teacher"
              iconSrc= {iconImages.teacherWhite.src}
              iconAlt = {iconImages.teacherWhite.alt}
              onClick={() => handleSelection("teacher")}
              selectionState= {selection}
              cardType="teacher"
              ></SelectCard>
          </div>
          <motion.button
            whileHover={{backgroundColor: "var(--burnt-orange)"}}
            transition={{duration: .8}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[200px] h-[50px] p-[5px] mt-20">
                <div 
                    className="text-[var(--burnt-orange)] group-hover:text-white text-[20px]"
                    onClick={() => Next()}>Create Account</div>
          </motion.button>
        </div>
  )
}



 