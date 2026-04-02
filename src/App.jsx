import './App.css'

const services = [
  'Brake Repair & Inspection',
  'AC / Heater Service',
  'Check Engine Diagnostics',
  'Diesel & Fleet Repairs',
  'Oil Change & Maintenance',
  'Steering, Suspension & Alignment',
  'Transmission Service',
  'Exhaust & Cooling Systems'
]

const trustSignals = [
  { value: '4.9★', label: 'Average Rating' },
  { value: '1206+', label: 'Customer Reviews' },
  { value: 'Mon–Fri', label: '7:30 AM – 5:30 PM' },
  { value: '24/24', label: 'NAPA Peace of Mind Warranty' }
]

const testimonials = [
  {
    quote:
      'Very professional and direct. Staff is extremely friendly and goes out of the way to help customers.',
    name: 'Jacob L.'
  },
  {
    quote:
      'Honest feedback and practical solutions. Reasonable pricing and clear communication from start to finish.',
    name: 'L. Ingram'
  },
  {
    quote:
      'Good place to go with friendly staff. I would definitely recommend anyone to go there.',
    name: 'Kristy S.'
  }
]

function App() {
  return (
    <div className="dougs-app">
      <header className="top-nav">
        <div className="shell nav-shell">
          <a className="brand" href="#top" aria-label="Doug's Service Center home">
            <img src="/assets/logo.png" alt="Doug's Service Center logo" />
            <span>Doug&apos;s Service Center</span>
          </a>
          <a className="nav-call" href="tel:+17852467383">
            (785) 246-7383
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-bleed">
          <div className="hero-overlay" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="kicker">Topeka Auto Repair</p>
              <h1>High-trust repairs for busy drivers and hard-working vehicles.</h1>
              <p>
                Doug&apos;s Service Center delivers full-service auto care with modern diagnostics,
                trained technicians, and straightforward communication.
              </p>
              <div className="hero-cta-row">
                <a href="https://www.dougsservicetopeka.com/appointments" target="_blank" rel="noreferrer">
                  Schedule Appointment
                </a>
                <a className="ghost" href="tel:+17852467383">
                  Call Shop
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <img src="/assets/hero-shop.jpg" alt="Doug's Service Center shop exterior" />
            </div>
          </div>
        </section>

        <section className="signal-strip">
          <div className="shell signal-grid">
            {trustSignals.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="shell services-wrap" id="services">
          <div className="services-head">
            <p className="kicker">Capabilities</p>
            <h2>Coverage that goes far beyond oil changes.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <div key={service} className="service-card">
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bleed-dark">
          <div className="shell split-grid">
            <article className="split-card text">
              <p className="kicker">Why Drivers Choose Doug&apos;s</p>
              <h3>Factory-level tooling. Local accountability.</h3>
              <p>
                The team supports domestic, Asian, European, and light diesel vehicles with
                practical diagnostics, repair planning, and preventative maintenance.
              </p>
              <ul>
                <li>ASE-backed and NAPA AutoCare affiliated</li>
                <li>Transparent recommendations and repair priorities</li>
                <li>Trusted by Topeka families, commuters, and fleets</li>
              </ul>
            </article>
            <article className="split-card media">
              <img src="/assets/services.jpg" alt="Automotive service visuals" />
            </article>
          </div>
        </section>

        <section className="shell testimonials-wrap">
          <div className="services-head">
            <p className="kicker">Customer Voice</p>
            <h2>Real feedback from drivers in Topeka.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name}>
                <p>{item.quote}</p>
                <footer>— {item.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="shell contact-zone" id="contact">
          <article>
            <h3>Visit Doug&apos;s Service Center</h3>
            <p>601 Southwest Fairlawn Road, Topeka, KS 66606</p>
            <p>Mon – Fri: 7:30 AM – 5:30 PM</p>
            <p>
              <a href="tel:+17852467383">(785) 246-7383</a>
            </p>
            <div className="logo-row">
              <img src="/assets/napa.png" alt="NAPA AutoCare" />
              <img src="/assets/ase.png" alt="ASE Certified" />
              <img src="/assets/mwaca.png" alt="MWACA" />
            </div>
          </article>
          <img src="/assets/tips.jpg" alt="Repair tips and advice" className="contact-image" />
        </section>
      </main>

      <a className="mobile-sticky-cta" href="tel:+17852467383">
        Call Doug&apos;s Service Center
      </a>
    </div>
  )
}

export default App
