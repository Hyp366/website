import supabase from './supabase';
import { ContactFormData, ProductInquiry } from './types';

/**
 * Submit a contact form to Supabase
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([formData]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

/**
 * Submit a product inquiry to Supabase
 */
export async function submitProductInquiry(inquiry: ProductInquiry) {
  try {
    const { data, error } = await supabase
      .from('product_inquiries')
      .insert([inquiry]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting product inquiry:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
} 