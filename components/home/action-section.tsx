
import { motion, easeInOut} from 'motion/react'
import Image from 'next/image'
import { ActionCards } from './action-cards'
import { iconImages } from '@/data/icons'

export default function ActionSection () {
    return (
        <div className="min-h-[80vh] mt-15 ">
        <h2 className="title flex items-center justify-center gradient-text text-[45px] font-medium"> Browse through the sub list. <br></br> Send your first contact. </h2>
        <div className="mx-25 my-10">
          <ActionCards
            cardColor= {"var(--honey)"}
            imageSrc= {iconImages.userIconYellow.src}
            imageAlt= {iconImages.userIconYellow.alt}
        ></ActionCards>

        <ActionCards
            cardColor= {"var(--burnt-orange)"}
            imageSrc= {iconImages.userIconOrange.src}
            imageAlt= {iconImages.userIconOrange.alt}
        ></ActionCards>

        <ActionCards
            cardColor= {"var(--dark-maroon)"}
            imageSrc= {iconImages.userIconRed.src}
            imageAlt= {iconImages.userIconRed.alt}
        ></ActionCards>
        </div>
    </div>
    )
}