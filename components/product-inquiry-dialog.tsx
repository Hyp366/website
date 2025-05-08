"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import ProductInquiryForm from "./product-inquiry-form"

interface ProductInquiryDialogProps {
  productName: string
  productCategory: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const ProductInquiryDialog = ({ 
  productName, 
  productCategory, 
  isOpen,
  onOpenChange
}: ProductInquiryDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogTitle className="sr-only">Product Inquiry for {productName}</DialogTitle>
        <ProductInquiryForm 
          productName={productName} 
          productCategory={productCategory} 
          onClose={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  )
}

export default ProductInquiryDialog 