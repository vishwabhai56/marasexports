const values = [
  { title: 'Quality first', body: 'Every consignment is sorted and graded before packing, so what you receive matches what was quoted.' },
  { title: 'One point of contact', body: 'You deal directly with us from quote to shipment — no agents, no handoffs.' },
  { title: 'Transparent pricing', body: 'Pricing is quoted against your exact requirement, with no hidden costs added later.' },
]

export default function About() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-5">About Us</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            An overseas export house built around fresh Indian produce.
          </h1>
          <p className="mt-6 max-w-xl text-white/60">
            MARA&rsquo;s Overseas Exports &amp; Co is based in Tirunelveli, Tamil Nadu, sourcing
            and exporting fresh vegetables, fresh fruits, and select agricultural produce to
            buyers overseas.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div className="rounded-lg border border-ink/8 bg-white p-10">
            <p className="eyebrow mb-4">Vision</p>
            <p className="font-display text-xl leading-relaxed text-navy">
              To become one of the world&rsquo;s most trusted exporters of premium Indian
              agricultural products, recognized for exceptional quality, reliability, and
              customer satisfaction.
            </p>
          </div>
          <div className="rounded-lg border border-ink/8 bg-white p-10">
            <p className="eyebrow mb-4">Mission</p>
            <p className="font-display text-xl leading-relaxed text-navy">
              We are committed to sourcing the finest products, maintaining rigorous quality
              standards, ensuring timely deliveries, and building long-term partnerships through
              transparency, integrity, and customer-centric service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-4">How we operate</p>
          <h2 className="mb-14 font-display text-3xl font-semibold text-navy md:text-4xl">
            What we hold ourselves to.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-4">Registered Office</p>
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            No. 62, Vasantham Avenue, Thirumal Nagar, Palayamkottai,<br className="hidden md:block" />
            Tirunelveli &ndash; 627007, Tamil Nadu, India
          </h2>
        </div>
      </section>
    </>
  )
}
