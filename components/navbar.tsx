"use client"

import { supabase } from "@/supabase/client-supabase"
import { User } from "@supabase/supabase-js"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function NavBar() {

  const [user, setUser] = useState<User | null>(null);

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

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "SIGNED_IN") {
          checkUser()
        } else if (event === "SIGNED_OUT") {
          setUser(null)
        }
      }
    )

    return () => {
      subscription?.subscription.unsubscribe()
    }
  }, [])

  return (
    <div className={`flex items-center m-5 ${!user ? 'justify-between' : 'justify-evenly'}`}>
      <div className="title gradient-text font-medium text-[30px] ">Sub Hive</div>

      <div className="flex">
        {!user ? (
          <motion.div
            whileHover={{backgroundColor: "var(--dark-maroon)"}}
            transition={{duration: .5}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[120px] h-[40px] p-[5px]">
               <Link href = "/auth" className="group-hover:text-white text-[var(--dark-maroon)]">Get Started</Link>
          </motion.div>
        ) : (
           <div>
            <nav className="text-[var(--text-gradient)] text-md mx-5">
            <Link href="/" className="mx-2">
              Home
            </Link>
            <Link href="/substitutes" className="mx-2">
              Substitutes
            </Link>
            <Link href="/pricing" className="mx-2">
              Pricing
            </Link>
            <Link href="/profile" className="mx-2">
              Profile
            </Link>
          </nav>
          <button
              onClick={() => supabase.auth.signOut()}
              className="mx-2 text-red-500"
            >
              Logout
          </button>
          </div> 
          
        )}
      </div>
    </div>
  )
}
