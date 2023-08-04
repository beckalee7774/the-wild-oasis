import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xhtppslgeihxehpjjsxx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhodHBwc2xnZWloeGVocGpqc3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1NzQ5NTksImV4cCI6MjAwNjE1MDk1OX0.JxsDJvh2LL1xmpOwFMRq_et6_0YmgmhfRKuo_R-dYWw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
