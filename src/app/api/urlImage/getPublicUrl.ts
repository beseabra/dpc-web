import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function getPublicUrl(imagePath: string, bucket: string) {
  const { data } = supabase.storage
    .from(bucket) 
    .getPublicUrl(imagePath);

  return data?.publicUrl;
}
