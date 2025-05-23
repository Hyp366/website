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

      {/* Exporting Countries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Our Export Destinations</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We proudly supply our full range of premium products to customers around the world
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                country: "United States",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "United Kingdom",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "Germany",
                image: "https://images.unsplash.com/photo-1554072675-66db59dba46f?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "France",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "Spain",
                image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "Sweden",
                image: "https://images.unsplash.com/photo-1518994304117-b5a2c83174e1?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "Belgium",
                image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=600&auto=format&fit=crop", 
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              },
              {
                country: "UAE",
                image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=600&auto=format&fit=crop",
                description: "Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses"
              }
            ].map((country, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={country.image}
                    alt={`${country.country}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white">{country.country}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Products Exported:</span> {country.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
