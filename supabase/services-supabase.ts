import { supabase } from "./client-supabase";

export async function getFragrances( relevantNotes: string[]) {
     const {data, error} = await supabase
  .from('fragrance_table')
  .select(`Perfume, Brand, Top, Middle, Base, mainaccord1, mainaccord2, mainaccord3, mainaccord4, mainaccord5`)
  .gte('Rating Value', 4.5)
  .in('mainaccord1', relevantNotes)
  .limit(3);
  
  if (error) {
    console.error("❌ Error:", error);
    return;
  }

  return data;
}
