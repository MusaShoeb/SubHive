"use client";

import Image from "next/image";
import { easeInOut, motion, Variants } from "motion/react"


export default function HomePage () {

  

  return (
    <>
    <div className="relative min-h-screen flex flex-col mt-30 items-center ">
      <div className='w-300 h-200 bg-white opacity-80 flex flex-col rounded-lg border-4 border-[var(--dark-maroon)]'>
          <div className='flex-3 flex flex-col bg-[var(--burnt-orange)] items-center justify-center border-b-4 border-[var(--dark-maroon)] font text-white text-[60px]'>
               <div className="title">
                Find Qualified Islamic School <br></br> Substitute Teachers - Quickly  
               </div>
               <div className="mt-15 flex w-full justify-around">
                <Image
                  src={'/bees.png'}
                  alt="Two bees flying together"
                  width={80}
                  height={80}
                ></Image>
               </div> 
          </div>
          
          <div className='flex-2 py-5 flex justify-evenly items-center'>
              <div className= "bg-[var(--dark-maroon)] flex flex-col justify-center items-center w-80 h-70 rounded-2xl text-white">
                    <Image
                        src = "/verified.png"
                        alt = "Icon of a check surrounded by swirling arrows - indicating verification"
                        width={80}
                        height={80}>
                    </Image>
                     <div className="text-white text-[30px]">
                      Verifiability
                    </div>
                    <div className="mt-5 border-t-3 w-full"/>
                     <div className="m-5 text-white text-[25px]">
                      Teachers certified through background checks
                    </div>
              </div>
              <div className= "bg-[var(--burnt-orange)] flex flex-col justify-center items-center w-80 h-70 rounded-2xl text-white ">
                    <Image
                        src = "/map.png"
                        alt = "Icon of a map with a pinned location"
                        width={80}
                        height={80}>
                    </Image>
                     <div className="text-white text-[30px]">
                      Location
                    </div>
                    <div className="mt-5 border-t-3 w-full"/>
                     <div className="m-5 text-white text-[25px]">
                      Teachers located within the DMV area
                    </div>
              </div>
               <div className= "bg-[var(--dark-maroon)] flex flex-col justify-center items-center w-80 h-70 rounded-2xl text-white ">
                    <Image
                        src = "/pattern.png"
                        alt = "Icon of a check surrounded by swirling arrows - indicating verification"
                        width={80}
                        height={80}>
                    </Image>
                     <div className="text-white text-[30px]">
                      Islamic Core
                    </div>
                    <div className="mt-5 border-t-3 w-full"/>
                     <div className="m-5 text-white text-[25px]">
                      Teachers with a focus on Islamic Principles
                    </div>
              </div>
          </div>
      </div>
    
    </div>

    <div className="min-h-[80vh] mt-15 ">
        <div className="title flex items-center justify-center gradient-text text-[45px] font-medium"> Browse through the sub list. <br></br> Send your first contact. </div>
        <div className="mx-25 my-10">
           <motion.div
          className="flex justify-around rounded-lg border-4 border-[var(--honey)] w-[300px] h-[80px] my-5"
          initial = {{y:0}}
          whileInView = {{y: 100}}
          transition = {{ duration: 3, ease: easeInOut}}
          viewport={{once: false, amount: 1}}
          >
          <Image
            src = '/user-icon-yellow.png'
            alt="Yellow User Icon"
            width={50}
            height={50}
            className="m-3">
          </Image>
          <div className="flex flex-col">
            <span className="border-t-3 w-[150px] border-[var(--honey)] mt-3 m-2"></span>
            <span className="border-t-3 w-[75px]  border-[var(--honey)] m-2"></span>
            <span className="border-t-3 w-[200px]  border-[var(--honey)] m-2"></span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-around rounded-lg border-4 border-[var(--burnt-orange)] w-[300px] h-[80px] my-5"
          initial = {{y:0}}
          whileInView = {{y: 100}}
          transition = {{ duration: 3, ease: easeInOut}}
          viewport={{once: false, amount: 1}}
          >
          <Image
            src = '/user-icon-orange.png'
            alt="Orange User Icon"
            width={50}
            height={50}
            className="m-3">
          </Image>
          <div className="flex flex-col">
            <span className="border-t-3 w-[150px] border-[var(--burnt-orange)] mt-3 m-2"></span>
            <span className="border-t-3 w-[75px]  border-[var(--burnt-orange)] m-2"></span>
            <span className="border-t-3 w-[200px]  border-[var(--burnt-orange)] m-2"></span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-around rounded-lg border-4 border-[var(--dark-maroon)] w-[300px] h-[80px] my-5"
          initial = {{y:0}}
          whileInView = {{y: 100}}
          transition = {{ duration: 3, ease: easeInOut}}
          viewport={{once: false, amount: 1}}
          >
          <Image
            src = '/user-icon-red.png'
            alt="Red User Icon"
            width={50}
            height={50}
            className="m-3">
          </Image>
          <div className="flex flex-col">
            <span className="border-t-3 w-[150px] border-[var(--dark-maroon)] mt-3 m-2"></span>
            <span className="border-t-3 w-[75px]  border-[var(--dark-maroon)] m-2"></span>
            <span className="border-t-3 w-[200px]  border-[var(--dark-maroon)] m-2"></span>
          </div>
        </motion.div>
        </div>
       
    </div>
    </>
    
  )
}