import { motion, easeInOut} from 'motion/react'
import Image from 'next/image'

type ActionCardsProps = {
    cardColor: string,
    imageSrc: string,
    imageAlt: string,
}

export const ActionCards = ({cardColor, imageSrc, imageAlt} : ActionCardsProps) => {
    return (
         <motion.div
          className="flex justify-around rounded-lg border-4 w-[300px] h-[80px] my-5"
          style={{borderColor: cardColor }}
          initial = {{y:0}}
          whileInView = {{y: 100}}
          transition = {{ duration: 3, ease: easeInOut}}
          viewport={{once: false, amount: 1}}
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