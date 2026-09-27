export function HeroBannerV2() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
              Precision in the Sky
            </h1>
            <p className="text-lg font-light text-muted-foreground max-w-md">
              Experience the pinnacle of aerial imaging technology. JCI drones combine cutting-edge innovation with
              elegant simplicity.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-light hover:opacity-90 transition-opacity">
                Explore
              </button>
              <button className="px-8 py-3 border border-foreground text-foreground text-sm font-light hover:bg-muted transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <img src="/premium-drone-in-sky-minimalist.jpg" alt="JCI Drone" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
