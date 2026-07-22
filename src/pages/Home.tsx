import { Link } from "react-router";
import { ArrowRight, Award, Check } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { LogoStrip, Section, SectionHead } from "@/components/shared";
import { AWARD_LABEL, AWARD_URL, ENGAGEMENT_PATHS, STRIPE_SESSION_URL, TESTIMONIALS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 lg:pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_55%)]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
          <Reveal>
            <p className="eyebrow">Founder of ClarityOS. Author. Transformation Architect.</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.2rem] font-semibold leading-[1.08]">
              Transformation fails when the human layer underneath it cannot hold.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-mist leading-relaxed max-w-xl">
              ClarityOS helps founders, executives, and leadership teams diagnose the real blocker, align decisions and ownership, and install the operating rhythm that makes change stick.
            </p>
            <a
              href={AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 border border-gold/40 rounded-full px-4 py-2.5 text-xs text-gold uppercase tracking-[0.15em] hover:bg-gold/10 transition-colors"
            >
              <Award size={14} className="shrink-0" />
              {AWARD_LABEL}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              {["20+ years inside Fortune 500 transformation", "Governance, procurement, crisis-tested execution", "Clarity before scale"].map((c) => (
                <span key={c} className="text-xs text-dawn/90 bg-depth border border-faint/50 rounded-full px-4 py-2">{c}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold">
                Book a $79 Clarity Session <ArrowRight size={16} />
              </a>
              <Link to="/clarityos" className="btn-ghost">Explore Enterprise ClarityOS</Link>
            </div>
            <p className="mt-6 text-sm text-mist">90% of transformations fail because execution outruns alignment. ClarityOS stabilises the human layer before scale.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
              <img src="/images/hero.jpg" alt="Zeeshan Sabri" className="relative rounded-3xl w-full object-cover border border-faint/50 gold-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      <LogoStrip />

      {/* HOW IT WORKS */}
      <Section>
        <SectionHead eyebrow="How ClarityOS Works" title="From diagnosis to operating rhythm" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { n: "01", t: "Diagnose the real blocker", d: "Identify where decisions, ownership, leadership alignment, or human stability are breaking the transformation before more tools are added on top." },
            { n: "02", t: "Install the clarity layer", d: "Create the decision architecture, language, and structural clarity needed so people can operate from one coherent frame." },
            { n: "03", t: "Align execution and governance", d: "Turn clarity into cadence through ownership, sequencing, governance, and operating rhythm that reduces drag and rework." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card-gold-edge h-full">
                <span className="text-gold font-display text-2xl font-semibold">{s.n}</span>
                <h3 className="font-display text-xl font-semibold mt-3 mb-3">{s.t}</h3>
                <p className="text-mist text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO / WHAT */}
      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHead eyebrow="Who This Is For" title="For leaders carrying complexity that ordinary advice does not solve" />
            <div className="grid gap-5 mt-10">
              {[
                { t: "Founders and executives", d: "When decisions keep recurring, priorities keep shifting, and scale is outrunning clarity." },
                { t: "Leadership teams", d: "When alignment is weak, ownership is muddy, and transformation depends on too few people carrying too much." },
                { t: "Organisations under change", d: "When ERP, AI, governance, or operating redesign is underway, and the human layer underneath is unstable." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 80}>
                  <div className="card-dark !p-6">
                    <h3 className="font-semibold text-lg mb-2">{c.t}</h3>
                    <p className="text-mist text-sm leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="What ClarityOS Is" title="An operating system, installed to hold" />
            <div className="grid gap-5 mt-10">
              {[
                { t: "Foundation layer", d: "ClarityOS sits underneath everything you already run. It is the layer every ERP, AI initiative, and governance framework depends on." },
                { t: "Institutional clarity", d: "This goes beyond individual coaching. It installs a shared clarity architecture across the organisation." },
                { t: "Permanent installation", d: "Workshops produce insight. ClarityOS produces a durable operating rhythm with governance outputs that hold." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 80}>
                  <div className="card-dark !p-6">
                    <h3 className="font-semibold text-lg mb-2">{c.t}</h3>
                    <p className="text-mist text-sm leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ORIGIN TEASER */}
      <Section>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <img src="/images/hero-v1-backup.jpg" alt="The origin of ClarityOS" className="rounded-3xl border border-faint/50 w-full object-cover" />
          </Reveal>
          <div>
            <SectionHead eyebrow="The Origin" title="Built from 20 years of witnessing failure" />
            <p className="mt-6 text-mist leading-relaxed">
              Born from displacement. Forged in Fortune 500 transformation. Built because nothing else worked.
            </p>
            <p className="mt-4 text-dawn/90 leading-relaxed">
              My family evacuated Kuwait during the Gulf War. I spent 20 years inside Huawei, Motorola Solutions, and major procurement and transformation portfolios. The pattern was always the same: organisations invest in systems and ignore the humans running them. ClarityOS is what I built when I got tired of watching the same failure repeat.
            </p>
            <Link to="/architect" className="btn-ghost mt-8">Read the Origin Story <ArrowRight size={16} /></Link>
          </div>
        </div>
      </Section>

      {/* MEMOIR / AWARD PATH */}
      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <SectionHead eyebrow="The Memoir" title="From Exile to Transformation" />
            <p className="mt-6 text-mist leading-relaxed">
              The book behind the methodology. From the Gulf War to Fortune 500 boardrooms, and the award that recognized ClarityOS as the world’s first Pre-Governance Operating System.
            </p>
            <a
              href={AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 border border-gold/40 rounded-full px-4 py-2.5 text-xs text-gold uppercase tracking-[0.15em] hover:bg-gold/10 transition-colors"
            >
              <Award size={14} className="shrink-0" />
              {AWARD_LABEL}
            </a>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/memoir" className="btn-gold">
                Explore the Memoir <ArrowRight size={16} />
              </Link>
              <a href={AWARD_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Read the Press Release <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="card-gold-edge p-8">
              <blockquote className="font-display text-xl lg:text-2xl italic leading-relaxed text-dawn/90">
                "We are seeing a maturity shift in the GCC. Leaders are realizing that you cannot install a First World governance system on a broken human operating system."
              </blockquote>
              <p className="text-gold text-sm uppercase tracking-wider mt-4">— Zeeshan Sabri, Founders 2.0 Conference, Dubai</p>
              <p className="text-mist text-sm mt-5 leading-relaxed">
                The Entrepreneurial Excellence Award recognized ClarityOS as the world’s first Pre-Governance Operating System, currently deployed across national-scale digital banking, telecom, and defense procurement transformations serving 5 million+ users.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Field Results" title="What the room says" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.source} delay={i * 100}>
              <figure className="card-dark h-full flex flex-col">
                <blockquote className="text-dawn/95 leading-relaxed flex-1">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-gold text-sm font-medium">{t.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT PATHS / PRICING */}
      <Section>
        <SectionHead
          eyebrow="Engagement Paths"
          title="Choose the level of clarity you need"
          sub="Three clear lanes. One decision: how deep does the problem go?"
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {ENGAGEMENT_PATHS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`card-dark h-full flex flex-col ${p.highlight ? "border-gold/60 gold-glow relative" : ""}`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-7 bg-gold text-void text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Start here</span>
                )}
                <span className="text-mist text-xs uppercase tracking-[0.2em]">{p.tier}</span>
                <h3 className="font-display text-2xl font-semibold mt-2">{p.name}</h3>
                <p className="font-display text-4xl font-semibold text-gold mt-4">{p.price}</p>
                <p className="text-mist text-sm leading-relaxed mt-4 flex-1">{p.desc}</p>
                <div className="mt-7">
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener" className="btn-gold w-full">{p.cta}</a>
                  ) : (
                    <Link to={p.href} className="btn-ghost w-full">{p.cta}</Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mist">
            {["Initial response within 48 hours", "Tailored proposal within 5 business days", "Every engagement starts with a clarity diagnosis"].map((x) => (
              <span key={x} className="inline-flex items-center gap-2"><Check size={15} className="text-gold" /> {x}</span>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Start with a direct conversation"
        sub="If you are assessing whether ClarityOS fits your context, the fastest path is a direct clarity call. Diagnose the situation before you commit to the wrong kind of solution."
      />
    </>
  );
}
