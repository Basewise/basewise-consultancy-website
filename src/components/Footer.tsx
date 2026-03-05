import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">
              <span className="text-accent">Base</span>wise
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Systems Engineering consultancy voor infrastructuur en bouw in
              Nederland.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Navigatie</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-accent transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-accent transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@basewise.nl</li>
              <li>Nederland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Basewise Consultancy B.V. Alle
          rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
