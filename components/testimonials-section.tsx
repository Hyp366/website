"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Executive Chef, Spice Garden Restaurant",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The quality of Hearty You's red chilli products is exceptional. The vibrant color, balanced heat, and authentic flavor have elevated our dishes to a new level. Our customers can taste the difference.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Nutritionist & Health Coach",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "I recommend Hearty You's millets to all my clients. They're not only nutritionally superior but also taste great. The purity and quality of their products make them stand out in the market.",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Founder, Organic Food Store",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "As a retailer, I value partners who deliver consistent quality. Hearty You has never disappointed us. Their spices and millets are among our bestsellers, and customers keep coming back for more.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-red-600">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from chefs, nutritionists, and food enthusiasts who trust our products
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-md">
                    <Quote className="h-12 w-12 text-red-100 mb-6" />
                    <p className="text-gray-700 text-lg italic mb-8">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-red-600">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-red-600 p-3 rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-red-600 p-3 rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-red-600 w-8" : "bg-red-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
