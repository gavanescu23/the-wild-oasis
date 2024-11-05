import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xlytycoriclpeshnzubc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhseXR5Y29yaWNscGVzaG56dWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0ODUxMTgsImV4cCI6MjA0NDA2MTExOH0.rlvbSn1ZY6pG3tUwxZMDESvxPdf1JCg1ib7RgsE17ug";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
