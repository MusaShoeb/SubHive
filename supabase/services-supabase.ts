import { supabase } from "./client-supabase";
import { schoolProfileStore } from "@/zustand/school-profile";



export async function getSubstitutes() {
  // TO DO: implement substitute fetching later
}

export async function createSchoolAccount(email:string, password: string) {


  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(`Error Creating Account: ${error.message}`);
  } else if (data) {
    console.log(`Account created Successfully!`);
  }
}

export async function checkSchoolData() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let metadata = user?.user_metadata;
  return metadata;
}
