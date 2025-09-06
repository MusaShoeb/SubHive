"use client";

import SelectAccount from "@/components/auth/default/select-account";
import LoginPage from "@/components/auth/login/login";
import SchoolHandler from "@/components/auth/school/school-handler";

import { useState } from "react";

export default function AuthPage() {
  const authStates = {
    default: "default",
    school: "school",
    substitute: "substitute",
    login: "login",
  };

  const [currentState, setCurrentState] = useState(authStates.default);

 const handleStateSwitch = (newState: string) => {
    setCurrentState(newState);
    console.log(`Switched State:${newState}`)
  };

  const stateToComponent = () => {
      switch (currentState) {
        case authStates.school:
          return <SchoolHandler switchState={handleStateSwitch}/>
        case authStates.substitute:
          return <SelectAccount switchState={handleStateSwitch}/>
        case authStates.login:
          return <LoginPage></LoginPage>
        case authStates.default:
        default:
          return <SelectAccount switchState={handleStateSwitch}/>
      }
  };
  return (
    <div>{stateToComponent()}</div>
  )
}
