"use client";

import { useState, useActionState } from "react";
import Image from "next/image";
import { translations, type Lang } from "./translations";
import { sendContactEmail } from "./actions";

export default function Home() {
  const [formState, formAction, isPending] = useActionState(sendContactEmail, { success: false });
  const [lang, setLang] = useState<Lang>("nl");

  const t = translations[lang];

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#diensten" },
    { label: t.nav.approach, href: "#werkwijze" },
    { label: t.nav.about, href: "#over-ons" },
    { label: t.nav.references, href: "#referenties" },
    { label: t.nav.contact, href: "#contact" },
  ];



  return (
    <>
      {/* ─── NAV ─── */}
      <nav>
        <div className="nav-bar">
          {/* Language toggle — left */}
          <div className="lang-toggle">
            <span className={lang === "nl" ? "active" : "inactive"}>NL</span>
            <button
              className={`lang-switch-btn ${lang === "en" ? "en" : ""}`}
              onClick={() => setLang(lang === "nl" ? "en" : "nl")}
              aria-label="Toggle language"
            >
              <span className="knob" />
            </button>
            <span className={lang === "en" ? "active" : "inactive"}>EN</span>
          </div>

          {/* Hamburger — right */}
          <button className="nav-hamburger" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>

          {/* Nav links (shown on hamburger hover) */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Logo — centered */}
          <a href="#home" className="nav-logo">
            <Image
              src="/Basewise_Consultancy.png"
              alt="Basewise Consultancy"
              width={660}
              height={416}
              style={{ height: "113px", width: "auto" }}
              priority
            />
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="home">
        <div className="hero-eyebrow">{t.hero.eyebrow}</div>
        <h1>
          {t.hero.h1_line1}
          <br />
          <span className="light">{t.hero.h1_line2}</span>
          {t.hero.h1_line3 && <><br />{t.hero.h1_line3}</>}
        </h1>
        <div className="hero-divider" />
        <p className="hero-text">{t.hero.description}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            {t.hero.cta}
          </a>
          <a href="#diensten" className="btn-ghost">
            {t.hero.services}
          </a>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section id="intro">
        <div className="intro-inner">
          <p>{t.intro}</p>
        </div>
      </section>

      {/* ─── DIENSTEN ─── */}
      <section id="diensten">
        <div className="section-title">{t.services.title}</div>
        <div className="section-rule" />

        <div className="diensten-layout">
          {/* Featured image left */}
          <div className="dienst-featured">
            <div className="dienst-featured-img">
              <Image
                src="/Plaat 1.png"
                alt="Systems Engineering"
                width={600}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="dienst-featured-caption">
              <div className="dienst-featured-label">
                {t.services.featured.label}
              </div>
              <div className="dienst-featured-title">
                {t.services.featured.title}
              </div>
            </div>
          </div>

          {/* 2×2 grid right */}
          <div className="dienst-grid-2x2">
            {t.services.items.map((item) => (
              <div key={item.label}>
                <div className="dienst-item-label">{item.label}</div>
                <div className="dienst-item-title">{item.title}</div>
                <div className="dienst-item-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ─── AI PLATFORM ─── */}
      <section id="ai-platform">
        <div className="ai-platform-layout">
          <div className="ai-platform-text">
            <div className="dienst-item-label">{t.services.aiBanner.label}</div>
            <div className="dienst-item-title">{t.services.aiBanner.title}</div>
            <div className="dienst-item-text">{t.services.aiBanner.text}</div>
            <a
              href="https://basewise.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.services.aiBanner.cta}
            </a>
          </div>
          <div className="ai-platform-center">
            <div className="ai-platform-img">
              <Image
                src="/Helm.png"
                alt="Basewise AI Platform"
                width={200}
                height={200}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              <div className="ai-platform-img-caption">SE - AGENT</div>
            </div>
          </div>
          <div className="ai-platform-features">
            {t.services.aiBanner.features.map((f) => (
              <div className="ai-feature" key={f.title}>
                <div className="ai-feature-title">{f.title}</div>
                <div className="ai-feature-text">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section id="werkwijze">
        <div className="section-title">{t.approach.title}</div>
        <div className="section-rule" />
        <div className="werkwijze-intro">
          {t.approach.introParts[0]}<em>{t.approach.introParts[1]}</em>{t.approach.introParts[2]}
        </div>

        <div className="circles-wrap">
          {t.approach.steps.map((step, i) => {
            const sizes = [120, 160, 140, 100];
            const strokes = ["var(--grey-mid)", "var(--grey-dark)", "var(--magenta)", "var(--grey-light)"];
            const s = sizes[i];
            return (
              <div className="circle-item" key={i}>
                <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
                  <circle
                    cx={s / 2}
                    cy={s / 2}
                    r={s / 2 - 2}
                    fill="none"
                    stroke={strokes[i]}
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="circle-label">{step}</div>
              </div>
            );
          })}
        </div>

        <div className="werkwijze-details">
          {t.approach.paragraphs.map((p, i) => (
            <p className="werkwijze-text" key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ─── OVER ONS ─── */}
      <section id="over-ons">
        <div className="section-title">{t.about.sectionTitle}</div>
        <div className="section-rule" />

        <div className="over-grid">
          <div className="over-text">
            <p>{t.about.description}</p>

            <h3 className="over-subtitle">{t.about.whoWeAre.title}</h3>
            {t.about.whoWeAre.text.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <h3 className="over-subtitle">{t.about.mission.title}</h3>
            <p>{t.about.mission.text}</p>

            <h3 className="over-subtitle">{t.about.differentiators.title}</h3>
            <ul className="over-list">
              {t.about.differentiators.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="onderdeel">{t.about.parent}</div>
          </div>

          <div className="about-photo-wrap">
            <div className="about-photo">
              <Image
                src="/CSP EKEN.jpeg"
                alt="Christian van Eken"
                width={300}
                height={360}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about-photo-caption">
              Christian van Eken | Eigenaar en Senior consultant Systems Engineering
            </div>
            <blockquote className="about-quote">
              <p><strong>Systemen zijn complex, de aanpak hoeft dat niet te zijn.</strong></p>
              <p>Bij Basewise draait Systems Engineering om het resultaat, niet om de methode. Waar anderen zich verliezen in ingewikkelde terminologie en theoretische modellen, focus ik op wat er echt toe doet: een werkend systeem dat naadloos aansluit op de klantvraag.</p>
              <p>Ik geloof in gezond verstand met een checklist. Geen eindeloze zijpaden, maar een strak proces zodat jij de controle houdt over de techniek én de planning. En die complexe tooling? Die zet ik in als hulpmiddel, nooit als hindernis. Zo maken we van Systems Engineering wat het moet zijn: een versneller van je project, geen vertrager.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── REFERENTIES ─── */}
      <section id="referenties">
        <div className="section-title">{t.references.title}</div>
        <div className="section-rule" />

        <div className="logo-grid">
          {[
            { src: "/logo SUBHEADING (1).png", alt: "Van Gelder" },
            { src: "/logo SUBHEADING (2).png", alt: "Rijkswaterstaat" },
            { src: "/logo SUBHEADING (3).png", alt: "Hanab" },
            { src: "/logo SUBHEADING (4).png", alt: "Tauw" },
            { src: "/logo SUBHEADING (5).png", alt: "Strukton" },
            { src: "/logo SUBHEADING (6).png", alt: "Antea Group" },
            { src: "/logo SUBHEADING (7).png", alt: "Hegeman" },
            { src: "/logo SUBHEADING (8).png", alt: "Lammerink" },
            { src: "/logo SUBHEADING (9).png", alt: "VolkerWessels" },
            { src: "/logo SUBHEADING (10).png", alt: "Overmorrow" },
          ].map((logo) => (
            <div className="logo-cell" key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        <div className="ref-note">{t.references.note}</div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="section-title">{t.contact.title}</div>
        <div className="section-rule" />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t.contact.detailsTitle}</h3>
            <address>
              {t.contact.company}
              <br />
              {t.contact.address}
              <br />
              {t.contact.city}
              <br />
              {t.contact.country}
            </address>
            <div className="onderdeel">{t.contact.parent}</div>
          </div>

          <div>
            {formState.success ? (
              <div className="thank-you">
                <h3>{t.contact.thankYouTitle}</h3>
                <p>{t.contact.thankYouMessage}</p>
              </div>
            ) : (
              <form action={formAction}>
                {formState.error && (
                  <div className="form-error">{formState.error}</div>
                )}
                <div className="form-group">
                  <label htmlFor="naam">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bericht">{t.contact.messageLabel}</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                <button type="submit" className="btn-send" disabled={isPending}>
                  {isPending ? "Verzenden..." : t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          <a href="https://basewise.nl">basewise.nl</a>
          <a
            href="https://basewise.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            basewise.ai
          </a>
        </div>
      </footer>
    </>
  );
}
