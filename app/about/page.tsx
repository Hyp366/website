import Image from "next/image"
import type { Metadata } from "next"

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
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1529255848808-5f6be1c2a556?q=80&w=1920&auto=format&fit=crop"
            alt="About Hearty You Products"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">About Us</h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Discover the story behind Hearty You Products and our commitment to quality
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop"
                alt="Hearty You Products History"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-600">Our Story</h2>
              <p className="text-gray-700 mb-4 sm:mb-6">
                Hearty You Products India Pvt Ltd was founded with a vision to bring premium quality Red Chilli,
                Millets, and Spices to consumers while supporting local farmers and sustainable agricultural practices.
              </p>
              <p className="text-gray-700 mb-4 sm:mb-6">
                What started as a small initiative has now grown into a trusted brand known for its commitment to
                quality, purity, and customer satisfaction. Our journey has been guided by our passion for healthy,
                natural food products and our dedication to excellence.
              </p>
              <p className="text-gray-700">
                Today, we continue to expand our product range while maintaining the same high standards that have
                defined our brand from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-red-600">Our Mission & Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-red-600"
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
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We are committed to providing the highest quality products through rigorous selection and testing
                processes.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-red-600"
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
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We support sustainable farming practices and work closely with farmers to ensure environmental
                responsibility.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-red-600"
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
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                We believe in supporting local communities and creating positive impact through fair trade practices.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-600 text-center">Our Mission</h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              To provide premium quality Red Chilli, Millets, and Spices that enhance the flavor and nutritional value
              of every meal while supporting sustainable farming practices and empowering local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-red-600">Our Facilities</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            State-of-the-art processing and packaging facilities ensuring premium quality
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-56 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1470&auto=format&fit=crop"
                  alt="Processing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-red-600">Processing Facility</h3>
                <p className="text-gray-600">
                  Our modern processing facility equipped with the latest technology ensures that our products meet the highest quality standards.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-56 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop"
                  alt="Quality Control Lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-red-600">Quality Control Lab</h3>
                <p className="text-gray-600">
                  Our dedicated quality control laboratory conducts rigorous testing to ensure that every product meets our strict quality parameters.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-56 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1469&auto=format&fit=crop"
                  alt="Packaging Unit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-red-600">Packaging Unit</h3>
                <p className="text-gray-600">
                  Our hygienic packaging facility ensures that our products maintain their freshness and quality throughout their shelf life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
