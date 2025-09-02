

import { create } from "zustand";
import { User } from "@supabase/supabase-js";

type State = {
  user: User | null
};

type Action = {
  updateUser: (user: State["user"]) => void;
};

export const userStore = create<State & Action>((set) => ({
  // --- State ---
  user: null,

  // --- Actions ---
  updateUser: (user) => set(() => ({ user })),
}));
