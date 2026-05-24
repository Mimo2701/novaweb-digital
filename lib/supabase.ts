import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wcvdcmivnamfxvwaulfe.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdmRjbWl2bmFtZnh2d2F1bGZlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTY0NTY4NywiZXhwIjoyMDk1MjIxNjg3fQ.p1UL2jz7m9-vsQsuWjrIFdS7jaPDs16DlIUsk7plqBA";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);