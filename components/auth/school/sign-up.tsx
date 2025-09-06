
import { motion } from 'motion/react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { useEffect, useState } from 'react'
import { createSchoolAccount } from '@/supabase/services-supabase'
import { schoolProfileStore } from '@/zustand/school-profile'
import { supabase } from '@/supabase/client-supabase'
import { User } from '@supabase/supabase-js'
import { userStore } from '@/zustand/current-user'

type schoolSignUpProps = {
    onPrev: () => void,
    onNext: () => void
}

export default function SchoolSignUp ({onPrev, onNext}: schoolSignUpProps) {

  const [nextDisabled, setNextDisabled] = useState(true)
  const [prevDisabled, setPrevDisabled] = useState(false)

  const [error, setError] = useState('')

  const email = schoolProfileStore(state => state.email)
  const setEmail = schoolProfileStore(state => state.updateEmail)

  const schoolName = schoolProfileStore(state => state.schoolName)
  const setSchoolName = schoolProfileStore(state => state.updateSchoolName)

  const password = schoolProfileStore((state) => state.password);
  const setPassword = schoolProfileStore((state) => state.updatePassword);

  const userGlobal = userStore(state => state.user)


  const handleSignup = async() => {
      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            'school_name': schoolName
          }
        }
      })

      if (error) {
        setError(`${error}`)
      }

      else if (data) {
        console.log(`Successful Account Creation for User: ${schoolName}`)
        setError('')
        setNextDisabled(false)
        setPrevDisabled(true)
      }
  }

  useEffect(() => {
      
       if (userGlobal) {
        setNextDisabled(false)
       }
    }, [])
    
    return (
        <div className="flex justify-center items-center h-[80vh]">
      <motion.button className = {`mx-5 ${prevDisabled ? "opacity-40" : "opacity-100"}`} 
                      onClick={onPrev} 
                      disabled = {prevDisabled} 
                      whileHover={{y: !prevDisabled?  -2: 0,  scale: !prevDisabled? 1.2: 1}}>
         <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
      </motion.button>
      <div className="flex flex-col w-[65vw] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
        <div className="flex flex-col w-full h-full items-center">
          <motion.img
            loading='lazy'
            src={iconImages.createSchoolRed.src}
            alt={iconImages.createSchoolRed.alt}
            width={75}
            height={75}
           initial = {{opacity: 0, x: 5}} 
           animate = {{opacity: 100, x: -5}}
          transition={{duration: 2}}
          />
           <motion.h1 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                Create your account.
            </motion.h1>

         <div className='flex flex-col w-full items-center'>

          <div className='flex-1 flex flex-col'>
              <label className='font-semibold mb-1'>
               School Name
              </label>
              <input
               type = "text"
               value={schoolName}
               placeholder='Enter the name of your school'
               onChange={(e) => (setSchoolName(e.currentTarget.value))}
               className='w-[50vw] md:w-100 rounded-lg border border-[var(--dark-maroon)] px-3 py-2 mb-2'
             ></input>
            </div>

            <div className='flex-1 flex flex-col'>
              <label className='font-semibold mb-1'>
               Email
              </label>
              <input
               type = "text"
               value={email}
               placeholder='Enter the email of your school'
               onChange={(e) => (setEmail(e.currentTarget.value))}
               className='w-[50vw] md:w-100 rounded-lg border border-[var(--dark-maroon)] px-3 py-2 mb-2'
             ></input>
            </div>

             <div className='flex-1 flex flex-col'>
              <label className='font-semibold mb-1 mt-1'>
               Password
              </label>
              <input
               type = "text"
               value={password}
               placeholder='Enter a strong password'
               onChange={(e) => (setPassword(e.currentTarget.value))}
               className='w-[50vw] md:w-100 rounded-lg border border-[var(--dark-maroon)] px-3 py-2'
             ></input>
            </div>

          <motion.button
            whileHover={{backgroundColor: "var(--dark-maroon)"}}
            transition={{duration: .4}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[180px] h-[50px] p-[5px] mt-10">
                <div 
                    className="text-[var(--dark-maroon)] group-hover:text-white text-[20px]"
                    onClick={() => {handleSignup()}}>Create Account</div>
          </motion.button>
          <div className='text-[var(--deep-red)] text-md mt-3'>
              {error}
          </div>
        </div>
        </div>
      </div>
       <motion.button className = {`mx-5 ${nextDisabled ? "opacity-40" : "opacity-100"}`} 
                      onClick={onNext} 
                      disabled = {nextDisabled} 
                      whileHover={{y: !nextDisabled?  -2: 0,  scale: !nextDisabled? 1.2: 1}}>
         <Image src = {iconImages.rightArrowRed.src} alt = {iconImages.rightArrowRed.alt} width={40} height={40}/>
      </motion.button>
    </div>
    )
}