export function ProductShowcaseV2() {
  const products = [
    { name: "SkyVision X7", category: "Professional", price: "$4,999" },
    { name: "AirPro Max", category: "Professional", price: "$3,499" },
    { name: "CloudCapture", category: "Consumer", price: "$1,299" },
    { name: "SnapDrone", category: "Consumer", price: "$699" },
    { name: "IndustrialPro", category: "Industrial", price: "$8,999" },
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Our Collection</h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Carefully curated drone technology for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-muted mb-4 flex items-center justify-center">
                <img
                  src={`/.jpg?height=160&width=160&query=${product.name} drone`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-light text-foreground mb-1">{product.name}</h3>
              <p className="text-xs text-muted-foreground font-light mb-3">{product.category}</p>
              <p className="text-lg font-light text-accent mb-4">{product.price}</p>
              <button className="w-full py-2 border border-foreground text-foreground text-xs font-light hover:bg-foreground hover:text-background transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
