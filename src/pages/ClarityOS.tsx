import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { EIGHT_C, STRIPE_SESSION_URL } from "@/lib/content";

const PHASES = [
  { phase: "Phase 1", weeks: "Weeks 1 to 3", title: "Diagnosis", items: ["Human OS assessment", "Decision architecture audit", "Ownership and alignment mapping", "Leadership interviews and field evidence"] },
  { phase: "Phase 2", weeks: "Weeks 4 to 8", title: "Installation", items: ["Decision rights and governance boundaries", "Operating rhythm design", "8C framework deployment", "Leadership alignment sessions"] },
  { phase: "Phase 3", weeks: "Weeks 9 to 13", title: "Continuity", items: ["Calibration against live execution", "Correction protocols", "Internal coaching capability", "Handover with governance outputs that hold"] },
];

export default function ClarityOS() {
  return (
    <>
      <PageHero
        eyebrow="ClarityOS"
        title="Fix the human layer before scale"
        lead="90% of transformations fail because execution outruns alignment. ClarityOS stabilises the human layer before scale."
      >
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold">Book the $79 Session <ArrowRight size={16} /></a>
          <Link to="/connect" className="btn-ghost">Enterprise Enquiry</Link>
        </div>
      </PageHero>

      {/* THE PROBLEM */}
      <Section className="bg-shadow/40">
        <SectionHead
          eyebrow="The Core Problem"
          title="Why transformations fail"
          sub="Organisations invest 80 to 90% in technology: ERP, AI, systems. Almost nothing goes to the humans who run them. You cannot install a stable System OS on a broken Human OS."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { t: "The 90% failure rate", d: "Most transformations fail because they focus on systems over people." },
            { t: "The Human OS gap", d: "Technology advances. Human operating systems stay unchanged for decades." },
            { t: "The alignment crisis", d: "Execution outruns alignment, creating drag, rework, and quiet resistance." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-dark h-full">
                <h3 className="font-display text-xl font-semibold mb-3">{c.t}</h3>
                <p className="text-mist text-sm leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8C FRAMEWORK */}
      <Section>
        <SectionHead
          eyebrow="The Solution"
          title="The 8C Crisis-to-Clarity Framework"
          sub="A proven 90 to 95% success framework for organisational transformation, born from Fortune 500 patterns and hardened in GCC application."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {EIGHT_C.map((c, i) => (
            <Reveal key={c.n} delay={i * 60}>
              <div className="card-gold-edge h-full !p-6">
                <span className="text-gold font-display text-xl font-semibold">{c.n}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2">{c.name}</h3>
                <p className="text-mist text-[13px] leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EVIDENCE */}
      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead eyebrow="Forensic Validation" title="Two programs. One pattern. Zero ambiguity." />
            <p className="mt-6 text-mist leading-relaxed">
              ClarityOS was validated through forensic analysis of real transformation engagements: a 100+ person system integrator in Oman and a GCC smart-home venture. Both received clarity. Both stalled at the same point.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="card-dark !p-6 text-center">
                <p className="font-display text-4xl font-semibold text-gold">0%</p>
                <p className="text-mist text-xs mt-2 leading-relaxed">Follow-ups completed in Program A across 18 tracked events</p>
              </div>
              <div className="card-dark !p-6 text-center">
                <p className="font-display text-4xl font-semibold text-gold">6%</p>
                <p className="text-mist text-xs mt-2 leading-relaxed">Issues resolved in Program B across 18 logged communications</p>
              </div>
            </div>
            <p className="mt-7 text-dawn/90 leading-relaxed">
              The discovery: clarity without a sustained attempt-support structure does not convert to execution. That is why ClarityOS installs Continuity and Coaching as core components, and that is why it holds.
            </p>
          </div>
          <Reveal delay={120}>
            <div className="grid gap-4">
              <img src="/images/compass.jpg" alt="Internal Cognitive Architecture, the paradigm shift" className="rounded-2xl border border-faint/50 w-full object-cover" />
              <img src="/images/clarity-mirror.jpg" alt="ClarityOS mirror validated" className="rounded-2xl border border-faint/50 w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ENTERPRISE 90-DAY */}
      <Section>
        <SectionHead
          eyebrow="Enterprise ClarityOS"
          title="The 90-day transformation program"
          sub="For leadership teams that need decision clarity, aligned ownership, and governance before transformation spend multiplies confusion."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PHASES.map((p, i) => (
            <Reveal key={p.phase} delay={i * 100}>
              <div className="card-dark h-full">
                <p className="text-gold text-xs uppercase tracking-[0.2em]">{p.phase} <span className="text-mist normal-case tracking-normal">· {p.weeks}</span></p>
                <h3 className="font-display text-2xl font-semibold mt-2 mb-5">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-dawn/90 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link to="/connect" className="btn-gold">Start the Enterprise Conversation <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Diagnose before you spend"
        sub="The $79 session gives you a direct read on your real blocker in 90 minutes. The enterprise program installs the full operating rhythm."
      />
    </>
  );
}
