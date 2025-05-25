"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChilliesVariety {
  name: string
  href: string
  subvarieties?: {
    name: string
    href: string
  }[]
}

const chilliesVarieties: ChilliesVariety[] = [
  {
    name: "Byadgi Chillies",
    href: "/products/red-chilli?variety=byadgi",
    subvarieties: [
      { name: "2043 Syngenta", href: "/products/red-chilli?variety=byadgi-2043-syngenta" },
      { name: "Byadgi Kaddi (KDL)", href: "/products/red-chilli?variety=byadgi-kaddi-kdl" },
      { name: "Byadgi-355", href: "/products/red-chilli?variety=byadgi-355" },
    ]
  },
  {
    name: "Guntur Chillies",
    href: "/products/red-chilli?variety=guntur",
    subvarieties: [
      { name: "Teja S17", href: "/products/red-chilli?variety=guntur-teja-s17" },
      { name: "334 S4", href: "/products/red-chilli?variety=guntur-334-s4" },
      { name: "Sannam S10", href: "/products/red-chilli?variety=guntur-sannam-s10" },
    ]
  }
]

export function ChilliesVarietiesMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="relative group inline-block">
      <div className="flex items-center space-x-1 cursor-pointer">
        <span className="text-gray-700 hover:text-red-600 font-medium">Chillies Varieties</span>
        <ChevronRight className="h-4 w-4 text-gray-500" />
      </div>
      
      <div className="absolute left-0 mt-1 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {chilliesVarieties.map((variety) => (
            <div 
              key={variety.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(variety.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={variety.href}
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600",
                  "flex items-center justify-between"
                )}
              >
                {variety.name}
                {variety.subvarieties && (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </Link>
              
              {variety.subvarieties && hoveredItem === variety.name && (
                <div className="absolute left-full top-0 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {variety.subvarieties.map((subvariety) => (
                      <Link
                        key={subvariety.name}
                        href={subvariety.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                      >
                        {subvariety.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChilliesVarietiesMenu
