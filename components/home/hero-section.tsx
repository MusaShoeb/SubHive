import Image from "next/image"
import HeroCards from "./hero-cards"
import { iconImages } from "@/data/icons"
import { motion } from 'motion/react'


export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col mt-25 items-center">
      <div className="w-100 h-auto md:w-300 md:h-200  bg-white opacity-80 flex flex-col rounded-lg border-4 border-[var(--dark-maroon)]">
        
        <motion.div 
            className="flex-3 flex flex-col items-center justify-center border-b-4 border-[var(--dark-maroon)] font text-white text-[40px] text-center md:text-[60px]"
            animate = {{backgroundColor: "var(--burnt-orange)"}}
            transition={{backgroundColor: {duration: .7} }}>
          <h1 className="title mt-2" 
                    >
            Find Qualified Islamic School <br /> Substitute Teachers - Quickly
          </h1>
          <div className="my-5 md:my-0 md:mt-15 flex w-full justify-around">
            <Image
              src= {iconImages.beesWhite.src}
              alt= {iconImages.beesWhite.alt}
              width={80}
              height={80}
            />
          </div>
        </motion.div>

        <div className="flex-2 py-5 gap-y-5 md:gap-y-0 flex flex-col md:flex-row justify-evenly items-center">

          <HeroCards
              backgroundColor= {"var(--dark-maroon)"}
              cardTitle="Verifiability"
              cardDescription=" Teachers certified through background checks"
              imageSrc= {iconImages.verifiedWhite.src}
              imageAlt= {iconImages.verifiedWhite.alt}
          ></HeroCards>
         
         <HeroCards
              backgroundColor= {"var(--burnt-orange)"}
              cardTitle="Location"
              cardDescription=" Teachers located within the DMV area"
              imageSrc= {iconImages.mapWhite.src}
              imageAlt= {iconImages.mapWhite.alt}
          ></HeroCards>

         <HeroCards
              backgroundColor= {"var(--dark-maroon)"}
              cardTitle="Islamic Core"
              cardDescription=" Teachers with a focus on Islamic Principles"
              imageSrc= {iconImages.patternWhite.src}
              imageAlt= {iconImages.patternWhite.alt}
          ></HeroCards>

        </div>
      </div>
    </div>
  )
}
