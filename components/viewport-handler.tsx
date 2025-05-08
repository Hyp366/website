"use client"

import { useEffect } from "react"
import { useViewportHeight } from "@/components/ui/use-mobile"

// This component handles viewport calculations and other device-specific adjustments
// It doesn't render anything visible, just runs the necessary effects
export default function ViewportHandler() {
  // Use the viewport height hook to handle mobile browser viewport height issues
  useViewportHeight()
  
  // Add any additional device-specific handling here
  useEffect(() => {
    // Fix for iOS momentum scrolling
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.documentElement.style.setProperty(
        '--webkit-overflow-scrolling', 
        'touch'
      )
    }
    
    // Handle orientation changes more effectively on mobile
    const handleOrientationChange = () => {
      // Force re-layout after orientation change completes
      setTimeout(() => {
        window.scrollTo(0, window.scrollY + 1)
        window.scrollTo(0, window.scrollY - 1)
      }, 300)
    }
    
    window.addEventListener('orientationchange', handleOrientationChange)
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])
  
  // This component doesn't render anything visible
  return null
} 