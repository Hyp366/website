"use client"

import { useEffect } from 'react'
import { setupDailyPing } from '@/lib/supabase-ping'

interface SupabaseProviderProps {
  children: React.ReactNode
}

/**
 * Component that initializes Supabase-related services
 * This includes the ping service to keep free tier active
 */
export default function SupabaseProvider({ children }: SupabaseProviderProps) {
  useEffect(() => {
    // Set up the daily ping to keep Supabase active
    const cleanupPing = setupDailyPing();
    
    // Clean up on component unmount
    return () => {
      cleanupPing();
    }
  }, []);

  // Render children without any additional wrapper
  return <>{children}</>;
} 