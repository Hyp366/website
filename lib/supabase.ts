import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://dzzutqxpafigcqkyhgzu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6enV0cXhwYWZpZ2Nxa3loZ3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTUzNzIsImV4cCI6MjA2MjI5MTM3Mn0.EIJ2qpT-U0gXm4cGy_komKvSEib9Px8LoYiF-x6o1b0';

// Create a single supabase client for interacting with the database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 