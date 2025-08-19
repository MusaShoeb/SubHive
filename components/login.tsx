"use client"

import { useState } from "react"
import { supabase } from "@/supabase/client-supabase"

type LoginProps = {
  onClick: () => void
}


export default function Login({ onClick }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else if (data) {
      setError("")
    }
  }

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="email"
          value={email}
          placeholder="enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={onClick}>Back to Create Account</button>

      <div>{error}</div>
    </>
  )
}
