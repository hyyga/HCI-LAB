export function AwardsV2() {
  const awards = [
    { year: "2024", title: "Best Innovation Award" },
    { year: "2024", title: "Design Excellence" },
    { year: "2023", title: "Technology Leader" },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">Recognition</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-light text-accent mb-2">{award.year}</div>
              <p className="text-sm font-light text-foreground">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
