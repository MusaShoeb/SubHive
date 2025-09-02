import { motion, easeInOut} from 'motion/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'

type ActionCardsProps = {
    cardColor: string,
    imageSrc: string,
    imageAlt: string,
    middleCard?: boolean,
}

const animationKeystrokes = [
  {
    y: ["0vh", "-10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh"],
    x: ["0vw", "0vw", "0vw", "30vw", "30vw", "30vw", "30vw", "30vw", "0vw"],
    rotate: [0, 0, 0, 0, 1, 0, 1, 0, 0]
  },

  {
    y: ["0vh", "-10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh"],
    x: ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"],
    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  },

  {
    backgroundColor: ["", "", "", "", "var(--lake-green)", "var(--lake-green)", "var(--lake-green)", "var(--lake-green)", ""]
  },
]
export const ActionCards = ({cardColor, imageSrc, imageAlt, middleCard = false} : ActionCardsProps) => {

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind "md" breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
    }, []);
  
    return (
         <motion.div
          className="flex justify-around w-[300px] h-[80px] rounded-lg border-4 my-5"
          style={{borderColor: cardColor}}
          whileInView = {{y: isMobile? "0" : middleCard? animationKeystrokes[0].y : animationKeystrokes[1].y,
                          x: isMobile? "0" : middleCard? animationKeystrokes[0].x : animationKeystrokes[1].x,
                          rotate: isMobile? "0" : middleCard? animationKeystrokes[0].rotate : animationKeystrokes[1].rotate
          }}
          transition = {{ duration: 6, times: [0, .22, .44, .66, .70, .75, .82, .91, 1 ]}}
          viewport={{once: false, amount: .6}}
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
  return (
    <motion.div className='rounded-lg border-4 border-[var(--forest-green)] w-[300px] h-[200px]'
         whileInView = {{backgroundColor:  "var(--cambridge-blue)",
          }}
          transition = {{ duration: 1, delay: 4}}
          viewport={{once: false, amount: .6}}
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
            <span className="border-t-3 border-[var(--forest-green)] w-[300px] mt-3" ></span>
            <span className="border-t-3 border-[var(--forest-green)] w-[300px] mt-4"></span>
            <span className="border-t-3 border-[var(--forest-green)]  w-[300px] mt-4"></span>
           </div>
          </div>
          
    </motion.div>
  )
}