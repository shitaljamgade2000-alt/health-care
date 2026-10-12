import { useState } from 'react';
import './App.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Ultimate Care', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Hydration Support',
    description:
      'Personalized hydration services designed to support your wellness and help you feel your best.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Wellness Education',
    description:
      'Practical wellness education designed to help clients better understand and support their health.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Personalized Care',
    description:
      'A client-centered approach built around comfort, convenience, professional nursing care, and individual needs.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Concierge Convenience',
    description:
      'A mobile wellness experience designed to bring professional support closer to where you are.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  },
];

const featureItems = [
  'Nurse-led care',
  'Personalized wellness approach',
  'Convenient mobile experience',
  'Professional & compassionate service',
];

function LogoMark({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-mark flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_12px_30px_rgba(17,92,111,0.18)]">
        <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
          <circle cx="24" cy="24" r="20" fill="#143b5c" />
          <path
            d="M10.5 24h7l3.5-7.5 6.1 15 4.2-9h6.2"
            fill="none"
            stroke="#a9e5e2"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="leading-none">
        <div className={`text-xl font-semibold tracking-[-0.04em] ${light ? 'text-white' : 'text-slate-900'}`}>
          Ultimate Care
        </div>
        <div className={`mt-1 text-[10px] font-medium uppercase tracking-[0.28em] ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          Health &amp; Hydration
        </div>
      </div>
    </div>
  );
}

function PrimaryButton({ children, href, className = '', variant = 'dark' }) {
  const variantClasses =
    variant === 'light'
      ? 'bg-[#eaf7f7] text-[#102a43] shadow-[0_14px_28px_rgba(16,42,67,0.12)] hover:bg-white'
      : 'bg-[#143b5c] text-white shadow-[0_18px_34px_rgba(20,59,92,0.20)] hover:shadow-[0_22px_42px_rgba(20,59,92,0.26)]';

  return (
    <a
      href={href}
      className={`premium-button inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 hover:-translate-y-0.5 ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#b9dfe3] bg-white px-6 py-3 text-sm font-semibold text-[#143b5c] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec7ce] hover:bg-[#f3fbfb] ${className}`}
    >
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f8f8] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Ultimate Care home" className="flex items-center">
            <LogoMark />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#143b5c]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <PrimaryButton href="#contact">Book a Concierge Visit</PrimaryButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#9ecbd1] hover:text-[#143b5c] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#effaf9] hover:text-[#143b5c]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <PrimaryButton href="#contact" className="w-full">
                  Book a Concierge Visit
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-[#dceef0] blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#ecf7f7] blur-3xl" aria-hidden="true" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-xl">
              <p className="mb-5 inline-flex items-center rounded-full border border-[#b9dfe3] bg-[#eef9f9] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2a596b]">
                Nurse-led concierge wellness
              </p>

              <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.055em] text-[#0e2438] sm:text-6xl lg:text-[4.3rem]">
                Personalized Wellness.
                <span className="mt-2 block text-[#1b5470]">Delivered With Care.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Nurse-led concierge wellness and hydration services designed around your comfort, convenience, and well-being throughout Central Florida.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact">Book a Concierge Visit</PrimaryButton>
                <SecondaryButton href="#services">Explore Services</SecondaryButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:justify-self-end">
              <div className="absolute -left-7 top-8 h-20 w-20 rounded-full border border-[#bfe6ed] bg-white/55 backdrop-blur-sm" aria-hidden="true" />
              <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full border border-[#bfe6ed] bg-[#f2fbfc]" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-35px_rgba(15,41,64,0.42)]">
                <img
                  src="/hero-nurse.jpg"
                  alt="Nurse in teal scrubs"
                  className="h-[500px] w-full rounded-[24px] object-cover object-center"
                />
              </div>

              <div className="absolute -left-4 bottom-9 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_20px_40px_rgba(15,41,64,0.14)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dff5f3] text-xl text-[#1d5869]">
                    💧
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Hydration-first care</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">Comfort-focused wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3e7f8d]">Personalized wellness support</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.045em] text-[#0e2438] sm:text-5xl">
              Wellness Designed Around You
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Personalized care, professional guidance, and convenient wellness support — delivered with a concierge approach.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="service-card group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,41,64,0.07)]">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#0f2a3e]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-base font-semibold text-[#143b5c] transition hover:text-[#0d2a42]">
              Discover Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,_rgba(185,223,227,0.34),_transparent_32%),linear-gradient(180deg,_#f5f8f8,_#edf5f5)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#b9dfe3] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2a596b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55aab2]" aria-hidden="true" />
                Our approach
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.045em] text-[#0e2438] sm:text-5xl">
                Care that feels calm, personal, and genuinely supportive.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Every visit is shaped around you — bringing professional nursing care and a little more ease to your wellness routine.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Thoughtful',
                  description: 'An elevated wellness experience built around comfort, ease, and trust.',
                  detail: 'Comfort comes first',
                  icon: (
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                  ),
                },
                {
                  number: '02',
                  title: 'Professional',
                  description: 'Nurse-led guidance that respects your time, goals, and individual needs.',
                  detail: 'Nurse-led support',
                  featured: true,
                  icon: (
                    <>
                      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                      <path d="M12 8v8M8 12h8" />
                    </>
                  ),
                },
                {
                  number: '03',
                  title: 'Convenient',
                  description: 'Mobile, personalized care designed to meet you where you are.',
                  detail: 'Care on your schedule',
                  icon: (
                    <>
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className={`group relative min-h-[290px] overflow-hidden rounded-[28px] border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
                    item.featured
                      ? 'border-[#143b5c] bg-[#143b5c] text-white shadow-[0_28px_60px_-30px_rgba(20,59,92,0.6)] hover:shadow-[0_34px_70px_-30px_rgba(20,59,92,0.68)]'
                      : 'border-[#dce9eb] bg-white text-[#102c45] shadow-[0_20px_50px_-30px_rgba(15,41,64,0.28)] hover:shadow-[0_28px_60px_-30px_rgba(15,41,64,0.35)]'
                  }`}
                >
                  <span
                    className={`absolute -right-1 -top-5 select-none font-display text-[112px] leading-none tracking-[-0.08em] transition-transform duration-300 group-hover:scale-105 ${
                      item.featured ? 'text-white/[0.07]' : 'text-[#143b5c]/[0.045]'
                    }`}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.featured ? 'bg-white/10 text-[#a9e5e2]' : 'bg-[#eaf6f6] text-[#267181]'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="relative mt-7 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className={`relative mt-3 text-sm leading-6 ${item.featured ? 'text-slate-200' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                  <div className={`relative mt-7 flex items-center gap-2 border-t pt-5 text-xs font-semibold uppercase tracking-[0.14em] ${
                    item.featured ? 'border-white/15 text-[#a9e5e2]' : 'border-[#e6eff0] text-[#3e7f8d]'
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                    {item.detail}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#143b5c] transition-colors hover:text-[#3e7f8d]"
              >
                Explore our services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="why" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(185,223,227,0.38),_transparent_40%),linear-gradient(135deg,_rgba(245,250,250,0.92),_rgba(232,242,244,0.9))]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-[0_30px_70px_-38px_rgba(15,41,64,0.4)] lg:min-h-[620px]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                  alt="Nurse providing support in a calm wellness setting"
                  className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-[24px] object-cover"
                />
              </div>

              <div className="rounded-[32px] border border-[#dfeef1] bg-white/90 p-8 shadow-[0_24px_60px_-40px_rgba(15,41,64,0.32)] sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3f7f8d]">The Ultimate Care Experience</p>

                  <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.045em] text-[#0e2438] sm:text-5xl">
                    Professional Care. Personal Attention. Wherever You Need It.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Ultimate Care Health and Hydration is being built around a simple idea: wellness should feel convenient, personal, and genuinely caring.
                  </p>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Our nurse-led concierge approach combines professional nursing care, wellness education, personalized service, and thoughtful client support to create an elevated wellness experience.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {featureItems.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-base font-medium text-slate-700">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dff4f3] text-sm text-[#113f59]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <PrimaryButton href="#contact">Meet Ultimate Care</PrimaryButton>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-20 bg-[#081d2d] text-slate-200">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9edbda]">Elevated wellness support</p>
              <h3 className="mt-3 max-w-xl font-display text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                Ready for a more personalized wellness experience?
              </h3>
            </div>
            <PrimaryButton href="#home" variant="light">
              Book a Concierge Visit
            </PrimaryButton>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
            <div>
              <div className="mb-5">
                <LogoMark light={true} />
              </div>
              <p className="max-w-md text-base leading-7 text-slate-300">
                Nurse-led concierge wellness and hydration services serving adults throughout Central Florida.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Explore</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>Greater Orlando / Central Florida</li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Book a Visit
                  </a>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-3">
                    {['IG', 'FB', 'IN'].map((icon) => (
                      <span key={icon} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-white transition hover:border-[#a7dce0] hover:text-[#a7dce0]">
                        {icon}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Ultimate Care Health and Hydration, LLC. All rights reserved.</p>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              Services and availability may vary. Please consult a qualified healthcare professional regarding your individual healthcare needs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
