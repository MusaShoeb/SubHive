import { motion } from 'motion/react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { useEffect, useState } from 'react'
import { createSchoolAccount } from '@/supabase/services-supabase'
import { schoolProfileStore } from '@/zustand/school-profile'
import { supabase } from '@/supabase/client-supabase'
import { User } from '@supabase/supabase-js'
import { userStore } from '@/zustand/current-user'
import { isMobileStore } from '@/zustand/mobile-view'

type schoolSignUpProps = {
  onPrev: () => void,
  onNext: () => void,
}

export default function SchoolSignUp({ onPrev, onNext}: schoolSignUpProps) {
  const [nextDisabled, setNextDisabled] = useState(true)
  const [prevDisabled, setPrevDisabled] = useState(false)
  const [error, setError] = useState('')

  const email = schoolProfileStore(state => state.email)
  const setEmail = schoolProfileStore(state => state.updateEmail)

  const schoolName = schoolProfileStore(state => state.schoolName)
  const setSchoolName = schoolProfileStore(state => state.updateSchoolName)

  const password = schoolProfileStore(state => state.password)
  const setPassword = schoolProfileStore(state => state.updatePassword)

  const userGlobal = userStore(state => state.user)
  const isMobile = isMobileStore(state => state.isMobile)

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
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
    } else if (data) {
      console.log(`Successful Account Creation for School: ${schoolName}`)
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
      <div className="flex h-auto justify-center mt-10 md:mt-10">
      <motion.button
        className={`mx-3 ${prevDisabled ? "opacity-40" : "opacity-100"} md:mx-5`}
        onClick={onPrev}
        disabled={prevDisabled}
        whileHover={{ y: !prevDisabled ? -2 : 0, scale: !prevDisabled ? 1.2 : 1 }}
      >
        <Image
          src={iconImages.leftArrowRed.src}
          alt={iconImages.leftArrowRed.alt}
          width={40}
          height={40}
        />
      </motion.button>

      <div className="flex w-[65vw] mb-5 flex-col rounded-lg border-3 border-[var(--dark-maroon)] bg-white p-8 opacity-90 shadow-lg">
        <div className="flex h-full w-full flex-col items-center">
          <motion.img
            loading="lazy"
            src={iconImages.createSchoolRed.src}
            alt={iconImages.createSchoolRed.alt}
            width={75}
            height={75}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 100, x: -5 }}
            transition={{ duration: 2 }}
          />
          <motion.h1
            className="my-4 text-[29px] font-medium text-[var(--dark-maroon)]"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 100, x: -5 }}
            transition={{ duration: 2 }}
          >
            Create your account.
          </motion.h1>

          <div className="flex w-full flex-col items-center">
            <div className="flex flex-1 flex-col">
              <label htmlFor="createSchoolName" className="mb-1 font-semibold">
                School Name
              </label>
              <input
                id="createSchoolName"
                type="text"
                value={schoolName}
                placeholder={
                  isMobile
                    ? 'Enter your school name'
                    : 'Enter the name of your school or organization'
                }
                onChange={(e) => setSchoolName(e.currentTarget.value)}
                className="mb-2 w-[50vw] rounded-lg border border-[var(--dark-maroon)] px-3 py-2 md:w-100"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="createSchoolEmail" className="mb-1 font-semibold">
                Email
              </label>
              <input
                id="createSchoolEmail"
                type="text"
                value={email}
                placeholder={
                  isMobile
                    ? 'Enter your email'
                    : 'Enter the email of your school or organization'
                }
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="mb-2 w-[50vw] rounded-lg border border-[var(--dark-maroon)] px-3 py-2 md:w-100"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label
                htmlFor="createSchoolPassword"
                className="mb-1 mt-1 font-semibold"
              >
                Password
              </label>
              <input
                id="createSchoolPassword"
                type="text"
                value={password}
                placeholder="Enter a strong password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="w-[50vw] rounded-lg border border-[var(--dark-maroon)] px-3 py-2 md:w-100"
              />
            </div>

            <motion.button
              whileHover={{ backgroundColor: "var(--dark-maroon)" }}
              transition={{ duration: 0.4 }}
              className="group mt-10 flex h-[50px] w-[180px] items-center justify-center rounded-xl border-2 border-[var(--dark-maroon)] p-[5px]"
            >
              <div
                className="text-[20px] text-[var(--dark-maroon)] group-hover:text-white"
                onClick={() => handleSignup()}
              >
                Create Account
              </div>
            </motion.button>

            <div className="mt-3 text-md text-[var(--deep-red)]">
              {error}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        className={`mx-3 ${nextDisabled ? "opacity-40" : "opacity-100"} md:mx-5`}
        onClick={onNext}
        disabled={nextDisabled}
        whileHover={{ y: !nextDisabled ? -2 : 0, scale: !nextDisabled ? 1.2 : 1 }}
      >
        <Image
          src={iconImages.rightArrowRed.src}
          alt={iconImages.rightArrowRed.alt}
          width={40}
          height={40}
        />
      </motion.button>
    </div>
  )
}
