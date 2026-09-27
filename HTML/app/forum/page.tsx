import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ForumHero } from "@/components/forum/forum-hero"
import { ForumContent } from "@/components/forum/forum-content"

export default function ForumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ForumHero />
        <ForumContent />
      </main>
      <Footer />
    </div>
  )
}
