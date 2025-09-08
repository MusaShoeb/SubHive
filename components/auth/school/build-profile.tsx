"use client";

import { iconImages } from "@/data/icons";
import Image from "next/image";
import { motion } from 'motion/react'
import { schoolProfileStore } from "@/zustand/school-profile";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/supabase/client-supabase";
import Avatar from "./upload-avatar";
import { useRouter } from "next/navigation";
import { isMobileStore } from "@/zustand/mobile-view";

type BuildSchoolProfileProps = {
    onNext: () => void
    onPrev: () => void
}

export default function BuildSchoolProfile({onNext, onPrev} : BuildSchoolProfileProps) {

  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const gradeLevel = schoolProfileStore((state) => state.gradeLevel);
  const setGradeLevel = schoolProfileStore((state) => state.updateGradeLevel);

  const schoolLinks = schoolProfileStore((state) => state.schoolLinks);
  const setSchoolLinks = schoolProfileStore((state) => state.updateSchoolLinks);

  const schoolLocation = schoolProfileStore((state) => state.schoolLocation);
  const setSchoolLocation = schoolProfileStore((state) => state.updateSchoolLocation);

  const hourlyRate = schoolProfileStore((state) => state.hourlyRate);
  const setHourlyRate = schoolProfileStore((state) => state.updateHourlyRate);

  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const isMobile = isMobileStore(state => state.isMobile)
  
  const checkUser = async () => {
        const { data, error } = await supabase.auth.getUser()
        if (data?.user) {
          setUser(data.user)
        } else {
          setUser(null)
        }
      }
  
  const updateSchoolProfile = async() => {

        setSaving(true)
            const { error } = await supabase.from('school_profiles').upsert({
                id: user?.id as string,
                avatar_url: avatar_url,
                hourly_rate: hourlyRate,
                location: schoolLocation,
                grade_level: gradeLevel,
                school_link: schoolLinks,
                updated_at: new Date().toISOString(),
            })
         if (error) {
        setError(`${error.message}`)
    
  }
      setSaving(false)
    }
   

    useEffect(() => {
     
      checkUser()
    }, [])

  return (
      <div className="flex h-auto items-center justify-center mt-5 md:mt-0">
        <motion.button className = "mx-3 md:mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
          <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
        </motion.button>
        <div className="flex w-[65vw] flex-col rounded-lg border-3 border-[var(--dark-maroon)] bg-white p-8 opacity-90 shadow-lg">
          <div className="flex flex-col w-full h-full items-center">
            <Image
              src={iconImages.schoolRed.src}
              alt={iconImages.schoolRed.alt}
              width={60}
              height={60}
            />
            <motion.h1 className="font-medium text-[25px] text-[var(--dark-maroon)] my-3" 
                            initial = {{opacity: 0, x: 5}} 
                            animate = {{opacity: 100, x: -5}}
                            transition={{duration: 2}}>
                  Build Your Profile.
              </motion.h1>

            <Avatar
                  uid={user?.id ?? null}
                  url={avatar_url}
                  size={150}
                  onUpload={(url) => {
                      setAvatarUrl(url)
                  }}
              />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            
          
            <div className='flex-1 flex flex-col'>
                <label htmlFor = "schoolLinks" className='font-semibold mb-1'>
                Website
                </label>
                <input
                id = "schoolLinks"
                type = "text"
                value= {schoolLinks}
                placeholder= { isMobile ? "enter a website URL" : "Enter your school website or other links"}
                onChange={(e) => (setSchoolLinks(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border px-3 py-2 mb-1'
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "rate" className='font-semibold mb-1'>
                Hourly Rate
                </label>
                <input
                id = "rate"
                type = "text"
                value= {hourlyRate}
                placeholder= { isMobile ? "ex: $19/hr" : "Enter your hourly rate ex: $19/hr"}
                onChange={(e) => (setHourlyRate(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border px-3 py-2 mb-1'
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "location" className='font-semibold mb-1'>
                Location
                </label>
                <input
                id = "location"
                type = "text"
                value= {schoolLocation}
                placeholder= {isMobile ? "ex: Dallas, Texas" : "Enter your city ex: Dallas, Texas"}
                onChange={(e) => (setSchoolLocation(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border px-3 py-2 mb-1'
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "gradeLevel" className='font-semibold mb-1'>
                Grade Level
                </label>
                <input
                id = "gradeLevel"
                type = "text"
                value= {gradeLevel}
                placeholder= {isMobile ? "ex: K-8" : "Enter the range of grades taught ex: K-8"}
                onChange={(e) => (setGradeLevel(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border px-3 py-2 '
              ></input>
          </div>
          </div>
            <motion.button
              whileHover={{backgroundColor: "var(--dark-maroon)"}}
              transition={{duration: .8}}
              className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[180px] h-[50px] p-[5px] mt-10">
                  <div 
                      className="text-[var(--dark-maroon)] group-hover:text-white text-[20px]"
                      onClick={() => {updateSchoolProfile()}}>{!saving ? "Save Changes" : "Saving..."}</div>
            </motion.button>
              <div className='text-[var(--deep-red)] text-md mt-3'>
                {error}
            </div>
          </div>
        </div>
      <motion.button className = "mx-3 md:mx-5" onClick={onNext} whileHover={{y: -2, scale: 1.2}}>
          <Image src = {iconImages.rightArrowRed.src} alt = {iconImages.rightArrowRed.alt} width={40} height={40}/>
      </motion.button>
      </div>
  );
}
