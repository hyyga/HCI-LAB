export function ExpertiseV2() {
  const expertise = [
    { title: "Precision Engineering", description: "Meticulously crafted for optimal performance" },
    { title: "Advanced Imaging", description: "4K and 8K camera systems with AI enhancement" },
    { title: "Durability", description: "Built to withstand demanding environments" },
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">Our Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <div key={idx} className="bg-background p-8 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-light text-foreground mb-3">{item.title}</h3>
              <p className="text-sm font-light text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
