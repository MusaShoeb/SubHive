import { motion, easeInOut} from 'motion/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { schoolProfileStore } from '@/zustand/school-profile'
import { isMobileStore } from '@/zustand/mobile-view'
import { useRouter } from 'next/navigation'
import { exit } from 'process'


type ActionCardsProps = {
    cardColor: string,
    imageSrc: string,
    imageAlt: string,
    middleCard?: boolean,
}

const animationVariants = {

  web:{
    y: ["0vh", "-8vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh"],
    x: ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"],
    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  },

 webMiddle: {
    y: ["0vh", "-8vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh"],
    x: ["0vw", "0vw", "0vw", "10vw", "10vw", "10vw", "10vw", "10vw", "0vw"],
    rotate: [0, 0, 0, 0, 1, 0, 1, 0, 0]
  },

  mobile: {
    y: ["0vh", "10vh", "-8vh", "8vh", "8vh", "8vh"]
  },

  mobileMiddle: {
     y: ["0vh", "10vh", "-8vh", "8vh", "8vh", "8vh"],
     scale: [1, 1, 1, 1, 1.1, 1]
  },

  school:{
    backgroundColor: ["#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00", "var(--cambridge-blue)", "var(--cambridge-blue)", "var(--cambridge-blue)", "var(--cambridge-blue)", "#ffffff00"],
    rotate: [0, 0, 0, 0, -1, 0, -1, 0, 0]
  },

  hover: {
    rotate: [3, -3, 3, -3, 1, -1, 1, -1, 0]
  }

}
export const ActionCards = ({cardColor, imageSrc, imageAlt, middleCard = false} : ActionCardsProps) => {

   const isMobile = isMobileStore((state) => state.isMobile);
   const [canHover, setCanHover] = useState(false);
   const router = useRouter();
  
    return (
         <motion.div
          className="flex justify-around w-[300px] h-[80px] rounded-lg border-4 my-5"
          whileHover={canHover? "hover" : "" }
          onClick={() => {router.push('/auth')}}
          style={{borderColor: cardColor}}
          variants={animationVariants}
          whileInView={
              isMobile
                ? middleCard
                  ? "mobileMiddle"
                  : "mobile"
                : middleCard
                  ? "webMiddle"
                  : "web"
          }
          transition = {{
            duration: 6, 
            times: [0, .22, .44, .66, .70, .75, .82, .91, 1 ]}}
          viewport={{once: false, amount: .6}}
          onAnimationComplete={() => {setCanHover(true)}}
          >
          <Image
            src = {imageSrc}
            alt= {imageAlt}
            width={50}
            height={50}
            className="m-3">
          </Image>
          <div className="flex flex-col">
            <span className="border-t-3 w-[150px] mt-3 m-2" style={{borderColor: cardColor}}></span>
            <span className="border-t-3 w-[75px] m-2"  style={{borderColor: cardColor}}></span>
            <span className="border-t-3 w-[200px] m-2"  style={{borderColor: cardColor}}></span>
          </div>
        </motion.div>
    )
}

export const ActionCardSchool = () => {

  const [canHover, setCanHover] = useState(false);
  const router = useRouter();

  return (
    <motion.div 
         className='rounded-lg border-4 border-[var(--forest-green)] w-[300px] h-[200px]'
         onClick={() => {router.push('/auth')}}
         whileHover={canHover? "hover" : "" }
         variants={animationVariants}
         initial = {{y: "10vh"}}
         whileInView = {"school"}
         transition = {{ duration: 6, times: [0, .22, .44, .66, .70, .75, .82, .91, 1 ]}}
         viewport={{once: false, amount: .6}}
         onAnimationComplete={() => {setCanHover(true)}}
    >
          <div className='flex flex-col justify-center items-center'>
           <Image
            src = {iconImages.schoolGreen.src}
            alt= {iconImages.schoolGreen.alt}
            width={80}
            height={80}
            className="m-3">
          </Image>
            <div className='flex flex-col'>
            <span className="border-t-3 border-[var(--forest-green)] w-[200px] mt-3" ></span>
            <span className="border-t-3 border-[var(--forest-green)] w-[175px] mt-4"></span>
            <span className="border-t-3 border-[var(--forest-green)]  w-[300px] mt-4"></span>
           </div>
          </div>
          
    </motion.div>
  )
}