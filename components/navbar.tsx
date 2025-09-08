"use client"

import { supabase } from "@/supabase/client-supabase"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { easeIn, motion } from "motion/react"
import { userStore } from "@/zustand/current-user"
import { useRouter } from "next/navigation"
import { isMobileStore } from "@/zustand/mobile-view"
import { iconImages } from "@/data/icons"

export default function NavBar() {

  const userGlobal = userStore(state => state.user)
  const setUserGlobal = userStore(state => state.updateUser)

  const MobileGlobal = isMobileStore(state => state.isMobile)
  const setMobileGlobal = isMobileStore(state => state.updateIsMobile)
 
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

    const checkMobile = () => {
      setMobileGlobal(window.innerWidth < 768);
      console.log(`isMobile from Navbar: ${MobileGlobal}`);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      subscription?.subscription.unsubscribe();
      window.removeEventListener("resize", checkMobile);
    }
  }, [])

  const NAV_ITEMS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/substitutes", label: "Substitutes", key: "substitutes" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/profile", label: "Profile", key: "profile" },
];

  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className={`flex items-center m-5 justify-between`}>
      <div className="title gradient-text font-medium text-[29px] ">Sub Hive</div>
        {!userGlobal ? (
          <motion.div
            whileHover={{backgroundColor: "var(--dark-maroon)"}}
            transition={{duration: .5}}
            className = "group rounded-xl border-2 border-[var(--dark-maroon)] flex justify-center items-center w-[120px] h-[40px] p-[5px]">
               <Link href = "/auth" className="group-hover:text-white text-[var(--dark-maroon)]">Get Started</Link>
          </motion.div>
        ) : (
           <div>
            {MobileGlobal ? (
              <>
               <Image
                src={iconImages.hamburgerRed.src}
                alt= {iconImages.hamburgerRed.alt}
                width={35}
                height={35}
                onClick={() => setMenuOpen((prev) => (!prev))}
               />
              </>
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
        )}
     {menuOpen && 
       <motion.div 
          className="flex flex-col justify-center text-[25px] gap-y-10 items-center fixed inset-0 bg-white opacity-90 h-full z-1"
          initial = {{height: 0}}
          animate = {{height: "100vh", transition: {duration: 0.5, ease: easeIn}}}
          >
          <button onClick={() => setMenuOpen(false)}>
            <motion.img
              loading="lazy"
              src={iconImages.closeOrange.src}
              alt={iconImages.closeOrange.alt}
              width = {50}
              height={50}
              whileHover={{scale: 1.2}}
              >
            </motion.img>
          </button>
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
      </motion.div>}
    </div>
  )
}
