import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import ProductGrid from "@/components/product-grid"
import { ArrowRight } from "lucide-react"
import EcosystemSection from "@/components/ecosystem-section"
import HeroSlider from "@/components/hero-slider"
import FeaturedCategories from "@/components/featured-categories"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Our Product Categories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our premium selection of natural and organic products
          </p>
          <FeaturedCategories />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-red-600">About Hearty You Products</h2>
              <p className="text-gray-700 mb-6">
                At Hearty You Products India Pvt Ltd, we are committed to bringing you the finest quality Red Chilli,
                Millets, and Spices sourced directly from farmers. Our products are natural, healthy, and sustainably
                produced.
              </p>
              <p className="text-gray-700 mb-6">
                We take pride in our rigorous quality control processes that ensure every product meets the highest
                standards before reaching you.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1470&auto=format&fit=crop"
                alt="About Hearty You Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Our Featured Products</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our premium selection of Red Chilli, Millets, and Spices that add flavor and nutrition to your
            meals
          </p>

          <Suspense fallback={<div className="text-center py-8">Loading featured products...</div>}>
            <ProductGrid featured={true} limit={5} />
          </Suspense>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ayhro Company Ecosystem */}
      <EcosystemSection />

      {/* Infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Our Infrastructure</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            State-of-the-art facilities ensuring quality at every step of production
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1470&auto=format&fit=crop"
                  alt="Processing Unit"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Processing Unit</h3>
              <p className="text-gray-600">
                Modern processing facilities with advanced technology for optimal product quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1472&auto=format&fit=crop"
                  alt="Quality Control"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Quality Control</h3>
              <p className="text-gray-600">
                Rigorous testing procedures to ensure every product meets our high standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop" 
                  alt="Packaging Unit" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">Packaging Unit</h3>
              <p className="text-gray-600">
                Hygienic packaging facilities that preserve freshness and extend shelf life.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/infrastructure">Explore Our Infrastructure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Quality?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products or place an order
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
