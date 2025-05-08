"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, MessageCircle } from "lucide-react"
import { submitProductInquiry } from "@/lib/services"
import { ProductInquiry } from "@/lib/types"

interface ProductInquiryFormProps {
  productName: string
  productCategory: string
  onClose: () => void
}

const ProductInquiryForm = ({ productName, productCategory, onClose }: ProductInquiryFormProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    message: `Hello, I'm interested in your ${productName}. Can you provide more information?`,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    try {
      // Create product inquiry data
      const inquiryData: ProductInquiry = {
        product_name: productName,
        customer_name: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        product_category: productCategory,
      }

      // Submit to Supabase
      const result = await submitProductInquiry(inquiryData)

      if (result.success) {
        setSubmitSuccess(true)
        // Reset message only, keep contact info
        setFormData(prev => ({
          ...prev,
          message: `Hello, I'm interested in your ${productName}. Can you provide more information?`
        }))
        // Auto close after success (optional)
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        throw new Error(result.error as string)
      }
    } catch (error) {
      setSubmitError("There was an error submitting your inquiry. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Inquire About {productName}</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {submitSuccess ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
          Thank you for your inquiry! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customerName">
              Your Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-600">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              required
            />
          </div>

          {submitError && <div className="bg-red-50 text-red-700 p-4 rounded-md">{submitError}</div>}

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Inquiry
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ProductInquiryForm 