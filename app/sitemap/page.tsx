import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Map, Home, Package, Phone, FileText, Users, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Sitemap | Hearty You Products",
  description: "Complete sitemap of Hearty You Products website - find all pages, products, and information easily.",
}

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      items: [
        { title: "Home", href: "/", description: "Welcome page with company overview" },
        { title: "About Us", href: "/about", description: "Learn about our company and mission" },
        { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
      ]
    },
    {
      title: "Products",
      icon: Package,
      items: [
        { title: "All Products", href: "/products", description: "Browse our complete product catalog" },
        { title: "Red Chillies", href: "/products/red-chilli", description: "Premium quality red chillies" },
        { title: "Byadgi Chillies", href: "/products/red-chilli?variety=byadgi", description: "Special Byadgi variety" },
        { title: "BYADGI Dry Red Chilli", href: "/products/red-chilli?variety=byadgi-red-chilli", description: "Dry Byadgi chillies" },
        { title: "Byadgi Chilli Powder", href: "/products/red-chilli?variety=byadgi-chilli-powder", description: "Ground Byadgi chilli powder" },
        { title: "Guntur Chillies", href: "/products/red-chilli?variety=guntur", description: "Premium Guntur variety" },
        { title: "334/S4/SANNAM/S10 Red Chilli", href: "/products/red-chilli?variety=334-s4-sannam-s10-red-chilli", description: "SANNAM variety chillies" },
        { title: "Teja Chilli - S17", href: "/products/red-chilli?variety=teja-s17-red-chilli", description: "Teja S17 grade" },
        { title: "Wrinkled 273 Red Chilli With Stem", href: "/products/red-chilli?variety=wrinkled-273-red-chilli-with-stem", description: "Wrinkled variety with stem" },
        { title: "Wrinkled 273 Red Chilli Without Stem", href: "/products/red-chilli?variety=wrinkled-273-red-chilli-without-stem", description: "Wrinkled variety without stem" },
        { title: "Indian Red Chilli ENDO 5", href: "/products/red-chilli?variety=endo-5-red-chilli", description: "ENDO 5 grade chillies" },
        { title: "Red Chilli Flakes", href: "/products/red-chilli?variety=red-chilli-flakes", description: "Crushed red chilli flakes" },
        { title: "Red Chilli Seeds", href: "/products/red-chilli?variety=red-chilli-seeds", description: "Premium chilli seeds" },
        { title: "Millets", href: "/products/millets", description: "Nutritious millet varieties" },
        { title: "Spices", href: "/products/spices", description: "Aromatic Indian spices" },
        { title: "Herbal & Fruit Powders", href: "/products/herbal-fruit-powders", description: "Natural herbal powders" },
        { title: "Indian Pulses", href: "/products/indian-pulses", description: "Quality Indian pulses" },
      ]
    },
    {
      title: "Legal & Information",
      icon: FileText,
      items: [
        { title: "Privacy Policy", href: "/privacy-policy", description: "How we protect your data" },
        { title: "Terms of Service", href: "/terms-of-service", description: "Terms and conditions" },
        { title: "Sitemap", href: "/sitemap", description: "Complete site structure" },
      ]
    },
    {
      title: "Support",
      icon: Phone,
      items: [
        { title: "Contact Us", href: "/contact", description: "Reach out to our team" },
        { title: "Customer Support", href: "/contact", description: "Get help with orders" },
        { title: "Business Inquiries", href: "/contact", description: "Partnership opportunities" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-4">
            <Map className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Sitemap</h1>
          </div>
          
          <p className="text-gray-600 text-lg">
            Navigate through our website with ease. Find all pages, products, and information in one place.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">3</div>
            <div className="text-gray-600 text-sm">Main Pages</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">16</div>
            <div className="text-gray-600 text-sm">Product Pages</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">3</div>
            <div className="text-gray-600 text-sm">Legal Pages</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">25+</div>
            <div className="text-gray-600 text-sm">Total Pages</div>
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sitemapSections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <Link 
                        href={item.href}
                        className="block p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 group-hover:text-red-600 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                          <div className="ml-3 flex-shrink-0">
                            <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-red-600 transition-colors"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Users className="h-5 w-5 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">About Our Company</h3>
                <p className="text-sm text-gray-600">
                  Leading manufacturer and exporter of quality agricultural products and spices from India.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Contact Information</h3>
                <p className="text-sm text-gray-600">
                  Email: info@hearty-you.com<br />
                  Phone: +91-XXXXXXXXXX
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Package className="h-5 w-5 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Product Categories</h3>
                <p className="text-sm text-gray-600">
                  Red Chillies, Millets, Spices, Herbal Powders, Indian Pulses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Looking for our XML sitemap for search engines?
          </p>
          <Link 
            href="/sitemap.xml" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            <FileText className="mr-2 h-4 w-4" />
            View XML Sitemap
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
