"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Show tooltip after 3 seconds initially
    const tooltipTimer = setTimeout(() => {
      if (isVisible) {
        setTooltipVisible(true)
        
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setTooltipVisible(false)
        }, 5000)
      }
    }, 3000)

    window.addEventListener("scroll", toggleVisibility)
    // Initial check
    toggleVisibility()

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "919341213729" // Country code (91) followed by number without +
    const message = "Hello, I'm interested in Hearty You Products. Can you provide more information?"

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className={`fixed z-50 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
      {tooltipVisible && (
        <div className="fixed bottom-20 right-6 md:right-8 bg-white p-3 rounded-lg shadow-lg max-w-[200px] text-sm">
          <button 
            onClick={() => setTooltipVisible(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1"
          >
            <X className="h-3 w-3" />
          </button>
          <p>Chat with us on WhatsApp for quick assistance!</p>
        </div>
      )}
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 active:bg-green-700 transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-0"
        } touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

export default WhatsAppButton
