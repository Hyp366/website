import Image from "next/image"
import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import CertificationsBar from "@/components/certifications-bar"

export const metadata: Metadata = {
  title: "About Us | Hearty You Products India Pvt Ltd",
  description:
    "Discover the story behind Hearty You Products India Pvt Ltd, our mission to deliver premium organic Red Chilli, Millets, and Spices, and meet the passionate team committed to sustainable and natural food solutions.",
  keywords: "Hearty You Products about, organic food company India, red chilli producer, millets supplier",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[65vh] md:h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-black/20">
          <Image
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop"
            alt="About Hearty You Products"
            fill
            className="object-cover brightness-75 scale-105 hover:scale-100 transition-transform duration-10000 ease-in-out"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
            Our <span className="text-red-400">Story</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl animate-fadeInUp animation-delay-200 mb-8 font-light">
            Discover the journey behind Hearty You Products and our relentless pursuit of quality
          </p>
          <div className="animate-fadeInUp animation-delay-400">
            <a 
              href="#journey" 
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors group"
            >
              Learn More
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block">
          <a href="#journey" className="text-white p-2 rounded-full border border-white/30 backdrop-blur-sm">
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Company History */}
      <section id="journey" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Our Journey
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From humble beginnings to a global presence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-80 sm:h-96 md:h-[32rem] order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop"
                alt="Hearty You Products History"
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-wider">Established</p>
                <p className="text-2xl font-bold">2022</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-red-600">From USA to India</h3>
              <div className="space-y-6 text-gray-700">
                <p className="border-l-4 border-red-500 pl-6 py-2 text-lg">
                  Started our presence as <span className="font-semibold">Happy You Products LLP, U.S.A.</span> as an E-commerce company, we expanded to <span className="font-semibold">Hearty You Products India Pvt Ltd</span> that deals in exports and imports of various agricultural products.
                </p>
                <p className="text-lg">
                  We have experience in exporting Vannamei Shrimp to various countries and importing agrochemicals.
                </p>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="font-medium text-red-800">
                    <span className="font-semibold">Guntur district</span> within Andhra Pradesh is known as the <span className="italic">"Chilli Capital of India"</span>. Karnataka stands as the second-largest producer of chillies in India, following Andhra Pradesh.
                  </p>
                </div>
                <p>
                  We procure the best Byadgi chillis from Karnataka to ensure the highest quality for our customers.
                </p>
                <p>
                  We, <span className="font-semibold">Hearty You Products India Pvt Ltd</span> operate directly from Guntur to provide the best of red chillies and their esteemed varieties to our clients across the world.
                </p>
                <p className="text-lg">
                  Karnataka is the largest producer of Ragi or Finger Millets and it stands second in the production of other various varieties of Millets. We operate from Karnataka and get you the best produce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hearty You Products India Pvt Ltd Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Hearty You Products India Pvt Ltd
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            {/* <p className="text-gray-600 max-w-3xl mx-auto">Your trusted partner in food exports since 2007</p>   */}
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  About Hearty You Products India Pvt Ltd
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span>Leading exporter of premium Indian agricultural products with a global presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span>Trusted partner for quality food products in international markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span>Established track record of excellence in food exports since 2022</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Our Fresh Produce Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Premium Quality Assurance</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>State-of-the-art cultivation and processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>Rigorous quality control at every stage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>Competitive market pricing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Sustainable Practices</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>Eco-friendly farming methods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>Safe and organic fertilizers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        <span>Responsible sourcing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Dedicated Team</h3>
              <p className="mb-4">Our strength lies in our team of experts who ensure excellence at every step:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">→</span> Procuring experts
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">→</span> Quality controllers
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">→</span> Packaging experts
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">→</span> Skilled & unskilled labor
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">→</span> Management professionals
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <p className="text-center italic text-gray-700">
                We appreciate your consideration and look forward to establishing a mutually beneficial business relationship. Thank you for your support as we work together towards productive cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Our Core Values
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-500 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Premium Quality</h3>
              <p className="text-gray-600 text-center">
                We are committed to providing the highest quality products through rigorous selection and testing
                processes. Every product that leaves our facility meets the most stringent quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-500 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Natural and Organic</h3>
              <p className="text-gray-600 text-center">
                We are dedicated to offering products that are natural and organic, free from synthetic additives and chemicals. Our commitment ensures you receive food as nature intended—pure, healthy, and safe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-500 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Competitive Pricing</h3>
              <p className="text-gray-600 text-center">
                We believe in delivering exceptional value through competitive pricing. Our efficient sourcing and supply chain management allow us to offer premium products at prices that are accessible to all our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <CertificationsBar />

      {/* Export Destinations Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Our Export Destinations
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We proudly supply our full range of premium products to customers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* United States */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501594907352-3e7d96241e11?q=80&w=1920&auto=format&fit=crop"
                  alt="United States"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">United States</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Products Exported:</span> Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses
                </p>
              </div>
            </div>

            {/* United Kingdom */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop"
                  alt="United Kingdom"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">United Kingdom</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Products Exported:</span> Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses
                </p>
              </div>
            </div>

            {/* Australia */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&auto=format&fit=crop"
                  alt="Australia"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Australia</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Products Exported:</span> Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses
                </p>
              </div>
            </div>

            {/* Canada */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop"
                  alt="Canada"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Canada</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Products Exported:</span> Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses
                </p>
              </div>
            </div>

            {/* Spain */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1920&auto=format&fit=crop"
                  alt="Spain"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Dubai</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Products Exported:</span> Red Chilli, Millets, Spices, Herbal & Fruit Powders, Indian Pulses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to experience premium quality?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how we can meet your needs for high-quality agricultural products.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
