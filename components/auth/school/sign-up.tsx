
import { motion } from 'motion/react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { useState } from 'react'

type schoolSignUpProps = {
    onPrev: () => void
}

export default function SchoolSignUp ({onPrev}: schoolSignUpProps) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex justify-center items-center h-[80vh]">
      <motion.button className = "mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
         <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
      </motion.button>
      <div className="flex flex-col w-[900px] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
        <div className="flex flex-col w-full h-full items-center">
          <Image
            src={iconImages.schoolRed.src}
            alt={iconImages.schoolRed.alt}
            width={75}
            height={75}
          />
           <motion.h1 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                 Build Your Profile.
            </motion.h1>

         <form className='flex flex-col'>
            <input
               type = "text"
               value={email}
               placeholder='Enter your email'
               onChange={(e) => (setEmail(e.currentTarget.value))}
            ></input>
             <input
               type = "text"
               value={password}
               placeholder='Enter a strong password'
               onChange={(e) => (setPassword(e.currentTarget.value))}
            ></input>
        </form>
        </div>
      </div>
    </div>
    )
}