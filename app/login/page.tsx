"use client";

import CreateAccount from "@/components/create-account"
import Login from "@/components/login"
import { useState } from "react"

export default function LoginPage() {
  const [createAccount, setCreateAccount] = useState(true)

  return (
    <div className="flex flex-col">
      <div>
        {createAccount ? (
          <CreateAccount />
        ) : (
          <Login onClick={() => setCreateAccount(true)} />
        )}
      </div>

      <div>
        <button
          onClick={() => setCreateAccount(false)}
          className="bg-black text-white w-300"
        >
          Already have an account? Login!
        </button>  
      </div>
    </div>
  )
}
