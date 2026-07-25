import { Link } from "react-router";
import { ArrowRight, Award, Download, FileText } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { AWARD_LABEL, AWARD_URL } from "@/lib/content";

const PROFILE_PDF = "/profiles/zeeshan-sabri-executive-advisory-profile-2026.pdf";

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
        <a
          href={AWARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2.5 border border-gold/40 rounded-full px-4 py-2.5 text-xs text-gold uppercase tracking-[0.15em] hover:bg-gold/10 transition-colors"
        >
          <Award size={14} className="shrink-0" />
          {AWARD_LABEL}
        </a>
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <Link to="/connect" className="btn-gold">Request a Proposal <ArrowRight size={16} /></Link>
          <Link to="/media" className="btn-ghost">See the Work in the Field</Link>
        </div>
      </PageHero>

      <Section className="bg-shadow/40 border-y border-faint/20">
        <div className="grid lg:grid-cols-[1fr_0.55fr] gap-10 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-gold" />
              <p className="eyebrow !mb-0">Executive Advisory Profile — 2026 Edition</p>
            </div>
            <h2 className="font-display text-2xl lg:text-4xl font-semibold leading-tight mb-4">Download the 12-page boardroom profile</h2>
            <p className="text-mist leading-relaxed max-w-2xl">
              A complete overview of capabilities, career history, key projects across government, fintech, defense and energy, proprietary ClarityOS frameworks, credentials, and regional operating experience. Built for boards, procurement committees, and executive teams evaluating advisory and speaking engagements.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <a href={PROFILE_PDF} download className="btn-gold">
                <Download size={16} /> Download Profile PDF
              </a>
              <Link to="/executive-profile" className="btn-ghost">View Online <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-gold-edge">
              <div className="space-y-4">
                {[
                  "$95M+ strategic initiatives delivered, GCC-wide",
                  "22 years across Fortune 500, government, and ventures",
                  "Chartered MCIPS + AI CERTs certified trainer",
                  "5M+ citizens served via national platform",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-dawn/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

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
