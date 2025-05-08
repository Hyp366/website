-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create product inquiries table
CREATE TABLE IF NOT EXISTS product_inquiries (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  customer_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  product_category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create RLS policies
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts but not reads
CREATE POLICY "Allow anonymous inserts on contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on product_inquiries" ON product_inquiries
  FOR INSERT WITH CHECK (true);

-- Only allow service role to read
CREATE POLICY "Only service role can read contacts" ON contacts
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Only service role can read product_inquiries" ON product_inquiries
  FOR SELECT USING (auth.role() = 'service_role'); 