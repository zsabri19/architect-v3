import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { EIGHT_C } from "@/lib/content";

const LIBRARY = [
  { t: "Exile Resilience Framework", d: "Stabilization, assessment, reconstruction, integration. Born from the Gulf War evacuation." },
  { t: "Cultural Ecosystem Mapping", d: "Five parameters for reading any market: power distance, risk tolerance, innovation outlook, team orientation, process formality." },
  { t: "Identity Preservation Under Change", d: "Core values, adaptive behaviors, boundary management, and cultural integration that keep organizations intact through transformation." },
  { t: "Constraint-Based Innovation", d: "Constraints are not obstacles; they are design parameters that can become competitive advantage." },
  { t: "Governance as Accelerator", d: "Governance is the runway, and every framework in this library proves it." },
  { t: "Market Volatility Navigation", d: "Reading market volatility as strategic intelligence rather than disruption." },
  { t: "Crisis as Audit", d: "Crisis compresses time and exposes what was already ungoverned. Use it as the audit." },
  { t: "The Pyramid Framework", d: "The signature methodology: Foundation, Structure, Alignment, Optimization, Transformation. 90 to 95% adoption against a 25% industry standard." },
  { t: "Function Reframing", d: "Procurement repositioned as strategic intelligence and leverage creation." },
  { t: "Cross-Cultural Authority", d: "Authority transcends geography when built on competence and cultural respect." },
  { t: "Super-Labor Framework", d: "Dignity-first labor contracting for Gulf workforce models." },
  { t: "Digital Nation Building", d: "SuperJet Oman and the first Sharia-compliant digital banking journey." },
  { t: "AI Governance Integration", d: "The leader as interpreter: how AI becomes transformation through human readiness." },
  { t: "Character Compass", d: "Four dimensions of leadership character: pioneering, assertive, altruistic, intellectually driven." },
];

export default function Frameworks() {
  return (
    <>
      <PageHero
        eyebrow="Transformation Methodologies"
        title="Frameworks that were lived before they were named"
        lead="The 8C Crisis-to-Clarity methodology and the wider library it grew from."
      />

      <Section>
        <SectionHead
          eyebrow="Core Framework"
          title="The 8C Crisis-to-Clarity methodology"
          sub="Eight sequential components that transform crisis into clarity and execution. A proven 90 to 95% success framework for organisational transformation."
        />
        <div className="mt-12 max-w-3xl mx-auto space-y-0">
          {EIGHT_C.map((c, i) => (
            <Reveal key={c.n} delay={i * 50}>
              <div className="flex gap-6 items-start py-6 border-b border-faint/40 group">
                <span className="font-display text-3xl font-semibold text-gold/70 group-hover:text-gold transition-colors w-14 shrink-0">{c.n}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                  <p className="text-mist text-sm leading-relaxed mt-1">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead
          eyebrow="The Library"
          title="Ten supporting frameworks behind the methodology"
          sub="Each was pressure-tested on real crises, real teams, and real institutions before it earned a place in the ClarityOS library."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {LIBRARY.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 80}>
              <div className="card-dark h-full !p-6">
                <h3 className="font-semibold text-base mb-2">{f.t}</h3>
                <p className="text-mist text-sm leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="See the framework applied to your situation"
        sub="The $79 session maps your blocker against the 8C sequence in 90 minutes. You leave with a clear next step."
      />
    </>
  );
}
