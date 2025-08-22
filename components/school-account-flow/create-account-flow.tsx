
import { useState } from "react";
import AccountForm from "./account-form";
import SelectAccount from "./select-account";
import { motion, AnimatePresence, easeInOut } from "motion/react"
import BuildSchoolProfile from "./build-profile";

export default function CreateAccountsteps () {

    const [steps, setSteps] = useState(1)
    const [direction, setDirection] = useState(1)

    const variants = {
        enter: (direction : number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
       center: () => ({
            x: 0,
            opacity: 1
        }),
        exit: (direction : number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })}
    
    const incrementSteps = () => {
        setDirection(1)
        setSteps((prev) => Math.min(prev + 1, 3))
    }

    const decrementsteps = () => {
        setDirection(-1)
        setSteps((prev) => Math.max(prev - 1, 1))
    }

    const fullsteps = [
       <SelectAccount key = "step1" Next={incrementSteps}/>,
       <BuildSchoolProfile></BuildSchoolProfile>,
       <AccountForm key = "step2" Next={incrementSteps} Previous={decrementsteps}/>
    ]
    return (
       <AnimatePresence initial = {false} custom={direction}>
            <motion.div
                key = {steps}
                variants={variants}
                custom={direction}
                initial = "enter"
                animate = "center"
                exit= "exit"
                transition={{duration: 1, ease: easeInOut}}>
            {fullsteps[steps - 1]}
            </motion.div>
       </AnimatePresence>
    )

}