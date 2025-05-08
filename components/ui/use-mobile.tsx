import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Hook to handle mobile viewport height issues
export function useViewportHeight() {
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set custom property for viewport height (vh)
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    
    // Set initial viewport height
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Optional: handle orientation change specifically for mobile devices
    window.addEventListener('orientationchange', handleResize)
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])
}

// Hook to detect iOS devices for specific iOS-related fixes
export function useIsiOS() {
  const [isiOS, setIsiOS] = React.useState(false)
  
  React.useEffect(() => {
    // Check if the device is running iOS
    const userAgent = window.navigator.userAgent.toLowerCase()
    const ios = /iphone|ipad|ipod/.test(userAgent)
    setIsiOS(ios)
  }, [])
  
  return isiOS
}

// Combined hook for device detection
export function useDeviceDetection() {
  const isMobile = useIsMobile()
  const isiOS = useIsiOS()
  
  // Set viewport height
  useViewportHeight()
  
  return { isMobile, isiOS }
}
