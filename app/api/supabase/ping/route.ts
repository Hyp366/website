import { NextResponse } from 'next/server';
import { pingSupabase } from '@/lib/supabase-ping';

/**
 * API route to manually trigger a Supabase ping
 * This can be used by admin or monitoring services
 * GET /api/supabase/ping
 */
export async function GET() {
  try {
    const result = await pingSupabase();
    
    return NextResponse.json(result, {
      status: result.success ? 200 : 500
    });
  } catch (error) {
    console.error('Error in ping API route:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, {
      status: 500
    });
  }
} 