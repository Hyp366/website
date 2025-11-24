import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <div className="relative h-16 w-48 mb-2">
                <Image
                  src="/images/logo/hyplogo.png"
                  alt="Hearty You Products Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-white">Hearty You Products India Pvt Ltd</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium quality Dry Red Chilli, Millets, Spices, and Herbal & Fruit Powders for a healthier you. Sustainably sourced and naturally
              processed.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Hearty You Products India Pvt Ltd,
                  <br />
                  #13068, Prestige Shantiniketan,
                  <br />
                  Whitefield Hoodi Main Road,
                  <br />
                  Bangalore 560048, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/919341213729" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 93412 13729
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:heartyuproducts@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  heartyuproducts@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* USA Address */}
          <div>
            <h3 className="text-lg font-semibold mb-6">USA Office</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  HAPPYYOUPRODUCTS LLC,
                  <br />
                  3400 COTTAGE WAY SUITE G2 # 13626,
                  <br />
                  SACRAMENTO CA 95825,
                  <br />
                  USA
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/16508886202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (650) 888-6202
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:happyuproducts@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  happyuproducts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hearty You Products India Pvt Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
