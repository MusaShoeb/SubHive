"use client"

import { supabase } from "@/supabase/client-supabase"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavBar() {

  const [user, setUser] = useState<any>(null)

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
    <div className="flex m-10">
      <div className="title text-lg">Sub Hive</div>

      <div>
        {!user ? (
          <Link href="/login">Get Started</Link>
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
