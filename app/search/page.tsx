"use client"

import type React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown } from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Content component that uses useSearchParams
function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [currentQuery, setCurrentQuery] = useState(initialQuery)
  const [sortOrder, setSortOrder] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)
  const [resultsCount, setResultsCount] = useState(0)
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const params = new URLSearchParams()
      params.set("q", searchQuery.trim())
      if (sortOrder !== "relevance") {
        params.set("sort", sortOrder)
      }
      router.push(`/search?${params.toString()}`)
      setCurrentQuery(searchQuery.trim())
    }
  }
  
  const handleSortChange = (value: string) => {
    setSortOrder(value)
    
    // Update URL with new sort order
    const params = new URLSearchParams(searchParams.toString())
    if (value !== "relevance") {
      params.set("sort", value)
    } else {
      params.delete("sort")
    }
    router.push(`/search?${params.toString()}`)
  }
  
  // Update local state when URL params change
  useEffect(() => {
    setSearchQuery(initialQuery)
    setCurrentQuery(initialQuery)
    setSortOrder(searchParams.get("sort") || "relevance")
  }, [initialQuery, searchParams])

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-red-600">Search Results</h1>
          
          {resultsCount > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="px-3 py-1 font-normal">
                {resultsCount} {resultsCount === 1 ? 'result' : 'results'} found
              </Badge>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select value={sortOrder} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[150px] h-9">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="nameAsc">Name (A-Z)</SelectItem>
                    <SelectItem value="nameDesc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Search & Filters */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-2 w-full"
                />
              </div>
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Search
              </Button>
            </form>
            
            {/* Mobile filters toggle */}
            <div className="md:hidden mb-6">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full flex justify-between items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  <span>Filters</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>
            </div>
            
            {/* Filters - visible on desktop or when toggled on mobile */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Collapsible defaultOpen={true}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                    <h3 className="text-lg font-medium">Product Categories</h3>
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pt-2">
                    <Button 
                      variant="ghost" 
                      className="justify-start pl-2 hover:text-red-600 w-full"
                      onClick={() => router.push("/products/red-chilli")}
                    >
                      Red Chilli
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start pl-2 hover:text-red-600 w-full"
                      onClick={() => router.push("/products/millets")}
                    >
                      Millets
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start pl-2 hover:text-red-600 w-full"
                      onClick={() => router.push("/products/spices")}
                    >
                      Spices
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start pl-2 hover:text-red-600 w-full"
                      onClick={() => router.push("/products/herbal-fruit-powders")}
                    >
                      Herbal & Fruit Powders
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start pl-2 hover:text-red-600 w-full"
                      onClick={() => router.push("/products/indian-pulses")}
                    >
                      Indian Pulses
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
          
          {/* Right side - Results */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            {currentQuery ? (
              <>
                <h2 className="text-xl font-semibold mb-6">
                  {resultsCount > 0 ? (
                    <>Search results for: <span className="text-red-600">"{currentQuery}"</span></>
                  ) : (
                    <>No results found for: <span className="text-red-600">"{currentQuery}"</span></>
                  )}
                </h2>
                <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse"></div>
                  ))}
                </div>}>
                  <ProductGrid 
                    searchQuery={currentQuery} 
                    sortOrder={sortOrder} 
                    onResultsCount={setResultsCount}
                  />
                </Suspense>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Enter a search term to find products.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main export with Suspense for the entire page
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <div className="h-10 w-full bg-gray-200 rounded mb-6"></div>
                <div className="h-40 w-full bg-gray-200 rounded"></div>
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                <div className="h-6 w-64 bg-gray-200 rounded mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-200 rounded-xl h-64"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  )
}
