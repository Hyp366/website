import type { Metadata } from "next"
import Image from "next/image"
import ProductGrid from "@/components/product-grid"
import ProductFilter from "@/components/product-filter"

export const metadata: Metadata = {
  title: "Products | Hearty You Products India Pvt Ltd",
  description:
    "Explore our premium Red Chilli, Millets, and Spices products. High-quality, organic, and sustainably sourced ingredients for your kitchen.",
  keywords: "red chilli products, organic millets, natural spices, Hearty You Products catalog",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Hearty You Products Catalog"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl">Discover our premium selection of Red Chilli, Millets, and Spices</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-1/4">
              <ProductFilter />
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
