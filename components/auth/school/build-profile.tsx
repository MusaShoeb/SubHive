"use client";

import { iconImages } from "@/data/icons";
import Image from "next/image";
import { useState } from "react";
import { motion } from 'motion/react'

type BuildSchoolProfileProps = {
    onNext: () => void
    onPrev: () => void
}

export default function BuildSchoolProfile({onNext, onPrev} : BuildSchoolProfileProps) {

  const [schoolName, setSchoolName] = useState("");
  const [schoolLogo, setSchoolLogo] = useState<File | null>(null);
  const [additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
  const [schoolLinks, setSchoolLinks] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");

  type FormFieldProps = {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  function FormField({
    label,
    type,
    id,
    placeholder,
    value,
    onChange,
  }: FormFieldProps) {
    return (
      <div className="flex flex-col col-span-1">
        <label htmlFor={id} className="font-semibold mb-1">
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={type === "file" ? undefined : value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <motion.button className = "mx-5" onClick={onPrev} whileHover={{y: -2, scale: 1.2}}>
         <Image src = {iconImages.leftArrowRed.src} alt = {iconImages.leftArrowRed.alt} width={40} height={40}/>
      </motion.button>
      <div className="flex flex-col w-[900px] bg-white opacity-90 rounded-lg border-3 border-[var(--dark-maroon)] p-8 shadow-lg">
        <div className="flex flex-col w-full h-full items-center">
          <Image
            src={iconImages.schoolRed.src}
            alt={iconImages.schoolRed.alt}
            width={75}
            height={75}
          />
           <motion.h1 className="font-medium text-[29px] text-[var(--dark-maroon)] my-4" 
                           initial = {{opacity: 0, x: 5}} 
                           animate = {{opacity: 100, x: -5}}
                           transition={{duration: 2}}>
                 Build Your Profile.
            </motion.h1>

          <form className="grid grid-cols-2 gap-6 w-full mt-8">
            <FormField
              label="School Name"
              id="schoolName"
              value={schoolName}
              placeholder="Enter your school name"
              type="text"
              onChange={(e) => setSchoolName(e.target.value)}
            />

            <div className="flex flex-col col-span-1">
              <label htmlFor="schoolLogo" className="font-semibold mb-1">
                School Logo
              </label>
              <input
                id="schoolLogo"
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSchoolLogo(e.target.files[0]);
                  }
                }}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            <FormField
              label="Rate"
              id="rate"
              value={rate}
              placeholder="Enter hourly or daily rate"
              type="text"
              onChange={(e) => setRate(e.target.value)}
            />

            <div className="flex flex-col col-span-1">
              <label
                htmlFor="additionalPhotos"
                className="font-semibold mb-1"
              >
                Additional School Photos
              </label>
              <input
                id="additionalPhotos"
                type="file"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    setAdditionalPhotos(Array.from(e.target.files));
                  }
                }}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            <FormField
              label="School Links"
              id="schoolLinks"
              value={schoolLinks}
              placeholder="Enter any school links"
              type="text"
              onChange={(e) => setSchoolLinks(e.target.value)}
            />

            <FormField
              label="Location"
              id="location"
              value={location}
              placeholder="Enter the city of your school"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
          </form>
        </div>
      </div>
     <motion.button className = "mx-5" onClick={onNext} whileHover={{y: -2, scale: 1.2}}>
        <Image src = {iconImages.rightArrowRed.src} alt = {iconImages.rightArrowRed.alt} width={40} height={40}/>
     </motion.button>
    </div>
  );
}
