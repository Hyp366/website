import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Red Chilli",
    description: "Premium quality red chilli with rich color and balanced heat",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=800&auto=format&fit=crop",
    link: "/products/red-chilli",
  },
  {
    id: 2,
    name: "Millets",
    description: "Nutrient-rich ancient grains for a healthy lifestyle",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8c7?q=80&w=800&auto=format&fit=crop",
    link: "/products/millets",
  },
  {
    id: 3,
    name: "Spices",
    description: "Authentic spices that bring your dishes to life",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    link: "/products/spices",
  },
]

const FeaturedCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-80">
            <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="mb-4">{category.description}</p>
              <div className="flex items-center text-red-300 group-hover:text-red-200 transition-colors">
                <span className="mr-2">Explore</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FeaturedCategories
