"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import SearchBar from "@/components/search-bar"

type NavItem = {
  name: string;
  href: string;
  submenu?: NavItem[];
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  
  const isLandingPage = pathname === "/";

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "/products",
      submenu: [
        {
          name: "Red Chilli",
          href: "/products/red-chilli",
          submenu: [
            {
              name: "Byadgi Chillies",
              href: "/products/red-chilli?variety=byadgi",
              submenu: [
                { name: "BYADGI Dry Red Chilli", href: "/products/red-chilli?variety=byadgi-red-chilli" },
                { name: "Byadgi Chilli Powder", href: "/products/red-chilli?variety=byadgi-chilli-powder" },
              ]
            },
            {
              name: "Guntur Chillies",
              href: "/products/red-chilli?variety=guntur",
              submenu: [
                { name: "334/S4/SANNAM/S10 Red Chilli", href: "/products/red-chilli?variety=334-s4-sannam-s10-red-chilli" },
                { name: "Teja Chilli - S17", href: "/products/red-chilli?variety=teja-s17-red-chilli" },
                { name: "Wrinkled 273 Red Chilli With Stem", href: "/products/red-chilli?variety=wrinkled-273-red-chilli-with-stem" },
                { name: "Wrinkled 273 Red Chilli Without Stem", href: "/products/red-chilli?variety=wrinkled-273-red-chilli-without-stem" },
                { name: "Indian Red Chilli ENDO 5", href: "/products/red-chilli?variety=endo-5-red-chilli" },
                { name: "Red Chilli Flakes", href: "/products/red-chilli?variety=red-chilli-flakes" },
                { name: "Red Chilli Seeds", href: "/products/red-chilli?variety=red-chilli-seeds" },
              ]
            },
          ]
        },
        { name: "Millets", href: "/products/millets" },
        { name: "Spices", href: "/products/spices" },
        { name: "Herbal & Fruit Powders", href: "/products/herbal-fruit-powders" },
        { name: "Indian Pulses", href: "/products/indian-pulses" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isLandingPage ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-24 w-auto mr-3 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo/hyplogo.png"
                  alt="Hearty You Products Logo"
                  width={240}
                  height={96}
                  className="h-full w-auto object-contain mix-blend-multiply bg-transparent"
                  priority
                />
              </div>
              <div 
                className={cn(
                  "font-bold text-xl transition-colors",
                  isScrolled || !isLandingPage ? "text-red-600" : "text-white"
                )}
              >
                Hearty You Products India Pvt Ltd
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
                      ? isScrolled || !isLandingPage
                        ? "text-red-600"
                        : "text-white font-bold"
                      : isScrolled || !isLandingPage
                        ? "text-gray-700 hover:text-red-600"
                        : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.submenu ? (
                            <div className="group/submenu relative">
                              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">
                                <Link href={subItem.href}>
                                  {subItem.name}
                                </Link>
                                <ChevronRight className="ml-2 h-4 w-4 text-gray-500" />
                              </div>
                              <div className="absolute left-full top-0 w-56 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                <div className="py-1">
                                  {subItem.submenu.map((chilliItem) => (
                                    <Link
                                      key={chilliItem.href}
                                      href={chilliItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                                    >
                                      {chilliItem.name}
                                    </Link>
                                  ))}
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
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none",
                isScrolled || !isLandingPage ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none",
                isScrolled || !isLandingPage ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto",
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="container mx-auto px-4 py-20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block py-2 text-lg",
                      pathname === item.href
                        ? 'text-red-600 font-bold'
                        : 'text-gray-700 hover:text-red-600'
                    )}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="inline-block ml-1 h-4 w-4" />
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          <Link
                            href={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "block py-2 text-base",
                              pathname === subItem.href
                                ? 'text-red-600 font-medium'
                                : 'text-gray-600 hover:text-red-600'
                            )}
                          >
                            {subItem.name}
                            {subItem.submenu && (
                              <ChevronDown className="inline-block ml-1 h-3.5 w-3.5" />
                            )}
                          </Link>
                          {subItem.submenu && (
                            <div className="ml-4 mt-1 space-y-1">
                              {subItem.submenu.map((chilliItem) => (
                                <Link
                                  key={chilliItem.href}
                                  href={chilliItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={cn(
                                    "block py-1.5 text-sm",
                                    pathname === chilliItem.href
                                      ? 'text-red-600 font-medium'
                                      : 'text-gray-500 hover:text-red-600'
                                  )}
                                >
                                  {chilliItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-slideDown z-50">
          <div className="container mx-auto">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
