"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const ProductFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [openCategory, setOpenCategory] = useState(true)
  const [openPackaging, setOpenPackaging] = useState(true)

  // Get initial filter values from URL
  const initialCategoryFilters = searchParams.get("category")?.split(",") || []
  const initialPackagingFilters = searchParams.get("packaging")?.split(",") || []
  
  // Local state for filter selections
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategoryFilters)
  const [selectedPackaging, setSelectedPackaging] = useState<string[]>(initialPackagingFilters)

  // Update local state when URL params change
  useEffect(() => {
    setSelectedCategories(searchParams.get("category")?.split(",") || [])
    setSelectedPackaging(searchParams.get("packaging")?.split(",") || [])
  }, [searchParams])

  const categories = [
    { id: "red-chilli", label: "Red Chilli" },
    { id: "millets", label: "Millets" },
    { id: "spices", label: "Spices" },
    { id: "herbal-fruit-powders", label: "Herbal & Fruit Powders" },
    { id: "indian-pulses", label: "Indian Pulses" },
  ]

  const packagingSizes = [
    { id: "100g", label: "100g" },
    { id: "250g", label: "250g" },
    { id: "500g", label: "500g" },
    { id: "1kg", label: "1kg" },
    { id: "bulk", label: "Bulk" },
  ]

  // Create a new URLSearchParams instance and update the URL
  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      
      Object.entries(params).forEach(([name, value]) => {
        if (value === null) {
          newSearchParams.delete(name)
        } else if (Array.isArray(value)) {
          if (value.length > 0) {
            newSearchParams.set(name, value.join(","))
          } else {
            newSearchParams.delete(name)
          }
        } else {
          newSearchParams.set(name, value)
        }
      })
      
      return newSearchParams.toString()
    },
    [searchParams]
  )

  // Handle category filter changes (only updates local state)
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => {
        if (!prev.includes(categoryId)) {
          return [...prev, categoryId]
        }
        return prev
      })
    } else {
      setSelectedCategories(prev => prev.filter(id => id !== categoryId))
    }
  }

  // Handle packaging filter changes (only updates local state)
  const handlePackagingChange = (packagingId: string, checked: boolean) => {
    if (checked) {
      setSelectedPackaging(prev => {
        if (!prev.includes(packagingId)) {
          return [...prev, packagingId]
        }
        return prev
      })
    } else {
      setSelectedPackaging(prev => prev.filter(id => id !== packagingId))
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPackaging([])
    router.push('/products')
  }

  // Apply current filters (only now we update the URL)
  const applyFilters = () => {
    router.push(`/products?${createQueryString({ 
      category: selectedCategories.length ? selectedCategories : null, 
      packaging: selectedPackaging.length ? selectedPackaging : null 
    })}`)
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <Button variant="outline" size="sm" className="w-full justify-start" onClick={clearFilters}>
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
                <Checkbox 
                  id={category.id} 
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
                />
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
                <Checkbox 
                  id={size.id} 
                  checked={selectedPackaging.includes(size.id)}
                  onCheckedChange={(checked) => handlePackagingChange(size.id, checked === true)}
                />
                <Label htmlFor={size.id} className="cursor-pointer">
                  {size.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button className="w-full bg-red-600 hover:bg-red-700 mt-4" onClick={applyFilters}>Apply Filters</Button>
    </div>
  )
}

export default ProductFilter
