import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsHero } from "@/components/products/products-hero"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductsHero />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  )
}
