"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, MessageCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useSearchParams, useRouter } from "next/navigation"
import { redChilliProducts } from "@/data/red-chilli-products"
import DualInquiryButton from "@/components/dual-inquiry-button"

// Wrapper component to handle search params with Suspense
function ProductDetailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const productSlug = searchParams.get("product")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [filteredProducts, setFilteredProducts] = useState<any[]>(redChilliProducts)
  const varietyParam = searchParams.get("variety")

  useEffect(() => {
    if (productSlug) {
      const product = redChilliProducts.find((p) => p.slug === productSlug)
      setSelectedProduct(product || null)
    } else {
      setSelectedProduct(null)
    }

    // Filter products based on variety parameter
    if (varietyParam) {
      let filtered = [...redChilliProducts]
      
      // Handle different variety filters
      if (varietyParam.startsWith('byadgi')) {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes('byadgi') || 
          p.description.toLowerCase().includes('byadgi')
        )

        // Further filter for specific Byadgi varieties
        if (varietyParam === 'byadgi-2043-syngenta') {
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes('2043') || 
            p.description.toLowerCase().includes('2043')
          )
        } else if (varietyParam === 'byadgi-kaddi-kdl') {
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes('kaddi') || 
            p.description.toLowerCase().includes('kaddi')
          )
        } else if (varietyParam === 'byadgi-355') {
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes('355') || 
            p.description.toLowerCase().includes('355')
          )
        }
      } else if (varietyParam.startsWith('guntur')) {
        filtered = filtered.filter(p =>
          (
            (p.details && p.details.origin && p.details.origin.toLowerCase().includes('guntur')) ||
            p.name.toLowerCase().includes('334') ||
            p.name.toLowerCase().includes('teja') ||
            p.name.toLowerCase().includes('wrinkled') ||
            p.name.toLowerCase().includes('endo') ||
            p.name.toLowerCase().includes('flakes') ||
            p.name.toLowerCase().includes('seeds')
          ) && !p.name.toLowerCase().includes('byadgi')
        )

        // Further filter for specific Guntur varieties
        if (varietyParam === 'guntur-teja-s17') {
          filtered = filtered.filter(p =>
            p.name.toLowerCase().includes('teja') ||
            p.description.toLowerCase().includes('teja')
          )
        } else if (varietyParam === 'guntur-334-s4') {
          filtered = filtered.filter(p =>
            p.name.toLowerCase().includes('334') ||
            p.description.toLowerCase().includes('334')
          )
        } else if (varietyParam === 'guntur-sannam-s10') {
          filtered = filtered.filter(p =>
            p.name.toLowerCase().includes('sannam') ||
            p.description.toLowerCase().includes('sannam')
          )
        }
      }
      
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(redChilliProducts)
    }
  }, [productSlug, varietyParam])

  const viewProduct = (slug: string) => {
    router.push(`/products/red-chilli?product=${slug}`)
  }

  const backToListing = () => {
    router.push("/products/red-chilli")
  }

  // Product Detail View
  if (selectedProduct) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Back to Category */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" className="flex items-center text-red-600 hover:text-red-700" onClick={backToListing}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Red Chilli Products
          </Button>
        </div>

        {/* Product Details */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
                <Image 
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill 
                  className="object-cover"
                  priority
                />
                {(selectedProduct as any).featured ? (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                ) : null}
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">{selectedProduct.name}</h1>
                <p className="text-gray-700 text-lg mb-8">{selectedProduct.description}</p>

                <Tabs defaultValue="specifications" className="mb-8">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing & Packages</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="specifications" className="p-4 bg-gray-50 rounded-md mt-2">
                    {selectedProduct.specTable ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3">Specification</TableHead>
                            <TableHead>Details</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.entries(selectedProduct.specTable).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell className="font-medium">{key}</TableCell>
                              <TableCell>{String(value)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/3">Specification</TableHead>
                            <TableHead>Details</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedProduct.details && Object.entries(selectedProduct.details).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell className="font-medium">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                              </TableCell>
                              <TableCell>{String(value)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="features" className="p-4 bg-gray-50 rounded-md mt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Premium quality product from Hearty You</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Authentic flavor and rich color</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Sustainably sourced from trusted farmers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Rigorous quality control processes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Available in various packaging options</span>
                      </li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="benefits" className="p-4 bg-gray-50 rounded-md mt-2">
                    <ul className="space-y-2">
                      {selectedProduct.benefits && selectedProduct.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="pricing" className="p-4 bg-gray-50 rounded-md mt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/3">Specification</TableHead>
                          <TableHead>Details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>

                        <TableRow>
                          <TableCell className="font-medium">Min.Order Quantity:</TableCell>
                          <TableCell>6.5 MT( 20 ft container )</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Supply Ability:</TableCell>
                          <TableCell>50 Metric Ton/Metric Tons per Month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Port:</TableCell>
                          <TableCell>Chennai</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Payment Terms:</TableCell>
                          <TableCell>T/T (50 % Advance Rest 50 % Scan copy of BL)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Packaging:</TableCell>
                          <TableCell>5kg, 10kg, 25kg, polly bags and gunny bags in neat packaging</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <DualInquiryButton
                      productName={selectedProduct.name}
                      productCategory="red-chilli"
                      size="lg"
                      fullWidth={true}
                    />
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-50"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-red-600">Related Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {redChilliProducts
                .filter(relatedProduct => relatedProduct.id !== selectedProduct.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="block relative h-48 cursor-pointer"
                      onClick={() => viewProduct(relatedProduct.slug)}
                    >
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 
                        className="font-semibold text-lg mb-2 hover:text-red-600 transition-colors cursor-pointer"
                        onClick={() => viewProduct(relatedProduct.slug)}
                      >
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() => viewProduct(relatedProduct.slug)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Product Listing View (Default)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.bstspices.com/assets/images/ps-s334-chilli-with-stem-8-1848x1125.png"
            alt="334/S4/SANNAM/S10 Red Chilli"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dry Red Chilli Products</h1>
          <p className="text-xl max-w-2xl">Premium quality, sustainably sourced Dry Red Chilli varieties</p>
        </div>
      </section>

      {/* Back to Products */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="flex items-center text-red-600 hover:text-red-700">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
        </Button>
      </div>

      {/* Product Grid */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600">
            {varietyParam ? (
              <>
                {varietyParam.includes('byadgi') && 'Byadgi '}
                {varietyParam.includes('guntur') && 'Guntur '}
                Red Chilli Products
              </>
            ) : (
              ' Dry Red Chilli Products'
            )}
          </h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {varietyParam ? (
              <>
                {varietyParam.includes('byadgi') && 'Explore our premium Byadgi chilli varieties known for their deep red color and exceptional color extraction properties. '}
                {varietyParam.includes('guntur') && 'Discover our premium Guntur chilli varieties known for their balanced heat and distinctive flavor profiles. '}
                Each variety is carefully selected and processed to ensure exceptional flavor, color, and quality.
              </>
            ) : (
              'Explore our premium quality  Dry red chilli products sourced directly from the finest growing regions of India. Each variety is carefully selected and processed to ensure exceptional flavor, color, and quality.'
            )}
          </p>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div 
                  className="relative h-64 cursor-pointer" 
                  onClick={() => viewProduct(product.slug)}
                >
                  <Image 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name || "Product"} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                      {product.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 
                    className="font-semibold text-xl mb-2 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                    onClick={() => viewProduct(product.slug)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => viewProduct(product.slug)}
                    >
                      View Details
                    </Button>
                    <div className="flex-none">
                      <DualInquiryButton
                        productName={product.name}
                        productCategory="red-chilli"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-xl font-medium mb-4">No products found for this variety</h3>
              <p className="text-gray-600 mb-6">We couldn't find any products matching your selected variety. Please try another variety or contact us for more information.</p>
              <Button
                onClick={() => router.push('/products/red-chilli')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                View All Red Chilli Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Main component with Suspense for CSR bailout
export default function RedChilliPage() {
  return (
    <Suspense fallback={
      <div className="p-8 flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-red-200 rounded-full mb-4"></div>
          <div className="h-4 w-48 bg-red-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-red-200 rounded"></div>
        </div>
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  )
}
