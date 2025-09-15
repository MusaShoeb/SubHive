

import { create } from "zustand";

type State = {
  substituteName: string;
  substitutePic: string | null;
  hourlyRate: string;
  substituteLocation: string;
  gradeLevel: string;
  highestEducation: string;
  yearsExperience: string;
  teachingCertificate: string | null;
  subjectsTaught: string;
  availabilityPreferences: string[];
  languages: string;
  bio: string;
  email: string;
  password: string;
};

type Action = {
  updateSubstituteName: (substituteName: State["substituteName"]) => void;
  updateSubstitutePic: (substitutePic: State["substitutePic"]) => void;
  updateHourlyRate: (hourlyRate: State["hourlyRate"]) => void;
  updateSubstituteLocation: (substituteLocation: State["substituteLocation"]) => void;
  updateGradeLevel: (gradeLevel: State["gradeLevel"]) => void;
  updateSubjectsTaught: (subjectsTaught: State["subjectsTaught"]) => void;
  updateHighestEducation: (highestEducation: State["highestEducation"]) => void;
  updateYearsExperience: (yearsExperience: State["yearsExperience"]) => void;
  updateTeachingCertificate: (teachingCertificate: State["teachingCertificate"]) => void;
  updateAvailabilityPreferences: (availabilityPreferences: State["availabilityPreferences"]) => void;
  updateLanguages: (password: State["languages"]) => void;
  updateBio: (bio: State["bio"]) => void;
  updateEmail: (email: State["email"]) => void;
  updatePassword: (password: State["password"]) => void;
};

export const substituteProfileStore = create<State & Action>((set) => ({
  // --- State ---
  substituteName: "",
  substitutePic: null,
  hourlyRate: "",
  substituteLocation: "",
  gradeLevel: "",
  subjectsTaught: "",
  availabilityPreferences: [],
  highestEducation: "",
  yearsExperience: "",
  teachingCertificate: "",
  languages: "",
  bio: "",
  email: "",
  password: "",

  // --- Actions ---
  updateSubstituteName: (substituteName) => set(() => ({ substituteName })),
  updateSubstitutePic: (substitutePic) => set(() => ({ substitutePic })),
  updateHourlyRate: (hourlyRate) => set(() => ({ hourlyRate })),
  updateSubstituteLocation: (substituteLocation) => set(() => ({ substituteLocation })),
  updateGradeLevel: (gradeLevel) => set(() => ({ gradeLevel })),
  updateSubjectsTaught: (subjectsTaught) => set(() => ({ subjectsTaught })),
  updateAvailabilityPreferences: (availabilityPreferences) => set(() => ({ availabilityPreferences })),
  updateHighestEducation: (highestEducation) => set(() => ({ highestEducation })),
  updateYearsExperience: (yearsExperience) => set(() => ({ yearsExperience })),
  updateTeachingCertificate: (teachingCertificate) => set(() => ({teachingCertificate})),
  updateLanguages: (languages) => set(() => ({ languages })),
  updateBio: (bio) => set(() => ({ bio })),
  updateEmail: (email) => set(() => ({ email })),
  updatePassword: (password) => set(() => ({ password })),
}));
