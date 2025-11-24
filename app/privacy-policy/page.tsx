import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Hearty You Products",
  description: "Learn how Hearty You Products protects your privacy and handles your personal information.",
}

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Hearty You Products India Pvt Ltd, we are committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website 
            hearty-you.com and use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website, you consent to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Eye className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Name and contact details (email, phone, address)</li>
                <li>Company information (for business inquiries)</li>
                <li>Communication preferences</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <UserCheck className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To provide and maintain our services</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To respond to your inquiries and provide customer support</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To process orders and manage transactions</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To improve our website and services</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To send you marketing communications (with your consent)</p>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Data Protection</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. These include:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>SSL encryption for data transmission</li>
            <li>Secure servers for data storage</li>
            <li>Regular security audits and updates</li>
            <li>Restricted access to personal information</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the right to:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your personal information</li>
            <li>Object to processing of your personal information</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 mb-2">
              <strong>Hearty You Products India Pvt Ltd</strong>
            </p>
            <p className="text-gray-700 mb-1">
              Email: privacy@hearty-you.com
            </p>
            <p className="text-gray-700 mb-1">
              Phone: +91-XXXXXXXXXX
            </p>
            <p className="text-gray-700">
              Address: [Your Company Address]
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
          
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
