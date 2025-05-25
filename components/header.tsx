"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import SearchBar from "@/components/search-bar"
import ChilliesVarietiesMenu from "@/components/chillies-varieties-menu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  
  // Determine if we're on the landing page
  const isLandingPage = pathname === "/"

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Red Chilli", href: "/products/red-chilli" },
        { name: "Millets", href: "/products/millets" },
        { name: "Spices", href: "/products/spices" },
        { name: "Herbal & Fruit Powders", href: "/products/herbal-fruit-powders" },
        { name: "Indian Pulses", href: "/products/indian-pulses" },
      ],
    },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    // Set default scrolled state based on current page
    if (!isLandingPage) {
      // Always set scrolled to true for non-landing pages
      setIsScrolled(true)
    } else {
      // For landing page, initial state is not scrolled
      setIsScrolled(false)
    }

    const handleScroll = () => {
      // Only dynamically change scroll state on landing page
      if (isLandingPage) {
        if (window.scrollY > 10) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLandingPage])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Hearty You Products Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={cn("font-bold text-xl transition-colors", isScrolled ? "text-red-600" : "text-white")}>
                Hearty You
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md font-medium flex items-center transition-colors",
                    pathname === item.href
                      ? isScrolled
                        ? "text-red-600"
                        : "text-white font-bold"
                      : isScrolled
                        ? "text-gray-700 hover:text-red-600"
                        : "text-white/90 hover:text-white",
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.name === "Red Chilli" ? (
                            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">
                              <Link href={subItem.href}>
                                {subItem.name}
                              </Link>
                              <div className="ml-2">
                                <ChevronRight className="h-4 w-4 text-gray-500" />
                              </div>
                              <div className="absolute left-full top-0 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div className="py-1">
                                  <Link href="/products/red-chilli?variety=byadgi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 group relative">
                                    Byadgi Chillies
                                    <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <div className="absolute left-full top-0 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                      <div className="py-1">
                                        <Link href="/products/red-chilli?variety=byadgi-2043-syngenta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">2043 Syngenta</Link>
                                        <Link href="/products/red-chilli?variety=byadgi-kaddi-kdl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Byadgi Kaddi (KDL)</Link>
                                        <Link href="/products/red-chilli?variety=byadgi-355" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Byadgi-355</Link>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link href="/products/red-chilli?variety=guntur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 group relative">
                                    Guntur Chillies
                                    <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <div className="absolute left-full top-0 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                      <div className="py-1">
                                        <Link href="/products/red-chilli?variety=guntur-teja-s17" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Teja S17</Link>
                                        <Link href="/products/red-chilli?variety=guntur-334-s4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">334 S4</Link>
                                        <Link href="/products/red-chilli?variety=guntur-sannam-s10" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Sannam S10</Link>
                                      </div>
                                    </div>
                                  </Link>

                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled ? "text-gray-600 hover:text-red-600" : "text-white hover:text-white/80",
              )}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-slideDown">
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 text-lg font-medium",
                      pathname === item.href ? "text-red-600" : "text-gray-800 hover:text-red-600",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>

                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.name === "Red Chilli" ? (
                            <div className="flex items-center py-1">
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "text-base",
                                  pathname === subItem.href ? "text-red-600" : "text-gray-600 hover:text-red-600",
                                )}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                              <div className="ml-2">
                                <ChilliesVarietiesMenu />
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block py-1 text-base",
                                pathname === subItem.href ? "text-red-600" : "text-gray-600 hover:text-red-600",
                              )}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200">
                <SearchBar onClose={() => setIsMenuOpen(false)} />
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 mt-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
