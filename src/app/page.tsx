import Link from "next/link";

const diensten = [
  {
    title: "Systems Engineering",
    description:
      "Gestructureerd ontwerp en analyse van complexe systemen volgens INCOSE en ISO 15288 standaarden.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Requirements Engineering",
    description:
      "Van klantwensen naar verifieerbare eisen. Compleet requirementsmanagement binnen UAV-GC en Design & Construct contracten.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Contractbegeleiding",
    description:
      "Begeleiding bij UAV-GC contracten, van vraagspecificatie tot oplevering. Structuur in complexe bouwcontracten.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complexe projecten.{" "}
              <span className="text-accent">Helder gestructureerd.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Basewise Consultancy ondersteunt infrastructuur- en bouwprojecten in
              Nederland met Systems Engineering. Wij maken complexiteit
              beheersbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Neem contact op
              </Link>
              <Link
                href="/diensten"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Onze diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten samenvatting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Wat wij doen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Met bewezen methoden en jarenlange ervaring helpen wij opdrachtgevers
              bij het realiseren van succesvolle projecten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-accent mb-4">{dienst.icon}</div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {dienst.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dienst.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="text-accent hover:text-accent-dark font-semibold transition-colors"
            >
              Bekijk alle diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom Basewise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Waarom Basewise?
              </h2>
              <ul className="space-y-4">
                {[
                  "Specialisten in Systems Engineering volgens INCOSE standaarden",
                  "Ervaring met UAV-GC contracten bij ProRail, Rijkswaterstaat en gemeenten",
                  "Pragmatische aanpak: structuur waar nodig, flexibel waar mogelijk",
                  "Onafhankelijk advies, gericht op het projectresultaat",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-10 text-white">
              <blockquote className="text-lg leading-relaxed mb-6 italic text-gray-300">
                &ldquo;Systems Engineering gaat niet over documenten produceren. Het
                gaat over de juiste vragen stellen op het juiste moment.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold font-heading text-lg">
                  B
                </div>
                <div>
                  <p className="font-semibold">Basewise Consultancy</p>
                  <p className="text-sm text-gray-400">Onze filosofie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Klaar om uw project te structureren?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Neem vrijblijvend contact met ons op voor een kennismaking of
            adviesgesprek.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
