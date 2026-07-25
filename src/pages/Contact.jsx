import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const COMPANY_EMAIL = 'mharbusiness123@gmail.com'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    product: searchParams.get('product') || '',
    message: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = `Quote request${form.product ? ` — ${form.product}` : ''} from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '-'}`,
      `Email: ${form.email}`,
      `Product: ${form.product || '-'}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Tell us what you need, and where it&rsquo;s going.
          </h1>
          <p className="mt-6 max-w-xl text-white/60">
            Send your requirement below and it will open as an email addressed to us — or write
            to us directly at{' '}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold">
              {COMPANY_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            {sent ? (
              <div className="rounded-lg border border-gold/30 bg-gold/5 p-10">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">Almost there</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
                  Your email app should now be open.
                </h2>
                <p className="mt-3 text-slate">
                  If it didn&rsquo;t open automatically, email us directly at{' '}
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold">{COMPANY_EMAIL}</a> with
                  your requirement and we&rsquo;ll get back to you with a quote.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-sm border border-navy/15 px-5 py-2.5 font-body text-sm font-medium text-navy transition-colors hover:border-navy/40"
                >
                  Edit and resend
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">Full name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-navy">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-navy">Product</label>
                  <input
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Fresh Vegetables, Groundnut, etc."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-navy">Requirement details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Quantity, packing preference, destination port, target date..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-sm bg-navy px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-steel"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>

          <div>
            <p className="eyebrow mb-5">Registered Office</p>
            <div className="py-2">
              <h3 className="font-display text-lg font-semibold text-navy">MARA&rsquo;s Overseas Exports</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                No. 62, Vasantham Avenue, Thirumal Nagar,<br />
                Palayamkottai, Tirunelveli &ndash; 627007,<br />
                Tamil Nadu, India
              </p>
              <a href={`mailto:${COMPANY_EMAIL}`} className="mt-4 block font-mono text-sm text-gold">
                {COMPANY_EMAIL}
              </a>
              <a href="tel:+919360072348" className="mt-1 block font-mono text-sm text-gold">
                +91 93600 72348
              </a>
              <p className="mt-4 text-xs text-slate">
                Attn: Maharaja &middot; GSTIN 33ACHFM9834F1Z2
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
