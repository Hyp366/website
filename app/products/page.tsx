import type { Metadata } from "next"
import Image from "next/image"
import ProductGrid from "@/components/product-grid"
import ProductFilter from "@/components/product-filter"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Products | Hearty You Products India Pvt Ltd",
  description:
    "Explore our extensive range of premium Red Chilli, Millets, Spices, Herbal & Fruit Powders, and Indian Pulses at Hearty You Products. Each product is organically grown, sustainably sourced, and crafted to elevate your kitchen and wellness routines with authentic flavors and nutrients.",
  keywords: "red chilli products, organic millets, natural spices, herbal powders, fruit powders, indian pulses, toor dal, masoor dal, moong dal, Hearty You Products catalog",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80" // Hands holding a plant
            alt="Hearty You Products Catalog"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl">Discover our premium selection of Red Chilli, Millets, Spices, Herbal & Fruit Powders, and Indian Pulses</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters removed */}
            {/* Products Grid */}
            <div className="w-full">
              <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse"></div>
                ))}
              </div>}>
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
