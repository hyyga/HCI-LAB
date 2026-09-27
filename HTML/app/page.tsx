import { HeaderV2 } from "@/components/header-v2"
import { FooterV2 } from "@/components/footer-v2"
import { HeroBannerV2 } from "@/components/home-v2/hero-banner-v2"
import { ProductShowcaseV2 } from "@/components/home-v2/product-showcase-v2"
import { AwardsV2 } from "@/components/home-v2/awards-v2"
import { ExpertiseV2 } from "@/components/home-v2/expertise-v2"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderV2 />
      <main className="flex-1">
        <HeroBannerV2 />
        <ProductShowcaseV2 />
        <AwardsV2 />
        <ExpertiseV2 />
      </main>
      <FooterV2 />
    </div>
  )
}
