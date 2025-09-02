

import { create } from "zustand";

type State = {
  schoolName: string;
  schoolLogo: string | null;
  hourlyRate: string;
  schoolLocation: string;
  schoolLinks: string;
  gradeLevel: string;
  specificPreferences: string[];
  subjectPreferences: string[];
  availabilityPreferences: string[];
  bio: string;
  email: string;
  password: string;
};

type Action = {
  updateSchoolName: (schoolName: State["schoolName"]) => void;
  updateSchoolLogo: (schoolLogo: State["schoolLogo"]) => void;
  updateHourlyRate: (hourlyRate: State["hourlyRate"]) => void;
  updateSchoolLocation: (schoolLocation: State["schoolLocation"]) => void;
  updateSchoolLinks: (schoolLinks: State["schoolLinks"]) => void;
  updateGradeLevel: (gradeLevel: State["gradeLevel"]) => void;
  updateSpecificPreferences: (specificPreferences: State["specificPreferences"]) => void;
  updateSubjectPreferences: (subjectPreferences: State["subjectPreferences"]) => void;
  updateAvailabilityPreferences: (availabilityPreferences: State["availabilityPreferences"]) => void;
  updateBio: (bio: State["bio"]) => void;
  updateEmail: (email: State["email"]) => void;
  updatePassword: (password: State["password"]) => void;
};

export const schoolProfileStore = create<State & Action>((set) => ({
  // --- State ---
  schoolName: "",
  schoolLogo: null,
  hourlyRate: "",
  schoolLocation: "",
  schoolLinks: "",
  gradeLevel: "",
  specificPreferences: [],
  subjectPreferences: [],
  availabilityPreferences: [],
  bio: "",
  email: "",
  password: "",

  // --- Actions ---
  updateSchoolName: (schoolName) => set(() => ({ schoolName })),
  updateSchoolLogo: (schoolLogo) => set(() => ({ schoolLogo })),
  updateHourlyRate: (hourlyRate) => set(() => ({ hourlyRate })),
  updateSchoolLocation: (schoolLocation) => set(() => ({ schoolLocation })),
  updateSchoolLinks: (schoolLinks) => set(() => ({ schoolLinks })),
  updateGradeLevel: (gradeLevel) => set(() => ({ gradeLevel })),
  updateSpecificPreferences: (specificPreferences) => set(() => ({ specificPreferences })),
  updateSubjectPreferences: (subjectPreferences) => set(() => ({ subjectPreferences })),
  updateAvailabilityPreferences: (availabilityPreferences) => set(() => ({ availabilityPreferences })),
  updateBio: (bio) => set(() => ({ bio })),
  updateEmail: (email) => set(() => ({ email })),
  updatePassword: (password) => set(() => ({ password })),
}));
