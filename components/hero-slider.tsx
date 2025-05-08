"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1920&auto=format&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=750&auto=format&fit=crop",
    title: "Premium Quality Red Chilli",
    description: "Sustainably sourced and naturally processed for authentic flavor",
    buttonText: "Explore Red Chilli",
    buttonLink: "/products/red-chilli",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8c7?q=80&w=1920&auto=format&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1586201375761-83865001e8c7?q=80&w=750&auto=format&fit=crop",
    title: "Nutritious Organic Millets",
    description: "Ancient grains packed with essential nutrients for a healthier lifestyle",
    buttonText: "Discover Millets",
    buttonLink: "/products/millets",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=750&auto=format&fit=crop",
    title: "Authentic Indian Spices",
    description: "Carefully selected spices that bring your dishes to life",
    buttonText: "View Spices",
    buttonLink: "/products/spices",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={isMobile ? slide.mobileImage : slide.image}
              alt={slide.title}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
            <div className="max-w-full md:max-w-2xl text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_forwards] leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6 md:mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
                {slide.description}
              </p>
              <Button
                asChild
                size={isMobile ? "default" : "lg"}
                className="bg-red-600 hover:bg-red-700 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] w-full sm:w-auto"
              >
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
