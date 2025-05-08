import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Infrastructure | Hearty You Products India Pvt Ltd",
  description:
    "Explore our state-of-the-art infrastructure for processing Red Chilli, Millets, and Spices. Quality control, processing, and packaging facilities.",
  keywords:
    "food processing infrastructure, red chilli processing, spice manufacturing facility, Hearty You infrastructure",
}

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Hearty You Infrastructure"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Infrastructure</h1>
          <p className="text-xl max-w-2xl">State-of-the-art facilities ensuring quality at every step</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-600">World-Class Facilities</h2>
              <p className="text-gray-700 mb-6">
                At Hearty You Products, we have invested in cutting-edge infrastructure to ensure that our Red Chilli,
                Millets, and Spices meet the highest standards of quality and safety.
              </p>
              <p className="text-gray-700 mb-6">
                Our facilities are designed to maintain the natural properties of our products while ensuring hygiene,
                efficiency, and sustainability throughout the production process.
              </p>
              <p className="text-gray-700">
                From sourcing and processing to quality control and packaging, every step is carried out in specialized
                units equipped with modern technology and managed by skilled professionals.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Hearty You Processing Facility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Our Facilities</h2>

          <Tabs defaultValue="processing" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="processing">Processing Unit</TabsTrigger>
              <TabsTrigger value="quality">Quality Control</TabsTrigger>
              <TabsTrigger value="packaging">Packaging Unit</TabsTrigger>
            </TabsList>

            <TabsContent value="processing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Processing Unit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">Processing Unit</h3>
                  <p className="text-gray-700 mb-4">
                    Our state-of-the-art processing unit is equipped with advanced machinery for cleaning, sorting,
                    grading, and processing Red Chilli, Millets, and Spices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Temperature-controlled environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Automated cleaning and sorting systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Precision grinding and processing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Energy-efficient operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quality" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Quality Control Lab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">Quality Control</h3>
                  <p className="text-gray-700 mb-4">
                    Our dedicated quality control laboratory ensures that every batch of our products meets stringent
                    quality standards before reaching the market.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Advanced testing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Microbial analysis facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Color, flavor, and texture assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Nutritional content verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packaging" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Packaging Unit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">Packaging Unit</h3>
                  <p className="text-gray-700 mb-4">
                    Our packaging facility is designed to preserve the freshness, flavor, and nutritional value of our
                    products while ensuring convenience for consumers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Hygienic packaging environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Moisture-resistant and airtight packaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Various packaging sizes for different needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Eco-friendly packaging options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Infrastructure Gallery</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Take a visual tour of our state-of-the-art facilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt={`Infrastructure Image ${img}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View Larger
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2 text-red-600">Our Certifications</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our facilities and processes meet international standards for quality and safety
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((cert) => (
              <div key={cert} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="relative h-24 mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Certification ${cert}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Certification {cert}</h3>
                <p className="text-gray-600 text-sm">
                  Brief description of this certification and what it means for our products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
