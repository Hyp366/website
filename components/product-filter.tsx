"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const ProductFilter = () => {
  const [openCategory, setOpenCategory] = useState(true)
  const [openPackaging, setOpenPackaging] = useState(true)

  const categories = [
    { id: "red-chilli", label: "Red Chilli" },
    { id: "millets", label: "Millets" },
    { id: "spices", label: "Spices" },
  ]

  const packagingSizes = [
    { id: "100g", label: "100g" },
    { id: "250g", label: "250g" },
    { id: "500g", label: "500g" },
    { id: "1kg", label: "1kg" },
    { id: "bulk", label: "Bulk" },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Clear All Filters
        </Button>
      </div>

      {/* Categories */}
      <Collapsible open={openCategory} onOpenChange={setOpenCategory}>
        <div className="border-b pb-2 mb-2">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h3 className="text-lg font-medium">Categories</h3>
            <ChevronDown className={`h-5 w-5 transition-transform ${openCategory ? "transform rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-2 pb-4">
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id} className="cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Packaging Size */}
      <Collapsible open={openPackaging} onOpenChange={setOpenPackaging}>
        <div className="border-b pb-2 mb-2">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h3 className="text-lg font-medium">Packaging Size</h3>
            <ChevronDown className={`h-5 w-5 transition-transform ${openPackaging ? "transform rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-2 pb-4">
          <div className="space-y-2">
            {packagingSizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-2">
                <Checkbox id={size.id} />
                <Label htmlFor={size.id} className="cursor-pointer">
                  {size.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">Apply Filters</Button>
    </div>
  )
}

export default ProductFilter
