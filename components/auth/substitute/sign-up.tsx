import { motion } from 'motion/react'
import Image from 'next/image'
import { iconImages } from '@/data/icons'
import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/client-supabase'
import { User } from '@supabase/supabase-js'
import { userStore } from '@/zustand/current-user'
import { isMobileStore } from '@/zustand/mobile-view'
import { substituteProfileStore } from '@/zustand/substitute-profile'

type substituteSignUpProps = {
  onPrev: () => void,
  onNext: () => void,
}

export default function SubstituteSignUp({ onPrev, onNext}: substituteSignUpProps) {

  const [nextDisabled, setNextDisabled] = useState(true)
  const [prevDisabled, setPrevDisabled] = useState(false)
  const [error, setError] = useState('')

  const email = substituteProfileStore(state => state.email)
  const setEmail = substituteProfileStore(state => state.updateEmail)

  const substituteName = substituteProfileStore(state => state.substituteName)
  const setSubstituteName = substituteProfileStore(state => state.updateSubstituteName)

  const password = substituteProfileStore(state => state.password)
  const setPassword = substituteProfileStore(state => state.updatePassword)

  const userGlobal = userStore(state => state.user)
  const isMobile = isMobileStore(state => state.isMobile)

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          'full_name': substituteName,
          'account_type' : "sub"
        }
      }
    })

    if (error) {
      setError(`${error}`)
    } else if (data) {
      console.log(`Successful Account Creation for User: ${substituteName}`)
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
          src={iconImages.leftArrowGreen.src}
          alt={iconImages.leftArrowGreen.alt}
          width={40}
          height={40}
        />
      </motion.button>

      <div className="flex w-[65vw] mb-5 flex-col rounded-lg border-3 border-[var(--jungle-green)] bg-white p-8 opacity-90 shadow-lg">
        <div className="flex h-full w-full flex-col items-center">
          <motion.img
            loading="lazy"
            src={iconImages.createSubGreen.src}
            alt={iconImages.createSubGreen.alt}
            width={75}
            height={75}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 100, x: -5 }}
            transition={{ duration: 2 }}
          />
          <motion.h1
            className="my-4 text-[29px] font-medium text-[var(--jungle-green)]"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 100, x: -5 }}
            transition={{ duration: 2 }}
          >
            Create your account.
          </motion.h1>

          <div className="flex w-full flex-col items-center">
            <div className="flex flex-1 flex-col">
              <label htmlFor="createSubName" className="mb-1 font-semibold  text-[var(--jungle-green)]">
                School Name
              </label>
              <input
                id="createSubName"
                type="text"
                value={substituteName}
                placeholder={
                  isMobile
                    ? 'Enter your school name'
                    : 'Enter the name of your school or organization'
                }
                onChange={(e) => setSubstituteName(e.currentTarget.value)}
                className="mb-2 w-[50vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 md:w-100"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="createSubEmail" className="mb-1 font-semibold  text-[var(--jungle-green)]">
                Email
              </label>
              <input
                id="createSubEmail"
                type="text"
                value={email}
                placeholder={
                  isMobile
                    ? 'Enter your email'
                    : 'Enter the email of your school or organization'
                }
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="mb-2 w-[50vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 md:w-100"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label
                htmlFor="createSubPassword"
                className="mb-1 mt-1 font-semibold text-[var(--jungle-green)]"
              >
                Password
              </label>
              <input
                id="createSubPassword"
                type="text"
                value={password}
                placeholder="Enter a strong password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="w-[50vw] rounded-lg border border-[var(--jungle-green)] px-3 py-2 md:w-100"
              />
            </div>

            <motion.button
              whileHover={{ backgroundColor: "var(--jungle-green)" }}
              transition={{ duration: 0.4 }}
              className="group mt-10 flex h-[50px] w-[180px] items-center justify-center rounded-xl border-2 border-[var(--jungle-green)] p-[5px]"
            >
              <div
                className="text-[20px] text-[var(--jungle-green)] group-hover:text-white"
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
          src={iconImages.rightArrowGreen.src}
          alt={iconImages.rightArrowGreen.alt}
          width={40}
          height={40}
        />
      </motion.button>
    </div>
  )
}
