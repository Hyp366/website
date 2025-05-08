"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageCircle, MessageSquare, ChevronDown } from "lucide-react"
import ProductInquiryDialog from "./product-inquiry-dialog"

interface DualInquiryButtonProps {
  productName: string
  productCategory: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  fullWidth?: boolean
}

export default function DualInquiryButton({ 
  productName, 
  productCategory,
  className = "",
  size = "default",
  fullWidth = false
}: DualInquiryButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "919876543210" // Your WhatsApp business number
    const message = `Hello, I'm interested in your ${productName}. Can you provide more information?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // For grid view - simplified button with dropdown
  if (size === "sm") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`border-green-600 text-green-600 hover:bg-green-50 ${className}`}
            size="icon"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Inquiry Form</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleWhatsAppInquiry}>
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>WhatsApp</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  // For product detail view - full button with options
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            size={size}
            className={`bg-red-600 hover:bg-red-700 ${fullWidth ? 'w-full' : ''} ${className}`}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            <span>Enquire Now</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Fill Inquiry Form</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleWhatsAppInquiry}>
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>Contact via WhatsApp</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {isDialogOpen && (
        <ProductInquiryDialog
          productName={productName}
          productCategory={productCategory}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </>
  )
} 