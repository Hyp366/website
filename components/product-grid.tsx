"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { redChilliProducts } from "@/data/red-chilli-products"
import { milletsProducts } from "@/data/millets-products"
import { spicesProducts } from "@/data/spices-products"
import { useRouter } from "next/navigation"
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
}

const ProductGrid = ({ featured = false, category, limit, searchQuery = "" }: ProductGridProps) => {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    try {
      // Combine all product data
      let allProducts = [
        ...(redChilliProducts || []), 
        ...(milletsProducts || []), 
        ...(spicesProducts || [])
      ] as Product[];

      // Filter by featured if needed
      if (featured) {
        allProducts = allProducts.filter((product) => product.featured)
      }

      // Filter by category if provided
      if (category) {
        allProducts = allProducts.filter((product) => product.category === category)
      }

      // Filter by search query if provided
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        allProducts = allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query),
        )
      }

      // Apply limit if provided
      if (limit && limit > 0) {
        allProducts = allProducts.slice(0, limit)
      }

      setProducts(allProducts)
    } catch (error) {
      console.error("Error processing products:", error);
      setProducts([]);
    }
  }, [featured, category, limit, searchQuery])

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


