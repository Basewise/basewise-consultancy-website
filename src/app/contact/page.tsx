"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Heeft u een vraag of wilt u vrijblijvend kennismaken? Neem gerust
            contact met ons op.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Stuur ons een bericht
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
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
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-gray-600">
                    Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="naam"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bedrijf"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bedrijf
                    </label>
                    <input
                      type="text"
                      id="bedrijf"
                      name="bedrijf"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bericht"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Waar kunnen wij u mee helpen?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Verstuur bericht
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Contactgegevens
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">E-mail</h3>
                    <p className="text-gray-600">info@basewise.nl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Locatie</h3>
                    <p className="text-gray-600">Nederland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">KvK</h3>
                    <p className="text-gray-600">
                      Basewise Consultancy B.V.
                    </p>
                  </div>
                </div>
              </div>

              {/* Extra info */}
              <div className="mt-10 bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-navy mb-2">
                  Vrijblijvend kennismaken?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wij komen graag in gesprek over uw project en de mogelijkheden
                  van Systems Engineering. Een eerste kennismaking is altijd
                  vrijblijvend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
