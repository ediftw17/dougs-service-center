import { GrainGradient } from '@paper-design/shaders-react'

const trustSignals = [
  { value: '4.9 / 5', label: 'Average Rating', source: '1,206 reviews' },
  { value: 'Mon–Fri', label: 'Shop Hours', source: '7:30 AM – 5:30 PM' },
  { value: '24/24', label: 'NAPA Peace of Mind', source: 'Months / Miles' },
  { value: '601 SW Fairlawn Rd', label: 'Topeka Location', source: 'KS 66606' }
]

const primaryServices = [
  { name: 'Air Conditioning Service', href: 'https://www.dougsservicetopeka.com/air-conditioning-service' },
  { name: 'Brake Repair', href: 'https://www.dougsservicetopeka.com/brake-repair' },
  { name: 'Engine Service', href: 'https://www.dougsservicetopeka.com/engine-service' },
  { name: 'Electrical & Wiring Repair', href: 'https://www.dougsservicetopeka.com/electrical-wiring-system-repair' },
  { name: 'Fleet Service & Repair', href: 'https://www.dougsservicetopeka.com/fleet-service-repair' },
  { name: 'Fuel Injection Service', href: 'https://www.dougsservicetopeka.com/fuel-injection-service' },
  { name: 'Light Diesel Service', href: 'https://www.dougsservicetopeka.com/light-diesel-service' },
  { name: 'Oil Change', href: 'https://www.dougsservicetopeka.com/oil-change' },
  { name: 'Radiator Service', href: 'https://www.dougsservicetopeka.com/radiator-service' },
  { name: 'Transmission Service', href: 'https://www.dougsservicetopeka.com/transmission-service' },
  { name: 'Wheel Alignment', href: 'https://www.dougsservicetopeka.com/wheel-alignment' },
  { name: 'Preventative Maintenance', href: 'https://www.dougsservicetopeka.com/preventative-maintenance' }
]

const reasons = [
  'Factory-level tools and diagnostic equipment for domestic, Asian, and European vehicles.',
  'Ongoing technician training including GM, NAPA AutoCare, and Vision high-tech training.',
  'Capability for both gasoline and light diesel vehicles including Ford, Chevy, and Dodge.',
  'Long-tenured team and stable shop culture focused on honest recommendations.'
]

const testimonials = [
  {
    text: 'Very professional and direct. Staff is extremely friendly and goes out of their way to help customers.',
    name: 'Jacob L.',
    source: 'Website review'
  },
  {
    text: 'He took the time to explain the issues and provided multiple options for moving forward.',
    name: 'L. Ingram',
    source: 'Email review'
  },
  {
    text: 'Good place to go, friendly staff. I would definitely recommend anyone to go there.',
    name: 'Kristy S.',
    source: 'Website review'
  },
  {
    text: 'Doug did exactly what I needed, at a fair price, and got it done quickly.',
    name: 'C. Renfro',
    source: 'Google review'
  }
]

const resourceLinks = [
  { label: 'Schedule Appointment', href: 'https://www.dougsservicetopeka.com/appointments' },
  { label: 'Specials / Coupons', href: 'https://www.dougsservicetopeka.com/coupons' },
  { label: 'Warranty Details', href: 'https://www.dougsservicetopeka.com/warranty' },
  { label: 'Tips & Advice', href: 'https://www.dougsservicetopeka.com/tip-advice' },
  { label: 'Read All Reviews', href: 'https://www.dougsservicetopeka.com/reviews' }
]

function App() {
  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-100">
      <header className="border-b border-zinc-800 bg-[#06070a]">
        <div className="mx-auto flex max-w-[1580px] items-center justify-between px-4 py-4 md:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Doug's Service Center home">
            <img src="/assets/logo.png" alt="Doug's Service Center logo" className="h-11 w-11 object-contain" />
            <div>
              <p className="m-0 text-[11px] uppercase tracking-[0.22em] text-zinc-400">Topeka Auto Repair</p>
              <p className="m-0 text-lg font-semibold tracking-tight">Doug&apos;s Service Center</p>
            </div>
          </a>
          <div className="text-right">
            <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-zinc-400">Call the shop</p>
            <a className="m-0 text-base font-semibold text-[#ff6c52]" href="tel:+17852716757">
              (785) 271-6757
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] overflow-hidden border-b border-zinc-800">
          <GrainGradient
            style={{ width: '100%', height: '100%' }}
            colorBack="hsl(223, 23%, 5%)"
            softness={0.75}
            intensity={0.35}
            noise={0}
            shape="corners"
            speed={0}
            colors={['hsl(10, 92%, 58%)', 'hsl(30, 96%, 53%)', 'hsl(352, 86%, 54%)']}
          />
          <div className="absolute inset-0 bg-[rgba(6,7,10,0.84)]" />
        </div>

        <section className="mx-auto grid max-w-[1580px] gap-8 px-4 pb-10 pt-10 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pt-14">
          <article className="relative z-10 border border-zinc-700 bg-[rgba(8,9,12,0.74)] p-6 md:p-8">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8f7b]">Source-faithful rebuild</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Honest diagnostics. Full-service repair coverage.
            </h1>
            <p className="mt-4 max-w-[68ch] text-base leading-7 text-zinc-300">
              Doug&apos;s Service Center positions itself as a lifelong-learning shop with modern tooling,
              transparent communication, and practical recommendations for Topeka and Auburn drivers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="border border-[#ff6c52] bg-[#ff6c52] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
                href="https://www.dougsservicetopeka.com/appointments"
                target="_blank"
                rel="noreferrer"
              >
                Book Appointment
              </a>
              <a
                className="border border-zinc-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-100"
                href="tel:+17852716757"
              >
                Call Now
              </a>
            </div>
          </article>

          <figure className="relative z-10 border border-zinc-700 bg-black">
            <img
              src="/assets/hero-shop.jpg"
              alt="Doug's Service Center exterior"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </figure>
        </section>

        <section className="border-y border-zinc-800 bg-[#090b10]">
          <div className="mx-auto grid max-w-[1580px] grid-cols-2 gap-px bg-zinc-800 px-4 md:grid-cols-4 md:px-8">
            {trustSignals.map((item) => (
              <article key={item.label} className="bg-[#0e1117] p-4 md:p-5">
                <p className="m-0 text-xl font-semibold leading-none text-zinc-100">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">{item.label}</p>
                <p className="mt-1 text-sm text-zinc-300">{item.source}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1580px] px-4 py-14 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Services</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Repair depth from the source site</h2>
            </div>
            <a
              className="border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-200"
              href="https://www.dougsservicetopeka.com/services"
              target="_blank"
              rel="noreferrer"
            >
              View Full Catalog
            </a>
          </div>
          <div className="mt-8 grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {primaryServices.map((service) => (
              <a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0d1016] px-4 py-4 text-sm font-medium text-zinc-100"
              >
                {service.name}
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-[#0a0d12]">
          <div className="mx-auto grid max-w-[1580px] gap-8 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <article>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Why drivers choose Doug&apos;s</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Factory-level capability with local accountability</h3>
              <ul className="mt-6 space-y-4 pl-5 text-zinc-200">
                {reasons.map((reason) => (
                  <li key={reason} className="leading-7">
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-4">
                <img src="/assets/napa.png" alt="NAPA AutoCare" className="h-10 w-auto border border-zinc-700 bg-white p-1" />
                <img src="/assets/ase.png" alt="ASE Certified" className="h-10 w-auto border border-zinc-700 bg-white p-1" />
                <img src="/assets/mwaca.png" alt="MWACA" className="h-10 w-auto border border-zinc-700 bg-white p-1" />
              </div>
            </article>
            <figure className="border border-zinc-700 bg-black">
              <img src="/assets/services.jpg" alt="Automotive service and diagnostics" className="h-full min-h-[360px] w-full object-cover" />
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-[1580px] px-4 py-14 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Customer Testimonials</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Real feedback from Topeka drivers</h3>
            </div>
            <a
              className="border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-200"
              href="https://www.dougsservicetopeka.com/reviews"
              target="_blank"
              rel="noreferrer"
            >
              See all reviews
            </a>
          </div>
          <div className="mt-8 grid gap-px bg-zinc-800 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="bg-[#0e1117] p-6">
                <p className="m-0 text-base leading-7 text-zinc-200">“{testimonial.text}”</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#ff8f7b]">{testimonial.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{testimonial.source}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 bg-[#090b10]">
          <div className="mx-auto grid max-w-[1580px] gap-8 px-4 py-12 md:grid-cols-[1fr_1fr] md:px-8">
            <article className="border border-zinc-700 p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Visit the shop</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Doug&apos;s Service Center</h3>
              <p className="mt-4 text-zinc-300">601 Southwest Fairlawn Road, Topeka, KS 66606</p>
              <p className="mt-2 text-zinc-300">Mon – Fri: 7:30 AM – 5:30 PM</p>
              <p className="mt-2 text-zinc-300">
                Phone:{' '}
                <a href="tel:+17852716757" className="font-semibold text-[#ff8f7b]">
                  (785) 271-6757
                </a>
              </p>
              <a
                href="https://maps.google.com/?q=601+Southwest+Fairlawn+Road,+Topeka,+KS+66606"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block border border-zinc-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100"
              >
                Get Directions
              </a>
            </article>

            <article className="border border-zinc-700 p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Resources</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Quick links from the original site</h3>
              <ul className="mt-5 grid gap-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border border-zinc-700 px-3 py-2 text-sm text-zinc-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-[#050608]">
        <div className="mx-auto flex max-w-[1580px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs uppercase tracking-[0.16em] text-zinc-500 md:px-8">
          <span>Nule Pipeline Build</span>
          <span>Doug&apos;s Service Center • Topeka, Kansas</span>
        </div>
      </footer>
    </div>
  )
}

export default App
