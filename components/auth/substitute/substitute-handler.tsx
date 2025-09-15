
import { useState } from "react"

import SubstituteSignUp from "./sign-up"
import BuildSubstituteProfile from "./build-profile"
import SetSubstitutePreferences from "./set-preferences"

type SubstituteHandlerProps = {
    switchState: (newState: string) => void
}


export default function SubstituteHandler ({switchState} :SubstituteHandlerProps) {
    
    const MAX_STEPS = 3, MIN_STEPS = 1
    const [step, setStep] = useState(MIN_STEPS)

    const nextStep = () => { setStep((prev) => Math.min(prev + 1, MAX_STEPS)) }
    const prevStep = () => { (step === MIN_STEPS) ? switchState("default") : setStep((prev) => (prev - 1)) }

    return (
        <div className="flex flex-col h-[100vh] md:h-auto">
            {(step === 1) && <SubstituteSignUp onPrev = {prevStep} onNext={nextStep}/> }
            {(step === 2) && <BuildSubstituteProfile  onPrev = {prevStep} onNext={nextStep}/> }
            {(step === 3) && <SetSubstitutePreferences  onPrev = {prevStep} onNext={nextStep}/> }
        </div>
        
    )
}