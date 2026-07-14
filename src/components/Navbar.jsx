import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-11 w-11 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-navy">
              MARA&rsquo;S
            </span>
            <span className="block font-mono text-[10px] tracking-[0.25em] text-gold">
              OVERSEAS EXPORTS
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors ${
                  isActive ? 'text-navy' : 'text-slate hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-sm bg-navy px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-steel"
          >
            Request a Quote
          </NavLink>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-ink/8 bg-paper md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="container-px py-4 font-body text-sm font-medium text-slate hover:text-navy"
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="container-px py-4 font-body text-sm font-medium text-gold"
          >
            Request a Quote →
          </NavLink>
        </nav>
      )}
    </header>
  )
}
