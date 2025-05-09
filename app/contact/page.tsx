import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Hearty You Products India Pvt Ltd",
  description:
    "Get in touch with Hearty You Products India Pvt Ltd. Contact us for inquiries about our Red Chilli, Millets, Spices, and Herbal & Fruit Powders products.",
  keywords: "contact Hearty You Products, red chilli supplier contact, organic food company India contact, herbal powders, fruit powders",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Hearty You Products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-600">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-600">Contact Information</h2>
              <p className="text-gray-600 mb-8">You can also reach us using the following contact details:</p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      Hearty You Products India Pvt Ltd,
                      <br />
                      #13068, Prestige Shantiniketan,
                      <br />
                      Whitefield Hoodie Main Road,
                      <br />
                      Bangalore 560048, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91 93412 13729
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      n.manjusha18@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Location Map" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our products and services
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are your minimum order quantities?",
                answer:
                  "Our minimum order quantities vary by product. For retail packaging, we typically require a minimum order of 10 units per product. For bulk orders, please contact our sales team for specific details.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship our products internationally. Shipping costs and delivery times vary depending on the destination. Please contact us for specific shipping information to your location.",
              },
              {
                question: "How can I become a distributor for Hearty You Products?",
                answer:
                  "We're always looking for distribution partners. Please fill out our contact form with details about your business, and our partnership team will get in touch with you to discuss potential collaboration.",
              },
              {
                question: "What types of products do you offer?",
                answer:
                  "We offer a wide range of premium quality Red Chilli, Millets, Spices, Herbal & Fruit Powders, and Indian Pulses. All our products are carefully sourced and processed to maintain their natural properties and nutritional value.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-red-600">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
