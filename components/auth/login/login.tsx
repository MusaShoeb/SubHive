
import { motion } from 'motion/react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { useEffect, useState } from 'react'
import { createSchoolAccount } from '@/supabase/services-supabase'
import { schoolProfileStore } from '@/zustand/school-profile'
import { supabase } from '@/supabase/client-supabase'
import { User } from '@supabase/supabase-js'
import { userStore } from '@/zustand/current-user'
import { useRouter } from 'next/navigation'



export default function LoginPage () {

  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin = async() => {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        setError(`${error}`)
      }

      else if (data) {

        console.log(`Successful Login for User`)
        setError('')
        router.push('/substitutes')
      }
  }

    
    return (
        <div className="flex justify-center items-center h-[80vh]">
      <div className="flex flex-col w-[900px] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
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
                Welcome Back.
            </motion.h1>

         <div className='flex flex-col w-full items-center'>

          <div className='flex-1 flex flex-col'>
              <label htmlFor = "loginEmail" className='font-semibold mb-1'>
               Email
              </label>
              <input
               id = "loginEmail"
               type = "text"
               value={email}
               placeholder='Enter the name of your school or organization'
               onChange={(e) => (setEmail(e.currentTarget.value))}
               className='w-100 rounded-lg border border-[var(--dark-maroon)] px-3 py-2 mb-2'
             ></input>
            </div>

            <div className='flex-1 flex flex-col'>
              <label htmlFor = "loginPassword" className='font-semibold mb-1'>
               Password
              </label>
              <input
               id = "loginPassword"
               type = "text"
               value={password}
               placeholder='Enter the email of your school or organization'
               onChange={(e) => (setPassword(e.currentTarget.value))}
               className='w-100 rounded-lg border border-[var(--dark-maroon)] px-3 py-2 mb-2'
             ></input>
            </div>


          <motion.button
            whileHover={{backgroundColor: "var(--dark-maroon)"}}
            transition={{duration: .4}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[180px] h-[50px] p-[5px] mt-10">
                <div 
                    className="text-[var(--dark-maroon)] group-hover:text-white text-[20px]"
                    onClick={() => {handleLogin()}}>Login</div>
          </motion.button>
          <div className='text-[var(--deep-red)] text-md mt-3'>
              {error}
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}