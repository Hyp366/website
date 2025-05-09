"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { redChilliProducts } from "@/data/red-chilli-products"
import { milletsProducts } from "@/data/millets-products"
import { spicesProducts } from "@/data/spices-products"
import { herbalFruitPowders } from "@/data/herbal-fruit-powders"
import { indianPulses } from "@/data/indian-pulses"
import { useRouter, useSearchParams } from "next/navigation"
import DualInquiryButton from "./dual-inquiry-button"

// Define the Product type for type safety
interface Product {
  id: number;
  name: string;
  category: string;
  slug: string;
  image?: string;
  description: string;
  featured?: boolean;
  details?: Record<string, any>;
  benefits?: string[];
}

interface ProductGridProps {
  featured?: boolean
  category?: string
  limit?: number
  searchQuery?: string
  sortOrder?: string
  onResultsCount?: (count: number) => void
}

const ProductGrid = ({ 
  featured = false, 
  category, 
  limit, 
  searchQuery = "",
  sortOrder = "relevance",
  onResultsCount
}: ProductGridProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])

  // Get filter values from URL - memoize to avoid recalculations
  const filters = useMemo(() => {
    return {
      categories: searchParams.get("category")?.split(",") || [],
      packaging: searchParams.get("packaging")?.split(",") || []
    }
  }, [searchParams])

  // Memoize all products to avoid recreating this array on every render
  const allProducts = useMemo(() => {
    return [
      ...(redChilliProducts || []), 
      ...(milletsProducts || []), 
      ...(spicesProducts || []),
      ...(herbalFruitPowders || []),
      ...(indianPulses || [])
    ] as Product[];
  }, []);

  // Score a product for search relevance
  const scoreProduct = useCallback((product: Product, query: string): number => {
    if (!query) return 0;
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    let score = 0;
    
    // Name matches are highest priority
    if (product.name.toLowerCase() === query.toLowerCase()) {
      score += 100; // Exact match to name
    } else if (product.name.toLowerCase().startsWith(query.toLowerCase())) {
      score += 50;  // Name starts with query
    } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
      score += 30;  // Name contains query
    }
    
    // Check for matches with individual terms in search query
    searchTerms.forEach(term => {
      if (product.name.toLowerCase().includes(term)) {
        score += 10;
      }
      if (product.description.toLowerCase().includes(term)) {
        score += 5;
      }
      if (product.category.toLowerCase().includes(term)) {
        score += 3;
      }
      
      // Check product details if available
      if (product.details) {
        Object.values(product.details).forEach((value: any) => {
          if (String(value).toLowerCase().includes(term)) {
            score += 2;
          }
        });
      }
      
      // Check benefits if available
      if (product.benefits) {
        product.benefits.forEach((benefit: string) => {
          if (benefit.toLowerCase().includes(term)) {
            score += 2;
          }
        });
      }
    });
    
    return score;
  }, []);

  useEffect(() => {
    try {
      // Start with the memoized product list
      let filteredProducts = [...allProducts];

      // Filter by featured if needed
      if (featured) {
        filteredProducts = filteredProducts.filter((product) => product.featured)
      }

      // Filter by category if provided as a prop
      if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category)
      }
      // Filter by categories from URL parameters
      else if (filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter((product) => 
          filters.categories.includes(product.category)
        )
      }

      // Filter by packaging if available in product details
      if (filters.packaging.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          // Check if the product has packaging information in details
          if (product.details && product.details.packingDetails) {
            const packingDetails = product.details.packingDetails.toLowerCase();
            // Check if any of the selected packaging sizes appear in the packaging details
            return filters.packaging.some(size => 
              packingDetails.includes(size.toLowerCase())
            );
          }
          return false;
        });
      }

      // Filter by search query if provided
      if (searchQuery) {
        // Score products for search relevance
        const scoredProducts = filteredProducts.map(product => ({
          product,
          score: scoreProduct(product, searchQuery)
        }));
        
        // Filter out products with zero score (no match)
        const matchingProducts = scoredProducts.filter(item => item.score > 0);
        
        // Sort based on the selected sort order
        if (sortOrder === "nameAsc") {
          matchingProducts.sort((a, b) => a.product.name.localeCompare(b.product.name));
        } else if (sortOrder === "nameDesc") {
          matchingProducts.sort((a, b) => b.product.name.localeCompare(a.product.name));
        } else {
          // Default sorting by relevance score
          matchingProducts.sort((a, b) => b.score - a.score);
        }
        
        // Extract just the products
        filteredProducts = matchingProducts.map(item => item.product);
      } else {
        // If no search query, apply regular sorting
        if (sortOrder === "nameAsc") {
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "nameDesc") {
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
      }

      // Apply limit if provided
      if (limit && limit > 0) {
        filteredProducts = filteredProducts.slice(0, limit)
      }

      // Report the count of results to the parent component if callback provided
      if (onResultsCount) {
        onResultsCount(filteredProducts.length);
      }

      setProducts(filteredProducts)
    } catch (error) {
      console.error("Error processing products:", error);
      setProducts([]);
      if (onResultsCount) {
        onResultsCount(0);
      }
    }
  }, [featured, category, limit, searchQuery, filters, allProducts, sortOrder, scoreProduct, onResultsCount])

  const viewProduct = (product: Product) => {
    if (product && product.category && product.slug) {
      router.push(`/products/${product.category}?product=${product.slug}`)
    }
  }

  if (!products || products.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        product && product.slug ? (
          <div
            key={`${product.category}-${product.slug}-${index}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div 
              className="relative h-64 cursor-pointer" 
              onClick={() => viewProduct(product)}
            >
              <Image 
                src={product.image || "/placeholder.svg"} 
                alt={product.name || "Product"} 
                fill 
                className="object-cover" 
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                  {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 
                className="font-semibold text-xl mb-2 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                onClick={() => viewProduct(product)}
              >
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex space-x-2">
                <Button 
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={() => viewProduct(product)}
                >
                  View Details
                </Button>
                <div className="flex-none">
                  <DualInquiryButton
                    productName={product.name}
                    productCategory={product.category}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null
      ))}
    </div>
  )
}

export default ProductGrid


