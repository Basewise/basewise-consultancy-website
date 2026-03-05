"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Referenties", href: "#referenties" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <header className="bg-navy text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home">
            <Image
              src="/Basewise_Consultancy.png"
              alt="Basewise Consultancy"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-medium font-[var(--font-sub)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-magenta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-navy-light border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-magenta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="home" className="bg-navy text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Hexagon decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 right-10 w-64 h-64 opacity-[0.04]" viewBox="0 0 100 100">
            <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.03]" viewBox="0 0 100 100">
            <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <svg className="absolute top-1/2 left-1/3 w-96 h-96 opacity-[0.02]" viewBox="0 0 100 100">
            <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          <svg className="absolute top-10 left-1/2 w-32 h-32 opacity-[0.05]" viewBox="0 0 100 100">
            <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="#3785bd" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-40 right-1/4 w-40 h-40 opacity-[0.04]" viewBox="0 0 100 100">
            <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="#D81B60" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              Simplifying complexity
            </h1>
            <h2 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              by Systems Engineering
            </h2>
            <p className="text-mid-gray text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Basewise Consultancy ondersteunt infrastructuur- en bouwprojecten
              in Nederland met Systems Engineering en AI. Wij maken complexiteit
              beheersbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-magenta hover:bg-magenta-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors font-[var(--font-sub)]"
              >
                Neem contact op
              </a>
              <a
                href="#diensten"
                className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors font-[var(--font-sub)]"
              >
                Onze diensten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIENSTEN ─── */}
      <section id="diensten" className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-14">
            Wat wij doen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Systems Engineering */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-light-gray hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-sub)] text-xl font-semibold text-navy mb-3">
                Systems Engineering
              </h3>
              <p className="text-dark-gray leading-relaxed">
                Wij begeleiden complexe infrastructuur- en bouwprojecten met
                bewezen Systems Engineering methoden. Van requirements tot
                verificatie, volgens INCOSE standaarden en UAV-GC
                contractraamwerken.
              </p>
            </div>

            {/* AI Implementor */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-light-gray hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a3.375 3.375 0 01-4.06.06L5 14.5m14 0v3.75a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 18.25V14.5" />
                </svg>
              </div>
              <h3 className="font-[var(--font-sub)] text-xl font-semibold text-navy mb-3">
                AI Implementor
              </h3>
              <p className="text-dark-gray leading-relaxed">
                Wij implementeren AI-oplossingen die aansluiten op uw
                projectprocessen. Van documentanalyse tot
                requirements-verificatie — slimme tools die uw team versterken.
              </p>
            </div>
          </div>

          {/* AI Platform CTA */}
          <div className="bg-accent rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-lg md:text-xl font-semibold text-center md:text-left">
              Ontdek het Basewise AI Platform
            </p>
            <a
              href="https://basewise.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-accent transition-colors font-[var(--font-sub)] whitespace-nowrap"
            >
              Ga naar basewise.ai
            </a>
          </div>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section id="werkwijze" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Onze aanpak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-light-gray" />

            {[
              { step: "1", title: "Analyse", desc: "Wij analyseren uw projectdocumentatie en requirements" },
              { step: "2", title: "Structureren", desc: "Complexiteit wordt helder via Systems Engineering" },
              { step: "3", title: "Implementeren", desc: "Methoden en tools worden ingepast in uw werkwijze" },
              { step: "4", title: "Borgen", desc: "Resultaten worden geborgd en overdraagbaar gemaakt" },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-magenta text-white flex items-center justify-center font-[var(--font-sub)] font-bold text-lg mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-[var(--font-sub)] text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVER ONS ─── */}
      <section id="over-ons" className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
            Over Basewise
          </h2>

          <p className="text-mid-gray text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Basewise Consultancy B.V. is een gespecialiseerd adviesbureau op het
            gebied van Systems Engineering voor de Nederlandse infrastructuur- en
            bouwsector. Wij combineren diepgaande vakkennis met innovatieve
            AI-tools om complexe projecten beheersbaar te maken. Basewise is
            onderdeel van Next Tide Group B.V.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-dark-gray rounded-xl p-6 text-center">
              <h3 className="font-[var(--font-sub)] text-lg font-semibold text-white mb-1">
                INCOSE gecertificeerd
              </h3>
            </div>
            <div className="bg-dark-gray rounded-xl p-6 text-center">
              <h3 className="font-[var(--font-sub)] text-lg font-semibold text-white mb-1">
                UAV-GC specialist
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REFERENTIES ─── */}
      <section id="referenties" className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Opdrachtgevers
          </h2>
          <p className="text-dark-gray text-center mb-12 max-w-2xl mx-auto">
            Wij werken voor toonaangevende opdrachtgevers in infrastructuur en
            bouw
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-mid-gray rounded-xl h-28 flex items-center justify-center text-dark-gray text-sm font-medium bg-white"
              >
                Klant logo
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-mid-gray italic">
            Referenties volgen binnenkort
          </p>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-14">
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Address */}
            <div className="text-dark-gray space-y-2">
              <h3 className="font-[var(--font-sub)] text-xl font-semibold text-navy mb-4">
                Contactgegevens
              </h3>
              <p className="font-semibold">Basewise Consultancy B.V.</p>
              <p>Chris Schutweg 3</p>
              <p>3632 JK Loenen aan de Vecht</p>
              <p>Nederland</p>
              <p className="mt-4 text-sm text-mid-gray">
                Onderdeel van Next Tide Group B.V.
              </p>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-white border border-light-gray rounded-xl p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-[var(--font-sub)] text-xl font-semibold text-navy mb-2">
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-dark-gray">
                    Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-medium text-dark-gray mb-1 font-[var(--font-sub)]">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mid-gray focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-gray mb-1 font-[var(--font-sub)]">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mid-gray focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="bericht" className="block text-sm font-medium text-dark-gray mb-1 font-[var(--font-sub)]">
                      Bericht
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-mid-gray focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent resize-none"
                      placeholder="Waar kunnen wij u mee helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-magenta hover:bg-magenta-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors font-[var(--font-sub)] w-full sm:w-auto"
                  >
                    Verstuur
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy text-mid-gray py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; 2025 Basewise Consultancy B.V. — onderdeel van Next Tide
            Group B.V.
          </p>
          <div className="flex gap-4">
            <a href="https://basewise.nl" className="hover:text-white transition-colors">
              basewise.nl
            </a>
            <span className="text-dark-gray">|</span>
            <a href="https://basewise.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              basewise.ai
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
