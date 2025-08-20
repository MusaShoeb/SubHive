"use client";

import { useState } from "react"
import { supabase } from "@/supabase/client-supabase"

export default function CreateAccount () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
  
    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       const {error } = await supabase.auth.signUp({
            email: email,
            password: password,
            })
        if (error) {
            setError(error.message)
        }
    }

    
    return (
        <>
         <form
        onSubmit={handleLogin} className="flex flex-col gap-y-5">
        <input
            type = "email"
            value = {email}
            placeholder="enter email"
            onChange={(e) => (setEmail(e.target.value))}
        ></input>
         <input
            type = "password"
            value = {password}
            placeholder="enter password"
            onChange={(e) => (setPassword(e.target.value))}
        ></input>
        <button type = "submit" className="w-60 bg-black text-white borded-lg"> Create Account</button>
    </form>
    <div>
        {error}
    </div>
        </>
   
   )
}