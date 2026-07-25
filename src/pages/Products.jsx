import { NavLink } from 'react-router-dom'
import { asset } from '../lib/asset.js'

const products = [
  {
    title: 'Fresh Vegetables',
    image: asset('images/product-vegetables.jpg'),
    body: 'A range of fresh vegetables sourced and graded to order, packed for export in line with buyer specifications.',
  },
  {
    title: 'Fresh Fruits',
    image: asset('images/product-fruits.jpg'),
    body: 'Seasonal fresh fruit sourced directly from growers, sorted and packed to meet export quality standards.',
  },
  {
    title: 'Green Leaf Sifter',
    image: asset('images/product-leaf-plates.jpg'),
    body: 'Natural leaf-based sifting and serving products, made from locally sourced leaves.',
  },
  {
    title: 'Palmyra Fibre',
    image: asset('images/product-palmyra-fibre.jpg'),
    body: 'Palmyra palm fibre for brooms and allied products, sourced from local processors.',
  },
  {
    title: 'Groundnut',
    image: asset('images/product-groundnut.jpg'),
    body: 'Quality-graded groundnut, cleaned and packed to order for export.',
  },
  {
    title: 'Dried Red Chillies',
    image: asset('images/product-chillies.jpg'),
    body: 'Sun-dried red chillies graded for colour and pungency, cleaned and packed to order.',
  },
  {
    title: 'Red Onions',
    image: asset('images/product-onions.jpg'),
    body: 'Firm, export-grade red onions sourced fresh and packed to buyer specification.',
  },
  {
    title: 'Moringa (Drumstick)',
    image: asset('images/product-moringa.jpg'),
    body: 'Fresh moringa pods sourced and packed to order for export.',
  },
  {
    title: 'Coconut',
    image: asset('images/product-coconut.jpg'),
    body: 'Fresh whole coconuts, sorted and packed to meet export quality standards.',
  },
  {
    title: 'Spices',
    image: asset('images/product-spices.jpg'),
    body: 'Whole and ground Indian spices sourced and packed to order for export.',
  },
  {
    title: 'Cotton Fabric',
    image: asset('images/product-cotton-fabric.jpg'),
    body: 'Woven cotton fabric in a range of colours and patterns, sourced from local mills.',
  },
]

export default function Products() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-5">Products</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Currently available for export.
          </h1>
          <p className="mt-6 max-w-xl text-white/60">
            Pricing is quoted per order based on quantity, grade, and destination. Send us your
            requirement and we&rsquo;ll get back with a quote.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="flex flex-col overflow-hidden rounded-lg border border-ink/8 bg-white">
                <img src={p.image} alt={p.title} className="h-52 w-full object-cover" />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{p.body}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-5">
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-slate">
                      Price on request
                    </span>
                    <NavLink
                      to={`/contact?product=${encodeURIComponent(p.title)}`}
                      className="rounded-sm bg-navy px-4 py-2.5 font-body text-xs font-semibold text-white transition-colors hover:bg-steel"
                    >
                      Get Best Quote
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
            Don&rsquo;t see what you&rsquo;re looking for?
          </h2>
          <NavLink
            to="/contact"
            className="whitespace-nowrap rounded-sm bg-gold px-7 py-3.5 font-body text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Ask Us Directly
          </NavLink>
        </div>
      </section>
    </>
  )
}
