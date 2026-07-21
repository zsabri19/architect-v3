import { CTABand, NewsletterForm, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";

const PARTS = [
  {
    part: "Part I: The Exile",
    years: "1989 to 1992",
    body: "Iraq invades Kuwait. A Pakistani family loses everything and returns to a homeland that feels foreign.",
    quote: "When systems collapse, resilience becomes your first governance framework.",
  },
  {
    part: "Part II: The Return",
    years: "1992 to 2004",
    body: "Rebuilding in a scarred Kuwait. Cricket becomes the training ground for discipline and strategic thinking.",
    quote: "Reinvention is about giving broken things new alignment.",
  },
  {
    part: "Part III: The Crucible",
    years: "2012 to 2025",
    body: "Fortune 500 transformation at Huawei and Motorola Solutions. Witnessing $100M+ failures and discovering the human layer gap.",
    quote: "Transformations failed because the human OS underneath could not hold.",
  },
];

const FRAMEWORK_8C = [
  { pair: "Clarity", d: "Diagnosing the real blocker: decisions, ownership, alignment, or stability." },
  { pair: "Conditions to Control", d: "Setting environmental factors and establishing governance boundaries." },
  { pair: "Capability to Coaching", d: "Building execution skills and developing internal transformation capability." },
  { pair: "Calibration to Continuity", d: "Fine-tuning in real time and embedding rhythms that hold." },
];

export default function Memoir() {
  return (
    <>
      <PageHero
        eyebrow="The Book, Coming 2026"
        title="From Exile to Transformation Architect"
        lead="The complete story, from the Kuwait evacuation to Fortune 500 transformation, captured in a memoir written for the next generation of leaders."
      />

      <Section>
        <SectionHead eyebrow="The Narrative" title="A story of crisis, clarity, and transformation" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PARTS.map((p, i) => (
            <Reveal key={p.part} delay={i * 100}>
              <div className="card-dark h-full flex flex-col">
                <p className="text-gold text-xs uppercase tracking-[0.2em]">{p.part}</p>
                <p className="text-mist text-xs mt-1 mb-4">{p.years}</p>
                <p className="text-dawn/90 text-sm leading-relaxed flex-1">{p.body}</p>
                <blockquote className="mt-5 border-l-2 border-gold pl-4 text-gold/90 italic font-display leading-relaxed text-[15px]">“{p.quote}”</blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead
          eyebrow="The Framework"
          title="The 8C Crisis-to-Clarity methodology"
          sub="The memoir details the origin and application of the 8C Framework, born from Fortune 500 transformation patterns and proven in the GCC."
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-12 max-w-4xl">
          {FRAMEWORK_8C.map((f, i) => (
            <Reveal key={f.pair} delay={i * 80}>
              <div className="card-gold-edge !p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{f.pair}</h3>
                <p className="text-mist text-sm leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Pre-order and Updates</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight">Stay informed about the memoir</h2>
            <p className="mt-4 text-mist leading-relaxed">
              The memoir is scheduled for release in 2026. Join the notification list for pre-order announcements, launch events, and exclusive excerpts.
            </p>
            <div className="mt-8">
              <NewsletterForm tag="memoir" buttonLabel="Notify Me When Available" />
            </div>
            <p className="mt-4 text-xs text-mist">Your email is used for memoir announcements only. Unsubscribe anytime.</p>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="The frameworks in the memoir work today"
        sub="Experience the methodology live: a $79 clarity session for you, or the 90-day installation for your leadership team."
      />
    </>
  );
}
