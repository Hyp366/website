export interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface ProductInquiry {
  id?: number;
  product_name: string;
  customer_name: string;
  email: string;
  phone: string;
  message: string;
  product_category: string;
  created_at?: string;
} 