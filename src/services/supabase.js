import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gotfdtzikrdymubuupdm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdGZkdHppa3JkeW11YnV1cGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MjU2NDMsImV4cCI6MjA1NzAwMTY0M30._KuJLe7qkxqj-QKXQqNy4vSfnKjLXCP-kOJIiJx3FTA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
