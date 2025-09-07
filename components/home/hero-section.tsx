import Image from "next/image"
import HeroCards from "./hero-cards"
import { iconImages } from "@/data/icons"
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <div className="flex min-h-screen flex-col items-center mt-15">
      <div className="flex h-auto w-9/10 flex-col rounded-lg border-4  border-[var(--dark-maroon)] opacity-85 bg-white md:h-200 md:w-300">
        <motion.div
          className="flex flex-3 flex-col items-center justify-center border-b-4 border-[var(--dark-maroon)] text-center font text-[40px] text-white md:text-[60px]"
          animate={{ backgroundColor: "var(--burnt-orange)"}}
          transition={{ backgroundColor: { duration: 0.7 } }}
        >
          <h1 className="title mt-2 m-3 md:m-1">
            Find Qualified Islamic School <br /> Substitute Teachers - Quickly
          </h1>
          <div className="flex w-full justify-around my-5 md:my-0 md:mt-15">
            <Image
              src={iconImages.beesWhite.src}
              alt={iconImages.beesWhite.alt}
              width={80}
              height={80}
            />
          </div>
        </motion.div>

        <div className="flex flex-2 flex-col items-center justify-evenly gap-y-5 py-5 md:flex-row md:gap-y-0">
          <HeroCards
            backgroundColor={"var(--dark-maroon)"}
            cardTitle="Substitute Directory"
            cardDescription=" Profiles, Availability, Subject/Grade Preferences, Cetifications"
            imageSrc={iconImages.patternWhite.src}
            imageAlt={iconImages.patternWhite.alt}
          />

          <HeroCards
            backgroundColor={"var(--burnt-orange)"}
            cardTitle="Verification and Requirements"
            cardDescription=" Background Checks, References, Training, Compliance with Islamic School Guidlines"
            imageSrc={iconImages.verifiedWhite.src}
            imageAlt={iconImages.verifiedWhite.alt}
          />

          <HeroCards
            backgroundColor={"var(--dark-maroon)"}
            cardTitle="Scheduling and Requests"
            cardDescription="Request a Sub, Calendar, Match by Subject/Grade"
            imageSrc={iconImages.scheduleWhite.src}
            imageAlt={iconImages.scheduleWhite.alt}
          />
        </div>
      </div>
    </div>
  )
}
