# Supabase Integration for Hearty You Products

This document outlines how to set up and use the Supabase integration for contact forms and product inquiries.

## Tables Structure

The integration uses two main tables:

### 1. Contacts Table

Stores all submissions from the contact form:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

### 2. Product Inquiries Table

Stores all product-specific inquiries:

```sql
CREATE TABLE product_inquiries (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  customer_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  product_category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

## Setting Up Supabase

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Run the SQL migration script from `supabase/migrations/20240912_create_tables.sql`
4. Set up Row-Level Security (RLS) policies as specified in the migration file
5. Replace the Supabase URL and anonymous key in `lib/supabase.ts` with your own credentials

## Usage

### Contact Form

The Contact Form component is already integrated with Supabase and will send form submissions to the `contacts` table.

### Product Inquiries

Product inquiries can be triggered from:
- Product detail pages
- Product listing grids
- Search results

The ProductInquiryDialog component provides a consistent interface for inquiries and sends data to the `product_inquiries` table.

## Components

The following components have been created or modified:

1. `components/contact-form.tsx` - Updated to use Supabase for form submissions
2. `components/product-inquiry-form.tsx` - Form for product-specific inquiries
3. `components/product-inquiry-dialog.tsx` - Dialog component that contains the inquiry form
4. `components/product-grid.tsx` - Updated to use inquiry dialog instead of WhatsApp
5. `components/supabase-provider.tsx` - Provider component to initialize Supabase services

## Services

The `lib/services.ts` file contains the service functions for interacting with Supabase:

- `submitContactForm` - For submitting contact form data
- `submitProductInquiry` - For submitting product inquiries

## Keeping Free Tier Active

Supabase free tier projects may be paused after periods of inactivity. To prevent this, we've implemented:

1. **Automatic Daily Pings**: The application automatically pings Supabase once per day to keep your connection active. This is handled by the `lib/supabase-ping.ts` module.

2. **Manual Connection Check**: As an administrator, you can manually trigger a ping to verify connectivity from the admin page at `/admin/supabase`.

3. **API Endpoint**: A dedicated API endpoint at `/api/supabase/ping` is available for external monitoring services to trigger pings programmatically.

To ensure maximum uptime:
- Monitor the Supabase admin page periodically
- Consider setting up an external service (like UptimeRobot) to ping the `/api/supabase/ping` endpoint daily

## Accessing the Data

To access and manage the submitted data:

1. Log in to your Supabase dashboard
2. Go to Table Editor
3. Select either the `contacts` or `product_inquiries` table
4. Use the UI to view, filter, and export the data

Alternatively, you can build an admin dashboard using the Supabase JavaScript client with appropriate authentication. 