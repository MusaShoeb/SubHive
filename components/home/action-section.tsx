
import { motion, easeInOut} from 'motion/react'
import Image from 'next/image'
import  { ActionCards, ActionCardSchool } from './action-cards'
import { iconImages } from '@/data/icons'
import { isMobileStore } from '@/zustand/mobile-view'

export default function ActionSection () {

    const isMobile = isMobileStore((state) => state.isMobile)

    return (
        <div className="min-h-[80vh] mt-15 ">
        <h2 className="title flex items-center text-center justify-center mx-2 gradient-text text-[45px] font-medium"> Browse through the sub list. <br></br> Send your first contact. </h2>
        <div className="flex justify-evenly items-center mx-10 mt-10 mb-15 md:mx-25">
            <div className='action-card list'>
        <ActionCards
            cardColor= {"var(--honey)"}
            imageSrc= {iconImages.userIconYellow.src}
            imageAlt= {iconImages.userIconYellow.alt}
        ></ActionCards>

        <ActionCards
            cardColor= {"var(--burnt-orange)"}
            imageSrc= {iconImages.userIconOrange.src}
            imageAlt= {iconImages.userIconOrange.alt}
            middleCard = {true}
        ></ActionCards>

        <ActionCards
            cardColor= {"var(--dark-maroon)"}
            imageSrc= {iconImages.userIconRed.src}
            imageAlt= {iconImages.userIconRed.alt}
        ></ActionCards>
            </div>
         {
          !isMobile && 
          <div className='flex'>
             <ActionCardSchool></ActionCardSchool>
          </div>
        }
        </div>
    </div>
    )
}