import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">JCI</h3>
            <p className="text-xs sm:text-sm opacity-90">
              Revolutionizing aerial imaging with cutting-edge drone technology.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products" className="hover:opacity-80">
                  Drones
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-80">
                  Cameras
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-80">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="hover:opacity-80">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:opacity-80">
                  Community Forum
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:opacity-80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm opacity-90">
          <p>&copy; 2025 JCI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
