"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const droneTypes = [
  {
    type: "Professional",
    drones: [
      {
        id: 1,
        name: "SkyVision X7",
        description: "Flagship 8K drone with 60-minute flight time and advanced stabilization.",
        specs: "8K Camera | 60min Flight | 4K Transmission",
        image: "/professional-drone-camera.jpg",
      },
      {
        id: 2,
        name: "CinemaMax Pro",
        description: "Purpose-built for cinematography with RAW video recording capabilities.",
        specs: "6K RAW | 45min Flight | Professional Grade",
        image: "/professional-drone-camera.jpg",
      },
    ],
  },
  {
    type: "Consumer",
    drones: [
      {
        id: 3,
        name: "AeroCapture Pro",
        description: "Mid-range drone with intelligent tracking and 4K stabilized camera.",
        specs: "4K Camera | 30min Flight | Smart Tracking",
        image: "/compact-drone.jpg",
      },
      {
        id: 4,
        name: "CloudFlyer Lite",
        description: "Lightweight and portable, perfect for beginners and casual enthusiasts.",
        specs: "2.7K Camera | 25min Flight | Portable",
        image: "/small-portable-drone.jpg",
      },
    ],
  },
  {
    type: "Industrial",
    drones: [
      {
        id: 5,
        name: "IndustrialMax",
        description: "Heavy-duty drone for inspection, mapping, and industrial applications.",
        specs: "Thermal | 90min Flight | Payload Capacity",
        image: "/industrial-drone.jpg",
      },
      {
        id: 6,
        name: "RescueBot",
        description: "Specialized for search and rescue with thermal imaging and long range.",
        specs: "Thermal | 120min Flight | Long Range",
        image: "/rescue-drone-thermal.jpg",
      },
    ],
  },
]

export function ProductsGrid() {
  const [expandedType, setExpandedType] = useState<string | null>("Professional")

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {droneTypes.map((category) => (
            <div key={category.type} className="border border-border rounded-lg overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => setExpandedType(expandedType === category.type ? null : category.type)}
                className="w-full bg-card p-6 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <h2 className="text-2xl font-bold text-foreground">{category.type} Drones</h2>
                <ChevronDown
                  size={24}
                  className={`transition-transform ${expandedType === category.type ? "rotate-180" : ""}`}
                />
              </button>

              {/* Category Content */}
              {expandedType === category.type && (
                <div className="bg-background p-6 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.drones.map((drone) => (
                      <div
                        key={drone.id}
                        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={drone.image || "/placeholder.svg"}
                          alt={drone.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{drone.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{drone.description}</p>
                          <p className="text-xs text-accent font-semibold mb-4">{drone.specs}</p>
                          <Link
                            href="/store"
                            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          >
                            View in Store
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
