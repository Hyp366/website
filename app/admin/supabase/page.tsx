"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function SupabaseAdminPage() {
  const [pingStatus, setPingStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
    timestamp?: string;
  }>({
    loading: false
  });

  const handlePingSupabase = async () => {
    setPingStatus({ loading: true });
    
    try {
      const response = await fetch('/api/supabase/ping', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setPingStatus({
          loading: false,
          success: true,
          message: 'Supabase ping successful!',
          timestamp: data.timestamp
        });
      } else {
        setPingStatus({
          loading: false,
          success: false,
          message: data.error || 'Failed to ping Supabase',
          timestamp: data.timestamp
        });
      }
    } catch (error) {
      setPingStatus({
        loading: false,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Supabase Admin</h1>
      
      <Tabs defaultValue="ping" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="ping">Connection Manager</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Supabase Connection Manager</CardTitle>
              <CardDescription>
                Ping Supabase to keep your free tier active and verify connectivity
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  The system will automatically ping Supabase daily to keep your connection active, 
                  but you can also manually trigger a ping to verify connectivity.
                </p>
                
                {pingStatus.success !== undefined && (
                  <div className={`p-4 rounded-md ${pingStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex items-start">
                      {pingStatus.success ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-medium ${pingStatus.success ? 'text-green-700' : 'text-red-700'}`}>
                          {pingStatus.message}
                        </p>
                        {pingStatus.timestamp && (
                          <p className="text-sm text-gray-500 mt-1">
                            Timestamp: {new Date(pingStatus.timestamp).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={handlePingSupabase} 
                disabled={pingStatus.loading}
                className="bg-red-600 hover:bg-red-700"
              >
                {pingStatus.loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Pinging...
                  </>
                ) : (
                  'Ping Supabase'
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 