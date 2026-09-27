import { Download, ShoppingCart, MapPin } from "lucide-react"

const storeChannels = [
  {
    icon: Download,
    title: "JCI Official App",
    description: "Download our mobile app for exclusive deals and easy ordering.",
    links: [
      { name: "Google Play", url: "#" },
      { name: "App Store", url: "#" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Shop on major e-commerce platforms for convenient delivery.",
    links: [
      { name: "Amazon", url: "#" },
      { name: "eBay", url: "#" },
      { name: "Alibaba", url: "#" },
      { name: "Local Retailers", url: "#" },
    ],
  },
  {
    icon: MapPin,
    title: "Official JCI Store",
    description: "Visit our flagship stores for hands-on experience and expert advice.",
    links: [
      { name: "New York", url: "#" },
      { name: "Los Angeles", url: "#" },
      { name: "London", url: "#" },
      { name: "Tokyo", url: "#" },
    ],
  },
]

export function StoreLocations() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop with Confidence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from multiple convenient shopping options. All products come with official warranty and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <div className="space-y-2">
                  {channel.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="block text-primary hover:text-accent font-semibold transition-colors"
                    >
                      → {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to help you find the perfect drone and answer any questions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
