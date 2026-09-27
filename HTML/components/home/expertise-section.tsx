import { Zap, Camera, Shield, Cpu } from "lucide-react"

const expertise = [
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "Cutting-edge AI and machine learning integration for intelligent flight and imaging.",
  },
  {
    icon: Camera,
    title: "Professional Imaging",
    description: "8K cameras with advanced stabilization for cinema-quality aerial footage.",
  },
  {
    icon: Shield,
    title: "Safety & Reliability",
    description: "Military-grade components and redundant systems for mission-critical operations.",
  },
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Seamless connectivity with industry-standard software and platforms.",
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Expertise</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Decades of innovation combined with cutting-edge technology to deliver the best aerial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card p-4 sm:p-6 rounded-lg border border-border text-center hover:border-primary transition-colors"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
