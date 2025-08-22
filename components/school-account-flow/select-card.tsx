"use client";

import { motion, easeInOut } from "motion/react"
import Image from "next/image";

type SelectCardProps = {
    color: string,
    borderColor: string,
    textColor: string,
    body: string,
    iconSrc: string,
    iconAlt: string,
    cardType: string,
    selectionState: string
    onClick: (cardType: string) => void
}


export default function SelectCard (
    {color, borderColor, textColor, body, iconSrc, iconAlt, cardType, selectionState, onClick} : SelectCardProps
) {

   const lineVariants = {
    initial: {width: 0},
    hover: {width: 300},
    clicked: {width: 300}
}

   return (
    <motion.div
        className= { "flex flex-col justify-center items-center h-[225px] w-[300px] text-[25px] rounded-lg border-4 drop-shadow-lg"}
        style={{
                backgroundColor: color,
                color: textColor,
                borderColor: borderColor
            }}
        onClick= {() => onClick(cardType)}
        initial = "initial"
        animate = {(selectionState === cardType) ? "clicked" : "initial"}
        whileHover={{scale: 1.1}}
        >
        <Image
            src={iconSrc}
            alt= {iconAlt}
            width={80}
            height={80}
            style={
                {margin: 5}
            }>
        </Image>
        {body}
         <motion.div
            variants={lineVariants}
            transition={{duration: 1, ease: easeInOut}}
            style={{
                borderColor: borderColor,
                marginTop: '30px',
                marginBottom: '5px',
                 }}
            className="border-2 group-hover">
        </motion.div>
    </motion.div>
   )
}