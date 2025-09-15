"use client";

import { iconImages } from "@/data/icons";
import Image from "next/image";
import { motion } from 'motion/react'
import { substituteProfileStore } from "@/zustand/substitute-profile";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/supabase/client-supabase";
import Avatar from "../school/upload-avatar";
import { useRouter } from "next/navigation";
import { isMobileStore } from "@/zustand/mobile-view";

type BuildSubstituteProfileProps = {
    onNext: () => void
    onPrev: () => void
}

export default function BuildSubstituteProfile({onNext, onPrev} : BuildSubstituteProfileProps) {

  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const [teachingCertificate, setTeachingCertificate] = useState<string | null>(null)

  const gradeLevel = substituteProfileStore((state) => state.gradeLevel);
  const setGradeLevel = substituteProfileStore((state) => state.updateGradeLevel);

  const yearsExperience = substituteProfileStore((state) => state.yearsExperience);
  const setYearsExperience = substituteProfileStore((state) => state.updateYearsExperience);

  const highestEducation = substituteProfileStore((state) => state.highestEducation);
  const setHighestEducation = substituteProfileStore((state) => state.updateHighestEducation);

  const subjectsTaught = substituteProfileStore((state) => state.subjectsTaught);
  const setSubjectsTaught = substituteProfileStore((state) => state.updateSubjectsTaught);

  const substituteLocation = substituteProfileStore((state) => state.substituteLocation);
  const setsubstituteLocation = substituteProfileStore((state) => state.updateSubstituteLocation);

  const hourlyRate = substituteProfileStore((state) => state.hourlyRate);
  const setHourlyRate = substituteProfileStore((state) => state.updateHourlyRate);

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
  
  const updatesubstituteProfile = async() => {

        setSaving(true)
            const { error } = await supabase.from('substitute_profiles').upsert({
                id: user?.id as string,
                avatar_url: avatar_url,
                hourly_rate: hourlyRate,
                location: substituteLocation,
                grade_level: gradeLevel,
                years_experience:yearsExperience,
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
      <div className="flex h-auto items-center justify-center mt-5 mb-10 md:mt-5">
        <motion.button className = "mx-3 md:mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
          <Image src = {iconImages.leftArrowGreen.src} alt = {iconImages.leftArrowGreen.alt} width={40} height={40}/>
        </motion.button>
        <div className="flex w-[65vw] flex-col rounded-lg border-3 border-[var(--lake-green)] bg-white p-8 opacity-90 shadow-lg">
          <div className="flex flex-col w-full h-full items-center">
            <Image
              src={iconImages.buildSubGreen.src}
              alt={iconImages.buildSubGreen.alt}
              width={isMobile? 60 : 80}
              height={isMobile? 60 : 80}
            />
            <motion.h1 className="font-medium text-[25px] text-[var(--lake-green)] my-3" 
                            initial = {{opacity: 0, x: 5}} 
                            animate = {{opacity: 100, x: -5}}
                            transition={{duration: 2}}>
                  Build Your Profile.
              </motion.h1>

            <div className="flex flex-col justify-center md:w-full md:flex-row md:gap-x-10">
                 <Avatar
                  uid={user?.id ?? null}
                  url={avatar_url}
                  size={150}
                  label="Upload Profile Picture"
                  color="var(--jungle-green)"
                  onUpload={(url) => {
                      setAvatarUrl(url)
                  }}
              />

                <Avatar
                  uid={user?.id ?? null}
                  url={avatar_url}
                  size={150}
                  label="Teaching Certificate"
                  color="var(--jungle-green)"
                  onUpload={(url) => {
                      setAvatarUrl(url)
                  }}
              />
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            
          
           

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "rate" className='font-semibold mb-1 text-[var(--jungle-green)] '>
                Hourly Rate
                </label>
                <input
                id = "rate"
                type = "text"
                value= {hourlyRate}
                placeholder= { isMobile ? "ex: $19/hr" : "Enter your hourly rate ex: $19/hr"}
                onChange={(e) => (setHourlyRate(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 mb-1'
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "location" className='font-semibold mb-1 text-[var(--jungle-green)]'>
                Location
                </label>
                <input
                id = "location"
                type = "text"
                value= {substituteLocation}
                placeholder= {isMobile ? "ex: Dallas, Texas" : "Enter your city ex: Dallas, Texas"}
                onChange={(e) => (setsubstituteLocation(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 mb-1'
              ></input>
          </div>

          

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "" className='font-semibold mb-1 text-[var(--jungle-green)]'>
                Subjects Taught
                </label>
                <input
                id = "subjectsTaught"
                type = "text"
                value= {subjectsTaught}
                placeholder= {isMobile ? "ex: Math, English" : "Enter subjects you've covered ex: Math, English"}
                onChange={(e) => (setSubjectsTaught(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 '
              ></input>
          </div>

           <div className='flex-1 flex flex-col'>
                <label htmlFor = "yearsExperience" className='font-semibold mb-1 text-[var(--jungle-green)]'>
                Years Taught
                </label>
                <input
                id = "yearsExperience"
                type = "text"
                value= {yearsExperience}
                placeholder= { isMobile ? "Enter years of teaching exp." : "How many years of professional teaching experience?"}
                onChange={(e) => (setYearsExperience(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 mb-1'
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "gradeLevel" className='font-semibold mb-1 text-[var(--jungle-green)]'>
                Grade Level
                </label>
                <input
                id = "gradeLevel"
                type = "text"
                value= {gradeLevel}
                placeholder= {isMobile ? "ex: K-8" : "Enter the range of grades taught ex: K-8"}
                onChange={(e) => (setGradeLevel(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 '
              ></input>
          </div>

            <div className='flex-1 flex flex-col'>
                <label htmlFor = "highestEducation" className='font-semibold mb-1 text-[var(--jungle-green)]'>
                  Highest Education Received
                </label>
                <input
                id = "highestEducation"
                type = "text"
                value= {highestEducation}
                placeholder= {isMobile ? "ex: K-8" : "Enter the range of grades taught ex: K-8"}
                onChange={(e) => (setHighestEducation(e.currentTarget.value))}
                className='w-[50vw] md:w-[28vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 '
              ></input>
          </div>


          </div>
            <motion.button
              whileHover={{backgroundColor: "var(--lake-green)"}}
              transition={{duration: .8}}
              className = "group rounded-xl border-2 border-[var(--lake-green)] flex justify-center items-center w-[180px] h-[50px] p-[5px] mt-10">
                  <div 
                      className="text-[var(--lake-green)] group-hover:text-white text-[20px]"
                      onClick={() => {updatesubstituteProfile()}}>{!saving ? "Save Changes" : "Saving..."}</div>
            </motion.button>
              <div className='text-[var(--deep-red)] text-md mt-3'>
                {error}
            </div>
          </div>
        </div>
      <motion.button className = "mx-3 md:mx-5" onClick={onNext} whileHover={{y: -2, scale: 1.2}}>
          <Image src = {iconImages.rightArrowGreen.src} alt = {iconImages.rightArrowGreen.alt} width={40} height={40}/>
      </motion.button>
      </div>
  );
}
