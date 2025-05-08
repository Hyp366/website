"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [currentQuery, setCurrentQuery] = useState(initialQuery)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentQuery(searchQuery)
  }

  useEffect(() => {
    setSearchQuery(initialQuery)
    setCurrentQuery(initialQuery)
  }, [initialQuery])

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-red-600">Search Results</h1>

        <form onSubmit={handleSearch} className="flex items-center gap-2 mb-8">
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

        {currentQuery ? (
          <>
            <h2 className="text-xl font-semibold mb-6">
              Search results for: <span className="text-red-600">"{currentQuery}"</span>
            </h2>
            <ProductGrid searchQuery={currentQuery} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Enter a search term to find products.</p>
          </div>
        )}
      </div>
    </div>
  )
}
