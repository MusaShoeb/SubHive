"use client";

import { supabase } from "@/supabase/client-supabase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {


  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      console.log("Logged out successfully");
      router.push('/')
    }
  };


  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">This is the profile page</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
