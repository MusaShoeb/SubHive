import { useState } from "react"
import BuildSchoolProfile from "./build-profile";
import SetSchoolPreferences from "./set-preferences";
import SchoolSignUp from "./sign-up";


type SchoolHandlerProps = {
    switchState: (newState: string) => void
}


export default function SchoolHandler ({switchState} : SchoolHandlerProps) {
    

    const MAX_STEPS = 3, MIN_STEPS = 1
    const [step, setStep] = useState(MIN_STEPS)

    const nextStep = () => { setStep((prev) => Math.min(prev + 1, MAX_STEPS)) }
    const prevStep = () => { (step === MIN_STEPS) ? switchState("default") : setStep((prev) => (prev - 1)) }

    return (
        <div className="flex flex-col">
            {(step === 1) && <SchoolSignUp onPrev = {prevStep} onNext={nextStep}/> }
            {(step === 2) && <BuildSchoolProfile onPrev = {prevStep} onNext={nextStep}/> }
            {(step === 3) && <SetSchoolPreferences onPrev = {prevStep} onNext={nextStep}/> }
            <div className="w-full flex justify-center mt-4 text-[20px] font-medium text-[var(--dark-maroon)]">
                {`${step} / ${MAX_STEPS}`}
            </div>
        </div>
        
    )
}