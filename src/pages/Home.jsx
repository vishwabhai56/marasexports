import { NavLink } from 'react-router-dom'
import { asset } from '../lib/asset.js'

const products = [
  { slug: 'fresh-vegetables', title: 'Fresh Vegetables', image: asset('images/product-vegetables.jpg') },
  { slug: 'fresh-fruits', title: 'Fresh Fruits', image: asset('images/product-fruits.jpg') },
  { slug: 'spices', title: 'Spices', image: asset('images/product-spices.jpg') },
  { slug: 'chillies', title: 'Dried Red Chillies', image: asset('images/product-chillies.jpg') },
  { slug: 'onions', title: 'Red Onions', image: asset('images/product-onions.jpg') },
  { slug: 'moringa', title: 'Moringa (Drumstick)', image: asset('images/product-moringa.jpg') },
  { slug: 'coconut', title: 'Coconut', image: asset('images/product-coconut.jpg') },
  { slug: 'green-leaf-sifter', title: 'Green Leaf Sifter', image: asset('images/product-leaf-plates.jpg') },
  { slug: 'palmyra-fibre', title: 'Palmyra Fibre', image: asset('images/product-palmyra-fibre.jpg') },
  { slug: 'groundnut', title: 'Groundnut', image: asset('images/product-groundnut.jpg') },
  { slug: 'cotton-fabric', title: 'Cotton Fabric', image: asset('images/product-cotton-fabric.jpg') },
]

const process = [
  { step: '01', title: 'Sourcing', body: 'Produce is sourced directly from growers and local markets around Tirunelveli, selected for freshness and grade.' },
  { step: '02', title: 'Quality Check', body: 'Every batch is sorted and inspected before packing, so what ships matches what was quoted.' },
  { step: '03', title: 'Packing & Documentation', body: 'Goods are packed for export and paired with the invoice, packing list, and certificates your destination port needs.' },
  { step: '04', title: 'Shipment', body: 'Cargo moves to port and onward by sea or air freight, with status shared with you until it clears at the other end.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={asset('images/hero-ship.jpg')}
          alt="Container ship loaded with cargo sailing at sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="container-px relative mx-auto max-w-7xl py-24 md:py-36">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">Overseas Exports &middot; Tirunelveli, India</p>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight md:text-6xl">
              Fresh from Indian soil,
              <span className="text-gold"> shipped to your port.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              MARA&rsquo;s Overseas Exports &amp; Co exports fresh vegetables, fresh fruits, and
              select agricultural produce from Tamil Nadu to buyers around the world.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="rounded-sm bg-gold px-7 py-3.5 font-body text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Get a Quote
              </NavLink>
              <NavLink
                to="/products"
                className="rounded-sm border border-white/20 px-7 py-3.5 font-body text-sm font-medium text-white transition-colors hover:border-white/50"
              >
                View Products
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCE STRIP */}
      <section className="bg-paper py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What we export</p>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              Fresh vegetables, fresh fruits, and Indian farm produce.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <NavLink
                key={p.slug}
                to="/products"
                className="group relative block h-64 overflow-hidden rounded-lg"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <span className="absolute bottom-5 left-5 font-display text-lg font-semibold text-white">
                  {p.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-sand py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">How an order moves</p>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              From the field to your port, in four stages.
            </h2>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-4">
            {process.map((p, i) => (
              <div
                key={p.step}
                className={`border-t-2 border-navy/15 py-6 pr-6 ${i === 0 ? '' : 'md:border-l md:border-t-0 md:pl-6'}`}
              >
                <span className="font-mono text-sm text-gold">{p.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-white">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-md font-display text-2xl font-semibold md:text-3xl">
            Looking to import fresh produce from India?
          </h2>
          <NavLink
            to="/contact"
            className="whitespace-nowrap rounded-sm bg-gold px-7 py-3.5 font-body text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
          </NavLink>
        </div>
      </section>
    </>
  )
}
