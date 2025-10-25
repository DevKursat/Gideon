import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://doyqnafbcomnmykpsalo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveXFuYWZiY29tbm15a3BzYWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDQzMzMsImV4cCI6MjA3NjIyMDMzM30.lIXvu71SOA2s1-9bu0Bn6scvXE70JTZcqD7MF_rEEt0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: 'gideon-auth-token',
    flowType: 'pkce'
  }
})
