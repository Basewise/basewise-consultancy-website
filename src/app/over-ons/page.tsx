import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons | Basewise Consultancy B.V.",
  description:
    "Leer meer over Basewise Consultancy: wie we zijn, onze visie en werkwijze binnen Systems Engineering.",
};

export default function OverOns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Over ons
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Basewise Consultancy B.V. staat voor heldere structuur in complexe
            projecten.
          </p>
        </div>
      </section>

      {/* Wie we zijn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Wie we zijn
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Basewise Consultancy is een gespecialiseerd adviesbureau op het
                  gebied van Systems Engineering voor de Nederlandse
                  infrastructuur- en bouwsector.
                </p>
                <p>
                  Wij geloven dat goede structuur de basis is van elk succesvol
                  project. Door Systems Engineering op de juiste manier in te
                  zetten, worden complexe projecten beheersbaar en voorspelbaar.
                </p>
                <p>
                  Onze consultants combineren diepgaande SE-kennis volgens INCOSE
                  standaarden met praktische ervaring in UAV-GC contracten. Wij
                  werken voor opdrachtgevers als ProRail, Rijkswaterstaat,
                  gemeenten en aannemers in de GWW- en utiliteitsbouw.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Onze visie
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Systems Engineering wordt vaak gezien als een administratieve
                  last. Wij zien het anders: SE is een middel om betere besluiten
                  te nemen, risico&apos;s vroeg te signaleren en rework te
                  voorkomen.
                </p>
                <p>
                  Onze aanpak is pragmatisch. Wij passen de mate van SE aan op de
                  complexiteit en het risicoprofiel van het project. Geen
                  overbodige documenten, wel de juiste structuur op het juiste
                  moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-navy mb-12 text-center">
            Onze werkwijze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                description:
                  "We analyseren uw project, de stakeholders en de complexiteit om de juiste aanpak te bepalen.",
              },
              {
                step: "02",
                title: "Plan",
                description:
                  "Samen stellen we een SE-plan op dat past bij de schaal en fase van uw project.",
              },
              {
                step: "03",
                title: "Uitvoering",
                description:
                  "Onze consultants werken zij aan zij met uw team om SE in de praktijk te brengen.",
              },
              {
                step: "04",
                title: "Borging",
                description:
                  "We zorgen dat kennis en processen geborgd worden zodat uw organisatie zelfstandig verder kan.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-navy mb-12 text-center">
            Onze kernwaarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vakmanschap",
                description:
                  "Diepgaande kennis van Systems Engineering, gedragen door ervaring in de praktijk.",
              },
              {
                title: "Pragmatisme",
                description:
                  "Structuur waar nodig, flexibiliteit waar mogelijk. Altijd gericht op het projectresultaat.",
              },
              {
                title: "Samenwerking",
                description:
                  "Wij werken als onderdeel van uw team. Transparant, toegankelijk en betrokken.",
              },
            ].map((waarde) => (
              <div
                key={waarde.title}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {waarde.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {waarde.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
