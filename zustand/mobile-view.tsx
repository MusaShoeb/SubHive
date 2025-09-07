
import { create } from "zustand";

type State = {
  isMobile: boolean
};

type Action = {
  updateIsMobile: (isMobile: State["isMobile"]) => void;
};

export const isMobileStore = create<State & Action>((set) => ({
  // --- State ---
 isMobile: false,

  // --- Actions ---
  updateIsMobile: (isMobile) => set(() => ({ isMobile })),
}));
