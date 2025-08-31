import { iconImages } from "@/data/icons";
import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";
import { easeIn, motion } from 'motion/react'
import { goldColors, greenColors } from "@/data/colors";


type setSchoolPreferencesProps = {
    onNext: () => void
    onPrev: () => void
}

export default function SetSchoolPreferences ({onNext, onPrev} : setSchoolPreferencesProps) {


    const [bio, setBio] = useState("")
    const MAX_CHAR_COUNT = 50

    const specificTags = ["Female Teacher", "Lowest Daily Rate", "Male Teacher"]
    const subjectTags = ["Math", "English", "Science", "Social Studies", "ELA", "Islamic Studies"]
    const availabilityTags = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Morning", "Afternoon"]

    const [specificSelectedTags, setSpecificSelectedTags] = useState<string[]>([])
    const [subjectSelectedTags, setSubjectSelectedTags] = useState<string[]>([])
    const [availabilitySelectedTags, setAvailabilitySelectedTags] = useState<string[]>([])
    
    const toggleTag = (tag: string, setSelected: Dispatch<SetStateAction<string[]>>) => {
    setSelected(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]              
    );
  };



    return (
      <div className="flex justify-center items-center h-[80vh]">
            <motion.button className = "mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
              <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
            </motion.button>
            <div className="flex flex-col w-[900px] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
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
                <div className="flex w-full justify-center">
                     {specificTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                        animate = {{backgroundColor: (specificSelectedTags.includes(tag)) ? goldColors[index] : "", 
                                    scale: (specificSelectedTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSpecificSelectedTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--dark-golden)] text-[15px] mx-2 my-1">
                            {tag}
                        </motion.div>)}
                </div>
                 <div className="flex w-full justify-center">
                     {subjectTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                        animate = {{backgroundColor: (specificSelectedTags.includes(tag)) ? greenColors[index % 3] : "", 
                                    scale: (specificSelectedTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSpecificSelectedTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--forest-green)] text-[15px] mx-2 my-2">
                            {tag}
                        </motion.div>)}
                </div>
                 <div className="flex w-full items-evenly justify-center">
                     {availabilityTags.map( (tag, index) => 
                        <motion.div 
                        key = {index}
                         animate = {{backgroundColor: (specificSelectedTags.includes(tag)) ? goldColors[index % 3] : "", 
                                    scale: (specificSelectedTags.includes(tag)) ? 1.1 : 1}
                                    }
                        onClick={() => toggleTag(tag, setSpecificSelectedTags)}
                        className="flex items-center justify-center w-auto h-auto p-2 rounded-lg border-2 border-[var(--dark-golden)] text-[15px] mx-2 my-1">
                            {tag}
                        </motion.div>)}
                </div>
               <motion.h2 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                 Include a Bio?
                </motion.h2>
               <form>
                <input
                    className="w-150 h-40 rounded-lg border-2 border-[var(--dark-maroon)] text-center"
                    placeholder="Describe the traits and values you seek in a substitute teacher"
                    value = {bio}
                    onChange={(e) => e.target.value.length <= MAX_CHAR_COUNT ? setBio(e.target.value) : e}
                    />
               </form>
                   {`${bio.length} / ${MAX_CHAR_COUNT}`}
              </div>
            </div>
            <motion.button type = "submit" className = "mx-5" onClick={() => onNext} whileHover={{y: -2, scale: 1.2}}>
              <Image src = {iconImages.rightArrowRed.src} alt = {iconImages.rightArrowRed.alt} width={40} height={40}/>
            </motion.button>
          </div>
    )
}