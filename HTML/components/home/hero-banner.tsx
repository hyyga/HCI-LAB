import Link from "next/link"

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold opacity-90">INNOVATION IN THE SKY</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                The Future of Aerial Imaging
              </h1>
            </div>
            <p className="text-base sm:text-lg opacity-90 max-w-md text-balance">
              Experience cutting-edge drone technology that revolutionizes how professionals capture the world from
              above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Link
                href="/products"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center text-sm sm:text-base"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 md:h-full">
            <img
              src="/drone-in-sky.png"
              alt="JCI SkyVision X7 Drone"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
