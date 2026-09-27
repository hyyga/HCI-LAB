"use client"

import { useState } from "react"
import Link from "next/link"

export function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-light tracking-widest text-foreground">
          JCI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-light hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-light hover:text-accent transition-colors">
            Products
          </Link>
          <Link href="/forum" className="text-sm font-light hover:text-accent transition-colors">
            Forum
          </Link>
          <Link href="/store" className="text-sm font-light hover:text-accent transition-colors">
            Store
          </Link>
          <Link href="/contact" className="text-sm font-light hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-sm font-light hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/products" className="block text-sm font-light hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/forum" className="block text-sm font-light hover:text-accent transition-colors">
              Forum
            </Link>
            <Link href="/store" className="block text-sm font-light hover:text-accent transition-colors">
              Store
            </Link>
            <Link href="/contact" className="block text-sm font-light hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
