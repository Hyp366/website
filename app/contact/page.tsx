import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Hearty You Products India Pvt Ltd",
  description:
    "Reach out to Hearty You Products India Pvt Ltd for inquiries about our premium Red Chilli, Millets, Spices, and Herbal & Fruit Powders. We're here to assist with your needs for organic and sustainably sourced ingredients.",
  keywords: "contact Hearty You Products, red chilli supplier contact, organic food company India contact, herbal powders, fruit powders",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Contact Hearty You Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
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
                      Whitefield Hoodi Main Road,
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
                      heartyuproducts@gmail.com
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
      {/* FAQ section removed */}
    </div>
  )
}
