"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Leaf, Users, ArrowRight, CheckCircle, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const EcosystemSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const ecosystemCards = [
    {
      id: 1,
      title: "Supplier to Customer",
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      description: "Dive into the world of premium products with our curated selection of goods. From high-quality items to rich, unique products, each item is sourced from the finest suppliers to deliver unmatched quality and value to our customers.",
      bgImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Practices",
      icon: <Leaf className="w-12 h-12 text-white" />,
      description: "Our ecosystem promotes organic farming methods, water conservation, and biodiversity to ensure environmental sustainability. We're committed to reducing our carbon footprint and promoting eco-friendly practices throughout our supply chain.",
      bgImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Community Development",
      icon: <Users className="w-12 h-12 text-white" />,
      description: "We invest in rural communities, infrastructure, and economic opportunities that empower local populations. Our goal is to create a positive impact on the lives of our suppliers, customers, and the environment.",
      bgImage: "https://images.unsplash.com/photo-1542601600647-3a722a90a76c?q=80&w=600&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMC0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Hearty You Ecosystem</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A sustainable business model that supports farmers, consumers, and the environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ecosystemCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative overflow-hidden rounded-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={card.bgImage} 
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-800/90 via-red-700/70 to-red-600/50"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[320px]">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-3 bg-red-500/30 rounded-full backdrop-blur-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-white/90">
                    {card.description}
                  </p>
                </div>
                
                <div className={`mt-6 flex justify-center transition-opacity duration-300 ${activeCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/20"
                  >
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border border-white/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-5">Our Integrated Value Chain</h3>
              <p className="mb-8 text-white/90 text-lg">
                Our ecosystem integrates every aspect of the supply chain, from suppliers to customers,
                creating a transparent and efficient process that benefits all stakeholders.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Strategic sourcing from trusted suppliers with quality assurance",
                  "In-house processing with quality control at every step", 
                  "Eco-friendly packaging and distribution",
                  "Digital traceability for complete transparency"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-white mr-3 h-6 w-6 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button 
                asChild 
                size="lg"
                className="bg-white text-red-600 hover:bg-white/90 hover:scale-105 transition-transform"
              >
                <Link href="/about" className="flex items-center">
                  Explore Our Story <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1631206753348-db44968dd633?q=80&w=1000&auto=format&fit=crop" 
                alt="Integrated Value Chain" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent flex items-end p-6">
                <p className="text-lg font-semibold text-white">From supplier to customer with transparency and sustainability</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EcosystemSection
