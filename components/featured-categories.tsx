"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: " Dry Red Chilli",
    description: "Premium quality  dry red chilli with rich color and balanced heat",
    image: "https://www.bstspices.com/assets/images/ps-s334-chilli-with-stem-8-1848x1125.png",
    mobileImage: "https://www.bstspices.com/assets/images/ps-s334-chilli-with-stem-8-1848x1125.png",
    link: "/products/red-chilli",
  },
  {
    id: 2,
    name: "Millets",
    description: "Nutrient-rich ancient grains for a healthy lifestyle",
    image: "https://imgs.search.brave.com/enFLO1Lkhv1fymQzNz3OJeXXFz9hrjGLrz28QrZl9Ro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzIzLzE2/LzM2MF9GXzM4ODIz/MTY2NV92NW5XV25x/T2FBSW95d2plSnph/cUx4QzhyU01YV1ZN/SS5qcGc",
    mobileImage: "https://imgs.search.brave.com/enFLO1Lkhv1fymQzNz3OJeXXFz9hrjGLrz28QrZl9Ro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzIzLzE2/LzM2MF9GXzM4ODIz/MTY2NV92NW5XV25x/T2FBSW95d2plSnph/cUx4QzhyU01YV1ZN/SS5qcGc",
    link: "/products/millets",
  },
  {
    id: 3,
    name: "Spices",
    description: "Authentic spices that bring your dishes to life",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    mobileImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
    link: "/products/spices",
  },
  {
    id: 4,
    name: "Herbal & Fruit Powders",
    description: "Natural herbal and fruit powders for health and wellness",
    image: "https://imgs.search.brave.com/35zLltsQG-3x0bxATAEHdWOFHGkbcghTg7S1_SKRLh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZmlp/bmdyZWRpZW50cy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTMvMTIvZnJ1aXRw/b3dkZXJzLmpwZw",
    mobileImage: "https://imgs.search.brave.com/35zLltsQG-3x0bxATAEHdWOFHGkbcghTg7S1_SKRLh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZmlp/bmdyZWRpZW50cy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTMvMTIvZnJ1aXRw/b3dkZXJzLmpwZw",
    link: "/products/herbal-fruit-powders",
  },
  {
    id: 5,
    name: "Indian Pulses",
    description: "Premium quality pulses sourced from the finest farms in India",
    image: "https://imgs.search.brave.com/3vT96RK6f6hOh6WHm2KAbRLQNCPB3thruIIrD_ed_-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVz/aC1sZWd1bWVzLXB1/bHNlcy1ibGFuay1z/cGFjZS1lbXB0eS1k/ZXNpZ24tMzI5MTc0/OTM2LmpwZw",
    mobileImage: "https://imgs.search.brave.com/3vT96RK6f6hOh6WHm2KAbRLQNCPB3thruIIrD_ed_-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVz/aC1sZWd1bWVzLXB1/bHNlcy1ibGFuay1z/cGFjZS1lbXB0eS1k/ZXNpZ24tMzI5MTc0/OTM2LmpwZw",
    link: "/products/indian-pulses",
  },
]

const FeaturedCategories = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      {categories.slice(0, 3).map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-64 sm:h-80">
            <Image 
              src={isMobile ? category.mobileImage : category.image} 
              alt={category.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">{category.description}</p>
              <div className="flex items-center text-red-300 group-hover:text-red-200 transition-colors">
                <span className="mr-2 text-sm sm:text-base">Explore</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      ))}
      
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-0 md:mt-4">
        {categories.slice(3).map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 sm:h-80">
              <Image 
                src={isMobile ? category.mobileImage : category.image} 
                alt={category.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">{category.description}</p>
                <div className="flex items-center text-red-300 group-hover:text-red-200 transition-colors">
                  <span className="mr-2 text-sm sm:text-base">Explore</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategories
