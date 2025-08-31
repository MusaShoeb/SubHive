import Image from "next/image"
import HeroCards from "./hero-cards"
import { iconImages } from "@/data/icons"


export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col mt-30 items-center">
      <div className="w-300 h-200 bg-white opacity-80 flex flex-col rounded-lg border-4 border-[var(--dark-maroon)]">
        
        <div className="flex-3 flex flex-col bg-[var(--burnt-orange)] items-center justify-center border-b-4 border-[var(--dark-maroon)] font text-white text-[60px]">
          <h1 className="title">
            Find Qualified Islamic School <br /> Substitute Teachers - Quickly
          </h1>
          <div className="mt-15 flex w-full justify-around">
            <Image
              src= {iconImages.beesWhite.src}
              alt= {iconImages.beesWhite.alt}
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="flex-2 py-5 flex justify-evenly items-center">

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
              imageSrc= {iconImages.verifiedWhite.src}
              imageAlt= {iconImages.verifiedWhite.alt}
          ></HeroCards>

        </div>
      </div>
    </div>
  )
}
