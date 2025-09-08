import { iconImages } from "@/data/icons";
import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { easeIn, motion } from 'motion/react'
import { goldColors, greenColors } from "@/data/colors";
import { schoolProfileStore } from "@/zustand/school-profile";
import { supabase } from "@/supabase/client-supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { isMobileStore } from "@/zustand/mobile-view";

type SchoolPreferencesNavProps = {
    onNext: () => void
    onPrev: () => void
}

export default function SetSchoolPreferences ({onNext, onPrev} : SchoolPreferencesNavProps) {


    const router = useRouter()
    const isMobile = isMobileStore(state => state.isMobile)
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState('')
    const [saving, setSaving] = useState(false)

    const [bio, setBio] = useState('')
    const MAX_CHAR_COUNT = 200

     const setBioGlobal = schoolProfileStore((state) => state.updateBio)
     const setAvailabilityGlobal = schoolProfileStore((state) => state.updateAvailabilityPreferences)
     const setSpecificGlobal = schoolProfileStore((state) => state.updateSpecificPreferences)
     const setSubjectGlobal = schoolProfileStore((state) => state.updateSubjectPreferences)

    const specificTags = ["Female Teacher", "Lowest Rate", "Male Teacher"]
    const subjectTags = ["Math", "English", "Science", "Social Studies", "ELA", "Islamic Studies"]
    const availabilityTags = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Morning", "Afternoon"]

    const [selectedSpecificTags, setSelectedSpecificTags] = useState<string[]>([])
    const [selectedSubjectTags, setSelectedSubjectTags] = useState<string[]>([])
    const [selectedAvailabilityTags, setSelectedAvailabilityTags] = useState<string[]>([])

    const toggleTag = (tag: string, setSelected: Dispatch<SetStateAction<string[]>>) => {
    setSelected(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]              
    );
  };


    function preserveUserChanges  ()  {

        setBioGlobal(bio)
        setSpecificGlobal(selectedSpecificTags)
        setAvailabilityGlobal(selectedAvailabilityTags)
        setSubjectGlobal(selectedSubjectTags)
    }

     const updateSchoolProfile = async() => {
          setSaving(true)
              const { error } = await supabase.from('school_profiles').upsert({
                  id: user?.id as string,
                  specific_preferences: selectedSpecificTags,
                  subject_preferences: selectedSubjectTags,
                  availability_preferences: selectedAvailabilityTags,
                  bio: bio,
                  updated_at: new Date().toISOString(),
              })
           if (error) {
          setError(`${error.message}`)
          return false
      
    }
        return (true)
        setSaving(false)
      }
     
  const handleSaveChanges = async() => {
      preserveUserChanges()
      const success = await updateSchoolProfile();
      if (success) {
        router.push("/substitutes");
      }

  }
 
  const checkUser = async () => {
          const { data, error } = await supabase.auth.getUser()
          if (data?.user) {
            setUser(data.user)
          } else {
            setUser(null)
          }
        }
  
  
      useEffect(() => {
       
        checkUser()
      }, [])


    return (
         <div className="flex justify-center items-center h-auto">
            <motion.button className = "mx-3 md:mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
              <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
            </motion.button>
            <div className="flex flex-col w-[69vw] md:w-[900px] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
              <div className="flex flex-col w-full h-full items-center">
                <Image
                  src={iconImages.fileIconRed.src}
                  alt={iconImages.fileIconRed.alt}
                  width={65}
                  height={65}
                />
                <motion.h1 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                 Set your Preferences?
                </motion.h1>
                <div className= {`w-full flex justify-center`}>
                     {specificTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                        animate = {{backgroundColor: (selectedSpecificTags.includes(tag)) ? goldColors[index] : "", 
                                    scale: (selectedSpecificTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSelectedSpecificTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--dark-golden)] text-[15px] mx-1 my-1">
                            {tag}
                        </motion.div>)}
                </div>
                 <div className= {`w-full ${isMobile ? "grid grid-cols-3" : "flex justify-center "}`}>
                     {subjectTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                        animate = {{backgroundColor: (selectedSubjectTags.includes(tag)) ? greenColors[index % 3] : "", 
                                    scale: (selectedSubjectTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSelectedSubjectTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--forest-green)] text-[13px] md:text-[15px] mx-2 my-2">
                            {tag}
                        </motion.div>)}
                </div>
                 <div className= {`w-full ${isMobile ? "grid grid-cols-2" : "flex justify-center "}`}>
                     {availabilityTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                         animate = {{backgroundColor: (selectedAvailabilityTags.includes(tag)) ? goldColors[index % 3] : "", 
                                    scale: (selectedAvailabilityTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSelectedAvailabilityTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--dark-golden)] text-[11px] md:text-[15px] mx-2 my-1">
                            {tag}
                        </motion.div>)}
                </div>
               <motion.h2 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                 Include a Bio?
                </motion.h2>
                <textarea
                    className="flex w-[50vw] h-40 p-5 rounded-lg border-2 border-[var(--dark-maroon)] placeholder:text-center"
                    placeholder="Describe the traits and values you seek in a substitute teacher"
                    value = {bio}
                    onChange={(e) => e.target.value.length <= MAX_CHAR_COUNT ? setBio(e.target.value) : e}
                    />
                   {`${bio.length} / ${MAX_CHAR_COUNT}`}
              </div>
            </div>
           
            <motion.button className = "mx-3 md:mx-5" onClick={handleSaveChanges} whileHover={{y: -2, scale: 1.2}}>
              <Image src = {iconImages.checkRed.src} alt = {iconImages.checkRed.alt} width={45} height={45}/>
            </motion.button>
          </div>
         
    )
}