"use client";

import CreateAccountFlow from "@/components/school-account-flow/create-account-flow";
import SelectAccount from "@/components/school-account-flow/select-account";
import { useState } from "react";

export default function AuthPage() {

  const [createAccount, setCreateAccount] = useState(true)

  return (
    <div>
         {createAccount? (
          <div className="flex flex-col items-center">
            <CreateAccountFlow></CreateAccountFlow>
            <div className="flex flex-row m-10 text-[19px]">
              <div className="mx-2"> Already Have an Account? </div>
              <div className="gradient-text font-medium hover:brightness-125">Login Here</div>
            </div>
          </div>
            ) : (<div></div>) }

  
    </div>

   
  )
}



 