import { Award } from "lucide-react"

const awards = [
  {
    year: "2024",
    title: "Best Drone Technology",
    organization: "Tech Innovation Awards",
  },
  {
    year: "2024",
    title: "Excellence in Aerial Imaging",
    organization: "Professional Cinematography Association",
  },
  {
    year: "2023",
    title: "Innovation Leader",
    organization: "Global Tech Summit",
  },
  {
    year: "2023",
    title: "Best in Class Performance",
    organization: "Drone Industry Review",
  },
]

export function AwardsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Award className="text-accent w-8 h-8 sm:w-8 sm:h-8" />
            Awards & Recognition
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Recognized globally for innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-background p-4 sm:p-6 rounded-lg border border-border text-center">
              <p className="text-accent font-bold text-base sm:text-lg mb-2">{award.year}</p>
              <h3 className="font-semibold text-sm sm:text-base mb-2">{award.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
