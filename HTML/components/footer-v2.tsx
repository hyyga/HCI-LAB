import Link from "next/link"

export function FooterV2() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-light tracking-widest mb-4">JCI</h3>
            <p className="text-xs font-light opacity-75">Premium drone and camera technology</p>
          </div>
          <div>
            <h4 className="text-xs font-light tracking-widest mb-4 opacity-75">PRODUCTS</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/products" className="hover:opacity-100 opacity-75 transition-opacity">
                  All Drones
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-100 opacity-75 transition-opacity">
                  Professional
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-100 opacity-75 transition-opacity">
                  Consumer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-light tracking-widest mb-4 opacity-75">COMPANY</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/forum" className="hover:opacity-100 opacity-75 transition-opacity">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 opacity-75 transition-opacity">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-light tracking-widest mb-4 opacity-75">LEGAL</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#" className="hover:opacity-100 opacity-75 transition-opacity">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 opacity-75 transition-opacity">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-xs font-light opacity-75">
          <p>&copy; 2025 JCI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
