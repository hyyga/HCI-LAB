"use client"

import { useState } from "react"
import { Eye, Heart, Share2 } from "lucide-react"

const categories = ["All", "Tips & Tricks", "Technical Support", "Showcase", "News", "General Discussion"]

const forumPosts = [
  {
    id: 1,
    category: "Tips & Tricks",
    creator: "ProFilmmaker_John",
    isVerified: true,
    title: "Mastering Cinematic Movements with SkyVision X7",
    description:
      "Learn advanced camera movements and techniques to create professional-grade cinematic footage. I'll share my workflow and settings.",
    views: 2543,
    likes: 487,
    shares: 124,
  },
  {
    id: 2,
    category: "Technical Support",
    creator: "TechSupport_Sarah",
    isVerified: true,
    title: "Troubleshooting Connection Issues",
    description:
      "Common connection problems and their solutions. If you're experiencing connectivity issues, check these steps first.",
    views: 1876,
    likes: 342,
    shares: 89,
  },
  {
    id: 3,
    category: "Showcase",
    creator: "AerialPhotographer_Mike",
    isVerified: true,
    title: "Stunning Landscape Photography Collection",
    description:
      "Sharing my latest aerial photography project from the Rocky Mountains. Captured with CloudFlyer Lite in challenging weather.",
    views: 3421,
    likes: 892,
    shares: 256,
  },
  {
    id: 4,
    category: "News",
    creator: "JCI_Official",
    isVerified: true,
    title: "New Firmware Update Released",
    description:
      "Version 3.2 is now available with improved stability and new intelligent tracking features. Download from your dashboard.",
    views: 5234,
    likes: 1203,
    shares: 445,
  },
  {
    id: 5,
    category: "General Discussion",
    creator: "DroneEnthusiast_Alex",
    isVerified: false,
    title: "Best Accessories for Beginners",
    description:
      "What accessories would you recommend for someone just starting with drones? Looking for practical suggestions.",
    views: 1234,
    likes: 267,
    shares: 78,
  },
  {
    id: 6,
    category: "Tips & Tricks",
    creator: "BatteryExpert_Lisa",
    isVerified: true,
    title: "Maximizing Battery Life in Cold Weather",
    description:
      "Tips and tricks for maintaining optimal battery performance during winter flights. Includes storage and charging best practices.",
    views: 2876,
    likes: 654,
    shares: 198,
  },
]

export function ForumContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? forumPosts : forumPosts.filter((post) => post.category === selectedCategory)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Post Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    {post.isVerified && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{post.title}</h3>
                  <p className="text-muted-foreground mb-3">{post.description}</p>
                  <p className="text-sm text-muted-foreground">by {post.creator}</p>
                </div>

                {/* Stats */}
                <div className="flex flex-row md:flex-col gap-4 md:gap-3 md:text-right md:min-w-max">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye size={16} />
                    <span className="text-sm">{post.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Heart size={16} />
                    <span className="text-sm">{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Share2 size={16} />
                    <span className="text-sm">{post.shares.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
