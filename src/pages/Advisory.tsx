import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";

const SERVICES = [
  { t: "Board Advisory", d: "Governance, transformation oversight, and strategic direction for boards navigating digital and organisational change." },
  { t: "Executive Counsel", d: "One-on-one strategic counsel for CEOs and leadership teams on transformation execution and human capital alignment." },
  { t: "Procurement Excellence", d: "Chartered MCIPS guidance on procurement as a transformation lever and governance architecture." },
];

const SPEAKING = [
  { t: "Transformation Keynotes", d: "\u201CThe Human OS Before The System OS\u201D and other transformation-focused keynotes for conferences and leadership summits." },
  { t: "Leadership Development", d: "Multi-session leadership programmes for government and enterprise leadership teams." },
  { t: "Workshop Facilitation", d: "Interactive workshops on decision architecture, ownership clarity, and transformation governance." },
];

const ENGAGEMENTS = [
  { t: "Kuwait Procurement Summit 2025", d: "Keynote on \u201CThe Human Operating System Before Digital Transformation\u201D for 300+ procurement leaders." },
  { t: "NCMS Leadership Programme", d: "Multi-session transformation architecture programme for UAE government leaders." },
  { t: "GCC Digital Trade Forum", d: "Panel expert on human factors in GCC digital transformation and trade modernisation." },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "Initial clarity call to understand context, stakes, and the real blocker." },
  { n: "02", t: "Diagnosis", d: "Structured assessment of decisions, ownership, alignment, and human stability." },
  { n: "03", t: "Proposal", d: "Scoped engagement with governance outputs, cadence, and measurable outcomes. Delivered within 5 business days." },
  { n: "04", t: "Installation", d: "Advisory cadence begins. Rhythm, accountability, and course correction from week one." },
];

export default function Advisory() {
  return (
    <>
      <PageHero
        eyebrow="Advisory and Speaking"
        title="Board counsel for transformations that cannot afford to drift"
        lead="Board-level counsel, executive advisory, and leadership development for GCC organisations navigating complex transformation."
      >
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <Link to="/connect" className="btn-gold">Request a Proposal <ArrowRight size={16} /></Link>
          <Link to="/media" className="btn-ghost">See the Work in the Field</Link>
        </div>
      </PageHero>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Advisory Services" title="Strategic transformation guidance" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card-dark h-full">
                <h3 className="font-display text-xl font-semibold mb-3">{s.t}</h3>
                <p className="text-mist text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Speaking Engagements" title="Keynotes and leadership sessions" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {SPEAKING.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card-gold-edge h-full">
                <h3 className="font-display text-xl font-semibold mb-3">{s.t}</h3>
                <p className="text-mist text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <img src="/images/talk-stage.jpg" alt="Zeeshan Sabri delivering The Secret of Successful Transformation" className="rounded-3xl border border-faint/50 w-full object-cover" />
          </Reveal>
          <div>
            <SectionHead eyebrow="Recent Engagements" title="Featured advisory and speaking" />
            <div className="grid gap-5 mt-10">
              {ENGAGEMENTS.map((e, i) => (
                <Reveal key={e.t} delay={i * 80}>
                  <div className="card-dark !p-6">
                    <h3 className="font-semibold text-lg mb-2">{e.t}</h3>
                    <p className="text-mist text-sm leading-relaxed">{e.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Engagement Process" title="How advisory works" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="card-dark h-full !p-6">
                <span className="text-gold font-display text-xl font-semibold">{p.n}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2">{p.t}</h3>
                <p className="text-mist text-[13px] leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Bring governance-level clarity to your boardroom"
        sub="Advisory engagements are scoped to your context and stakes. Start the conversation with a direct enquiry."
      />
    </>
  );
}
