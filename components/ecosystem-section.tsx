import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const EcosystemSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ayhro Company Ecosystem</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A sustainable business model that supports farmers, consumers, and the environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
            <div className="relative h-16 w-16 mb-6 mx-auto">
              <Image src="/placeholder.svg?height=100&width=100" alt="Farm to Table" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Farm to Table</h3>
            <p className="text-center">
              We work directly with farmers, eliminating middlemen and ensuring fair compensation while delivering
              fresher products to consumers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
            <div className="relative h-16 w-16 mb-6 mx-auto">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Sustainable Practices"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Sustainable Practices</h3>
            <p className="text-center">
              Our ecosystem promotes organic farming methods, water conservation, and biodiversity to ensure
              environmental sustainability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
            <div className="relative h-16 w-16 mb-6 mx-auto">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Community Development"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Community Development</h3>
            <p className="text-center">
              We invest in rural communities through education, infrastructure, and economic opportunities that empower
              local populations.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Integrated Value Chain</h3>
              <p className="mb-6">
                The Ayhro Company ecosystem integrates every aspect of the supply chain, from cultivation to consumer,
                creating a transparent and efficient process that benefits all stakeholders.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">•</span>
                  <span>Direct sourcing from farmers with fair pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">•</span>
                  <span>In-house processing with quality control at every step</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">•</span>
                  <span>Eco-friendly packaging and distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">•</span>
                  <span>Digital traceability for complete transparency</span>
                </li>
              </ul>
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/about">Learn About Our Ecosystem</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Ayhro Ecosystem" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
