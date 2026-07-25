import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white/70">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11 shrink-0" mark="white" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">MARA&rsquo;S</span>
              <span className="block font-mono text-[10px] tracking-[0.25em] text-gold">OVERSEAS EXPORTS</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Exporters of fresh vegetables, fresh fruits, and Indian agricultural produce, sourced
            and shipped from Tamil Nadu to partners worldwide.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
            <li><NavLink to="/products" className="hover:text-white">Products</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Products</p>
          <ul className="space-y-2.5 text-sm">
            <li>Fresh Vegetables</li>
            <li>Fresh Fruits</li>
            <li>Spices</li>
            <li>Dried Red Chillies</li>
            <li>Red Onions</li>
            <li><NavLink to="/products" className="text-gold hover:text-white">View all products &rarr;</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Registered Office</p>
          <p className="text-sm leading-relaxed">
            No. 62, Vasantham Avenue, Thirumal Nagar,<br />
            Palayamkottai, Tirunelveli &ndash; 627007,<br />
            Tamil Nadu, India
          </p>
          <a href="mailto:mharbusiness123@gmail.com" className="mt-3 block font-mono text-sm text-gold">
            mharbusiness123@gmail.com
          </a>
          <a href="tel:+919360072348" className="mt-1 block font-mono text-sm text-gold">
            +91 93600 72348
          </a>
        </div>
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <span>&copy; {new Date().getFullYear()} MARA&rsquo;s Overseas Exports. All rights reserved.</span>
        <span className="font-mono">GSTIN: 33ACHFM9834F1Z2</span>
      </div>
    </footer>
  )
}
