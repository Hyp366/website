import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Hearty You Products",
  description: "Read our Terms of Service to understand the rules and guidelines for using Hearty You Products website and services.",
}

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Agreement to Terms */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Agreement to Terms</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Hearty You Products India Pvt Ltd. These Terms of Service ("Terms") govern your 
            access to and use of our website, products, services, and content (collectively, the "Service").
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
            with any part of these terms, then you may not access the Service.
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Hearty You Products India Pvt Ltd</strong>
            </p>
            <p className="text-gray-700 mb-1">
              CIN: [Your Company Identification Number]
            </p>
            <p className="text-gray-700 mb-1">
              Registered Office: [Your Registered Address]
            </p>
            <p className="text-gray-700">
              Corporate Office: [Your Corporate Address]
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Hearty You Products India Pvt Ltd is a company incorporated under the Companies Act, 2013, 
            and is engaged in the business of manufacturing, processing, and exporting agricultural products, 
            spices, and food items.
          </p>
        </div>

        {/* Products and Services */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products and Services</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer the following products and services through our website:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Red Chillies (Byadgi, Guntur, and other varieties)</li>
            <li>Millets and Grains</li>
            <li>Spices and Seasonings</li>
            <li>Herbal & Fruit Powders</li>
            <li>Indian Pulses</li>
            <li>Bulk export and wholesale services</li>
            <li>Custom processing and packaging solutions</li>
          </ul>
          
          <p className="text-gray-700 leading-relaxed">
            All product specifications, prices, and availability are subject to change without prior notice.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">User Responsibilities</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            As a user of our Service, you agree to:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Provide accurate, current, and complete information</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Maintain the security of your account credentials</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Use our Service for lawful purposes only</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Not engage in fraudulent or misleading activities</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Respect intellectual property rights</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Not attempt to harm our website or systems</p>
            </div>
          </div>
        </div>

        {/* Orders and Payments */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Orders and Payments</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Order Terms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All orders are subject to product availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Order confirmation does not guarantee final acceptance</li>
                <li>Prices are quoted in INR unless otherwise specified</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Payment methods: Bank Transfer, UPI, NEFT, RTGS</li>
                <li>Advance payment may be required for bulk orders</li>
                <li>All payments are subject to Indian banking regulations</li>
                <li>Goods remain our property until full payment is received</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping and Delivery */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping and Delivery</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Shipping and delivery terms are as follows:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Delivery timelines are estimates and subject to logistics conditions</li>
            <li>Risk of loss transfers to buyer upon delivery</li>
            <li>We are not liable for delays beyond our control</li>
            <li>International shipping follows Incoterms 2020</li>
            <li>Customs and duties are buyer's responsibility for international orders</li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Scale className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Intellectual Property</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on this website, including but not limited to text, graphics, logos, images, 
            and software, is the property of Hearty You Products India Pvt Ltd or its content suppliers 
            and is protected by Indian and international copyright laws.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            You may not use, reproduce, distribute, or create derivative works without our explicit 
            written permission.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            To the maximum extent permitted by law:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Our liability is limited to the value of the products ordered</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>We do not guarantee uninterrupted or error-free service</li>
            <li>Product specifications may vary slightly from descriptions</li>
          </ul>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of India. 
            Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of 
            the courts in [Your City], India.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            We encourage amicable resolution of disputes. Please contact us at legal@hearty-you.com 
            for any concerns.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 mb-2">
              <strong>Hearty You Products India Pvt Ltd</strong>
            </p>
            <p className="text-gray-700 mb-1">
              Email: legal@hearty-you.com
            </p>
            <p className="text-gray-700 mb-1">
              Phone: +91-XXXXXXXXXX
            </p>
            <p className="text-gray-700">
              Address: [Your Company Address]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
