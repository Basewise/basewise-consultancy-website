import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten | Basewise Consultancy B.V.",
  description:
    "Systems Engineering diensten voor infrastructuur en bouw: eisenmanagement, V&V, configuratiemanagement en meer.",
};

const diensten = [
  {
    title: "Systems Engineering",
    description:
      "Wij ondersteunen projectorganisaties bij het opzetten en uitvoeren van Systems Engineering volgens INCOSE standaarden. Van SE-plan tot implementatie: wij zorgen dat SE werkbaar en effectief wordt ingezet.",
    items: [
      "SE-management volgens INCOSE en ISO 15288",
      "Inrichten SE-organisatie binnen het project",
      "Coaching en begeleiding van SE-teams",
      "SE-volwassenheidsbeoordelingen",
    ],
  },
  {
    title: "Requirements Engineering",
    description:
      "Eisen vormen de basis van elk project. Wij helpen bij het vertalen van klantwensen naar complete, verifieerbare en beheersbare eisensets binnen UAV-GC en D&C contracten.",
    items: [
      "Eisenanalyse en decompositie",
      "Requirements engineering (ISO 29148)",
      "Eisenverificatiematrix (EVM) opstellen",
      "Tooling (DOORS, Relatics, ReqView)",
    ],
  },
  {
    title: "Verificatie & Validatie",
    description:
      "Systematisch toetsen of het ontwerp en het eindproduct voldoen aan de gestelde eisen en de behoeften van de stakeholders.",
    items: [
      "V&V-plannen en -strategieen",
      "Reviews, inspecties en testen",
      "FAT/SAT begeleiding",
      "Traceerbaarheidsanalyses",
    ],
  },
  {
    title: "Configuratiemanagement",
    description:
      "Grip houden op de productconfiguratie gedurende de gehele levenscyclus. Van ontwerp tot beheer en onderhoud.",
    items: [
      "CM-plannen en procedures",
      "Baselinemanagement",
      "Wijzigingsbeheer (change control)",
      "Documentbeheer en -structuur",
    ],
  },
  {
    title: "Interface Management",
    description:
      "Complexe projecten kennen veel raakvlakken. Wij identificeren, analyseren en beheersen interfaces tussen systemen en partijen.",
    items: [
      "Interface-identificatie en -analyse",
      "Interface Control Documents (ICD)",
      "Coordinatie tussen disciplines en contractpartijen",
      "Raakvlakkenregisters",
    ],
  },
  {
    title: "Contractbegeleiding",
    description:
      "Begeleiding bij UAV-GC en Design & Construct contracten. Van vraagspecificatie tot oplevering: wij zorgen voor structuur en beheersing.",
    items: [
      "Vraagspecificatie en contractvoorbereiding",
      "UAV-GC contractmanagement",
      "Toetsing en acceptatie",
      "Overdracht naar beheer en onderhoud",
    ],
  },
  {
    title: "Advies & Detachering",
    description:
      "Flexibele inzet van ervaren SE-professionals binnen uw projectteam. Wij passen ons aan uw organisatie en werkwijze aan.",
    items: [
      "Detachering SE-adviseurs en -engineers",
      "Interim SE-management",
      "Tweedelijns ondersteuning en reviews",
      "Training en workshops",
    ],
  },
];

export default function Diensten() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Onze diensten
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Basewise biedt een compleet pakket aan Systems Engineering diensten
            voor infrastructuur- en bouwprojecten in Nederland.
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  {dienst.title}
                </h2>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {dienst.description}
                </p>
                <ul className="space-y-2">
                  {dienst.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
