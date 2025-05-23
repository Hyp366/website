import Image from "next/image"
import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Hearty You Products India Pvt Ltd",
  description:
    "Learn about Hearty You Products India Pvt Ltd, our mission, values, and the team behind our premium Red Chilli, Millets, and Spices.",
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
                  We, <span className="font-semibold">Hearty You Products India Pvt Ltd</span> operate directly from Guntur to provide the best of red chillies and their esteemed varieties to our clients across the world.
                </p>
                <p>
                  Karnataka is the largest producer of Ragi or Finger Millets and it stands second in the production of other various varieties of Millets. We operate from Karnataka and get you the best produce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute -right-24 top-0 w-64 h-64 bg-red-100 rounded-full opacity-50"></div>
        <div className="absolute -left-24 bottom-0 w-96 h-96 bg-orange-100 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-red-600 relative inline-block">
              Our Belief
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded"></span>
            </h2>
            <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 text-red-500 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-8 text-xl italic font-light leading-relaxed">
                "We believe in honesty and transparency in business. We always serve our customers with the best quality desired and timely shipments."
              </p>
              <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg">
                With our efficient and timely services, we are emerging as the most dependable business partners. 
              </p>
              <p className="text-gray-700 text-lg">
                The company is assisted by well-qualified and well-coordinated staff that made the company a success.
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
              <h3 className="text-xl font-bold mb-4 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We support sustainable farming practices and work closely with farmers to ensure environmental
                responsibility. Our commitment to sustainability extends throughout our entire supply chain.
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
              <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                We believe in supporting local communities and creating positive impact through fair trade practices.
                By empowering farmers and local communities, we create shared value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Our Certifications
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and safety through internationally recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm">
                <div className="w-full h-full rounded-full border-2 border-red-100 flex items-center justify-center p-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1589464484284-33164693a379?q=80&w=150&auto=format&fit=crop" 
                    alt="Organic Certification" 
                    width={100} 
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">Organic Certification</h3>
              <p className="text-gray-600">
                Our products are certified organic, ensuring they are grown without synthetic pesticides or fertilizers
              </p>
              <div className="mt-6">
                <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                  USDA Organic
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm">
                <div className="w-full h-full rounded-full border-2 border-red-100 flex items-center justify-center p-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=150&auto=format&fit=crop" 
                    alt="ISO Certification" 
                    width={100} 
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">ISO 22000:2018</h3>
              <p className="text-gray-600">
                We adhere to international standards for food safety management systems, ensuring quality at every step
              </p>
              <div className="mt-6">
                <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                  Internationally Certified
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm">
                <div className="w-full h-full rounded-full border-2 border-red-100 flex items-center justify-center p-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=150&auto=format&fit=crop" 
                    alt="HACCP Certification" 
                    width={100} 
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">HACCP</h3>
              <p className="text-gray-600">
                Our facilities follow Hazard Analysis Critical Control Point methodology to ensure food safety at all stages
              </p>
              <div className="mt-6">
                <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                  Food Safety Assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 inline-block relative">
              Our Facilities
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art processing and packaging facilities ensuring premium quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1470&auto=format&fit=crop"
                  alt="Processing Facility"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium uppercase tracking-wider">Facility</p>
                  <p className="text-xl font-bold">Guntur, Andhra Pradesh</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-red-600 group-hover:text-red-700 transition-colors">Processing Facility</h3>
                <p className="text-gray-600">
                  Our modern processing facility equipped with the latest technology ensures that our products meet the highest quality standards. Every batch is carefully processed to preserve nutrients and flavor.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop"
                  alt="Quality Control Lab"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium uppercase tracking-wider">Laboratory</p>
                  <p className="text-xl font-bold">Karnataka</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-red-600 group-hover:text-red-700 transition-colors">Quality Control Lab</h3>
                <p className="text-gray-600">
                  Our dedicated quality control laboratory conducts rigorous testing to ensure that every product meets our strict quality parameters. We use advanced equipment for precise analysis.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1469&auto=format&fit=crop"
                  alt="Packaging Unit"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium uppercase tracking-wider">Packaging</p>
                  <p className="text-xl font-bold">Bangalore</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-red-600 group-hover:text-red-700 transition-colors">Packaging Unit</h3>
                <p className="text-gray-600">
                  Our hygienic packaging facility ensures that our products maintain their freshness and quality throughout their shelf life. We use eco-friendly packaging materials whenever possible.
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
