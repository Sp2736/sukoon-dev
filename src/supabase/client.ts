import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createClient() {
  // Ensure you add these variables to your .env.local file in sukoon-dev
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}