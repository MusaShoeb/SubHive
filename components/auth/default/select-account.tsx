"use client";

import SelectCard from "@/components/auth/default/select-card";
import { useState } from "react"
import { iconImages } from "@/data/icons";
import { motion } from "motion/react"

export default function SelectAccount({switchState} : {switchState: (newState :string) => void}) {

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
              onClick={() => handleSelection("school")}
              selectionState= {selection}
              cardType="school"
              ></SelectCard>
              <SelectCard
              color= "var(--lake-green)"
              borderColor= "var(--forest-green)"
              textColor= "white"
              body = "I am a substitute teacher"
              iconSrc= {iconImages.teacherWhite.src}
              iconAlt = {iconImages.teacherWhite.alt}
              onClick={() => handleSelection("substitute")}
              selectionState= {selection}
              cardType="substitute"
              ></SelectCard>
          </div>
          <motion.button
            whileHover={{backgroundColor: "var(--burnt-orange)"}}
            transition={{duration: .8}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[200px] h-[50px] p-[5px] mt-20">
                <div 
                    className="text-[var(--burnt-orange)] group-hover:text-white text-[20px]"
                    onClick={() => switchState(selection)}>Create Account</div>
          </motion.button>
           <div className="flex flex-col items-center">
            <div className="flex flex-row m-10 text-[19px]">
              <div className="mx-2"> Already Have an Account? </div>
              <div className="gradient-text font-medium hover:brightness-125">Login Here</div>
            </div>
          </div>
        </div>
  )
}



 