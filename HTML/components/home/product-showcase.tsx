import Link from "next/link"

const products = [
  {
    id: 1,
    name: "SkyVision X7",
    description: "Flagship model with 8K camera and 60-minute flight time. Perfect for professional cinematography.",
    image: "/professional-drone-camera.jpg",
  },
  {
    id: 2,
    name: "AeroCapture Pro",
    description: "Mid-range drone with 4K stabilized camera and intelligent tracking features.",
    image: "/compact-drone.jpg",
  },
  {
    id: 3,
    name: "CloudFlyer Lite",
    description: "Lightweight and portable drone ideal for beginners and casual enthusiasts.",
    image: "/small-portable-drone.jpg",
  },
  {
    id: 4,
    name: "IndustrialMax",
    description: "Heavy-duty drone designed for industrial inspection and mapping applications.",
    image: "/industrial-drone.jpg",
  },
  {
    id: 5,
    name: "RescueBot",
    description: "Specialized drone for search and rescue missions with thermal imaging.",
    image: "/rescue-drone-thermal.jpg",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Drone Collection</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover our range of cutting-edge drones designed for every need, from professional filmmaking to rescue
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm">{product.description}</p>
                <Link
                  href="/store"
                  className="inline-block px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-xs sm:text-sm"
                >
                  View in Store
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
