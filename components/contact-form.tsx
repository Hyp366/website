"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/services"
import { ContactFormData } from "@/lib/types"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    try {
      // Map form data to ContactFormData
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        // Include inquiry type in the subject if selected
        subject: formData.inquiryType 
          ? `${formData.subject} (${formData.inquiryType})`
          : formData.subject,
        message: formData.message,
      }

      // Submit to Supabase
      const result = await submitContactForm(contactData)

      if (result.success) {
        setSubmitSuccess(true)
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        })
      } else {
        throw new Error(result.error as string)
      }
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType">
            Inquiry Type <span className="text-red-600">*</span>
          </Label>
          <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
            <SelectTrigger>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product">Product Inquiry</SelectItem>
              <SelectItem value="order">Order Information</SelectItem>
              <SelectItem value="wholesale">Wholesale/Bulk Order</SelectItem>
              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span className="text-red-600">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your message"
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
          rows={5}
          required
        />
      </div>

      {submitSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitError && <div className="bg-red-50 text-red-700 p-4 rounded-md">{submitError}</div>}

      <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

export default ContactForm
