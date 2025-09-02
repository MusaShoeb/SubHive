"use client"

import { supabase } from "@/supabase/client-supabase"
import { User } from "@supabase/supabase-js"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { userStore } from "@/zustand/current-user"
import { useRouter } from "next/navigation"

export default function NavBar() {

  const userGlobal = userStore(state => state.user)
  const setUserGlobal = userStore(state => state.updateUser)
 
  const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        setUserGlobal(data.user)
      } else {
        setUserGlobal(null)
      }
    }

  useEffect(() => {
   
    checkUser()

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "SIGNED_IN") {
          checkUser()
        } else if (event === "SIGNED_OUT") {
          setUserGlobal(null)
        }
      }
    )

    return () => {
      subscription?.subscription.unsubscribe()
    }
  }, [])

  const NAV_ITEMS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/substitutes", label: "Substitutes", key: "substitutes" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/profile", label: "Profile", key: "profile" },
];

  const [activeTab, setActiveTab] = useState("home");

  const switchActiveTab = (tabToSwitch: string) => {
    setActiveTab(tabToSwitch);
  };

  return (
    <div className={`flex items-center m-5 justify-between`}>
      <div className="title gradient-text font-medium text-[29px] ">Sub Hive</div>
      <div className="flex">
        {!userGlobal ? (
          <motion.div
            whileHover={{backgroundColor: "var(--dark-maroon)"}}
            transition={{duration: .5}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[120px] h-[40px] p-[5px]">
               <Link href = "/auth" className="group-hover:text-white text-[var(--dark-maroon)]">Get Started</Link>
          </motion.div>
        ) : (
           <div>
            <nav className="text-[19px] mx-5 flex">
            {NAV_ITEMS.map((item) => (
                <Link
                  href={item.href}
                  key={item.key}
                  className="mx-2 font-medium"
                  onClick={() => {setActiveTab(item.key)}}>
                    <motion.div
                      className={`${activeTab === item.key ? "text-[var(--burnt-orange)]" : "text-[var(--dark-maroon)]"}`}
                      whileHover={{scale: 1.1}}>
                      {item.label}
                    </motion.div>
                </Link>
            ))}
          </nav>
          </div> 
          
        )}
      </div>
    </div>
  )
}
