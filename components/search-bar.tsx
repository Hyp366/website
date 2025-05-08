"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Link from "next/link"
import { redChilliProducts } from "@/data/red-chilli-products"
import { milletsProducts } from "@/data/millets-products"
import { spicesProducts } from "@/data/spices-products"

interface SearchBarProps {
  onClose?: () => void
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Combine all products for search
  const allProducts = [...redChilliProducts, ...milletsProducts, ...spicesProducts]

  useEffect(() => {
    // Filter products based on search query
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase()
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      )
      setSuggestions(filtered.slice(0, 5)) // Limit to 5 suggestions
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setShowSuggestions(false)
      if (onClose) onClose()
    }
  }

  const handleSuggestionClick = (suggestion: any) => {
    router.push(`/products/${suggestion.category}/${suggestion.slug}`)
    setShowSuggestions(false)
    if (onClose) onClose()
  }

  return (
    <div className="relative" ref={suggestionsRef}>
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 py-2 w-full"
            onFocus={() => {
              if (suggestions.length > 0) setShowSuggestions(true)
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
        <Button type="submit" className="bg-red-600 hover:bg-red-700">
          Search
        </Button>
        {onClose && (
          <Button type="button" variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </form>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-80 overflow-auto">
          <ul className="py-1">
            {suggestions.map((suggestion) => (
              <li
                key={`${suggestion.category}-${suggestion.id}`}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="flex items-center">
                  <div className="text-red-600 mr-2">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{suggestion.name}</p>
                    <p className="text-sm text-gray-500 truncate">{suggestion.description}</p>
                  </div>
                </div>
              </li>
            ))}
            <li className="border-t border-gray-100 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link
                href={`/search?q=${encodeURIComponent(searchQuery)}`}
                className="flex items-center text-blue-600"
                onClick={() => {
                  setShowSuggestions(false)
                  if (onClose) onClose()
                }}
              >
                <Search className="h-4 w-4 mr-2" />
                <span>See all results for "{searchQuery}"</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
