import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StoreHero } from "@/components/store/store-hero"
import { StoreLocations } from "@/components/store/store-locations"

export default function StorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StoreHero />
        <StoreLocations />
      </main>
      <Footer />
    </div>
  )
}
