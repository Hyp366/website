import supabase from './supabase';

/**
 * Function to ping Supabase to keep the connection active on free tier
 * It performs a simple lightweight query that won't consume much resources
 */
export async function pingSupabase() {
  try {
    // Perform a lightweight query to keep the connection active
    const { count } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });
    
    console.log('Supabase ping successful:', new Date().toISOString());
    return { success: true, timestamp: new Date().toISOString() };
  } catch (error) {
    console.error('Supabase ping failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Setup interval to ping Supabase once per day to keep free tier active
 * Only call this on server components or in app initialization
 */
export function setupDailyPing() {
  // Initial ping
  pingSupabase();
  
  // Set up daily ping (24 hours = 86,400,000 milliseconds)
  const DAILY_INTERVAL = 24 * 60 * 60 * 1000;
  
  // For development, you might want a shorter interval for testing
  const DEV_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours
  
  const interval = process.env.NODE_ENV === 'production' 
    ? DAILY_INTERVAL 
    : DEV_INTERVAL;
  
  const pingInterval = setInterval(pingSupabase, interval);
  
  // Return cleanup function to clear interval if needed
  return () => clearInterval(pingInterval);
} 