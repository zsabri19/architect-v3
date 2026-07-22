import { Award } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { LogoStrip, PageHero, Section, SectionHead } from "@/components/shared";
import { AWARD_LABEL, AWARD_URL, RECOGNITION } from "@/lib/content";

const TIMELINE = [
  {
    era: "Part I: The Origin",
    years: "1989 to 1992",
    title: "The Exile",
    body: "1989. Iraq invades Kuwait. Zeeshan's family, Pakistani nationals, are forced to leave the only home they have known. They return to Pakistan, and it is exile in every practical sense.",
    quote: "When systems collapse, resilience becomes your first governance framework. You learn how to create order where none exists.",
  },
  {
    era: "Part II: Return and Reinvention",
    years: "1992 to 2004",
    title: "Back to Kuwait",
    body: "The country returned, scarred but standing. Reintegration was hard. Cricket became the anchor. On the field he learned discipline, teamwork, and the value of adjusting strategy mid-play.",
    quote: "Reinvention is about taking what is broken and giving it new alignment.",
  },
  {
    era: "Part III: Fortune 500 Foundations",
    years: "2012 to 2025",
    title: "Huawei and Motorola Solutions",
    body: "Huawei, 2012 to 2020: global procurement and transformation. He witnessed how Chinese enterprises scaled globally by building internal operating systems first. Motorola Solutions, 2020 to 2025: crisis transformation. He saw what happens when technology outruns human readiness.",
    quote: "I watched $100M+ transformations fail because the human layer underneath could not hold. The technology worked. The people were never stabilised.",
  },
  {
    era: "Part IV: The GCC Chapter",
    years: "2025 to Present",
    title: "Oman and the GCC",
    body: "Applied Fortune 500 patterns to the GCC context: SuperJet Oman digital nation-building, the first Sharia-compliant digital banking journey, Central Bank of Oman engagement, NCMS leadership programmes, and the founding of ClarityOS as the Human OS before the System OS.",
    quote: "Sustainable change begins where trust is weakest. That is where governance earns its name.",
  },
];

export default function Architect() {
  return (
    <>
      <PageHero
        eyebrow="The Architect"
        title="From exile to transformation architect"
        lead="Born between worlds, forged in Fortune 500 crucibles, built to solve what ordinary frameworks cannot."
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
      </PageHero>

      <Section>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-faint/60" />
          <div className="space-y-14">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.era} delay={i * 80}>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-depth border border-gold/50 flex items-center justify-center text-gold font-display font-semibold text-sm">
                    {i + 1}
                  </div>
                  <p className="eyebrow !mb-1">{t.era}</p>
                  <p className="text-mist text-xs uppercase tracking-widest mb-2">{t.years}</p>
                  <h3 className="font-display text-2xl font-semibold mb-3">{t.title}</h3>
                  <p className="text-dawn/90 leading-relaxed">{t.body}</p>
                  <blockquote className="mt-4 border-l-2 border-gold pl-5 text-gold/90 italic font-display text-lg leading-relaxed">“{t.quote}”</blockquote>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <LogoStrip title="Institutions and credentials behind the work" />

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Recognition" title="The record, on the wall" sub="Awards, keynotes, and credentials earned across two decades of transformation work." />
        <div className="max-w-4xl mx-auto mt-10">
          <Reveal>
            <a
              href={AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gold-edge flex items-center gap-4 p-5 mb-8 group"
            >
              <span className="w-12 h-12 rounded-full bg-depth border border-gold/50 flex items-center justify-center text-gold shrink-0">
                <Award size={22} />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-semibold text-dawn group-hover:text-gold transition-colors">{AWARD_LABEL}</p>
                <p className="text-mist text-xs mt-1">Recognized for pioneering ClarityOS as the world’s first Pre-Governance Operating System.</p>
              </div>
            </a>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {RECOGNITION.map((r, i) => (
            <Reveal key={r.caption} delay={i * 80}>
              <figure className="card-dark !p-3 h-full">
                <img src={r.src} alt={r.caption} loading="lazy" className="rounded-xl w-full h-[210px] object-cover" />
                <figcaption className="text-mist text-xs mt-3 px-2 pb-1 leading-relaxed">{r.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead eyebrow="The 14 Frameworks" title="Every framework was lived before it was taught" />
            <p className="mt-6 text-mist leading-relaxed">
              From the Exile Resilience Framework to the Pyramid Framework for AI adoption, each methodology was pressure-tested on real crises, real teams, and real institutions before it carried the ClarityOS name.
            </p>
            <p className="mt-4 text-dawn/90 leading-relaxed">
              The result is a single conviction: you cannot install a first-world system on a broken human operating system. ClarityOS exists to fix the sequence.
            </p>
          </div>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/portrait-suit.jpg" alt="Zeeshan Sabri portrait" className="rounded-2xl border border-faint/50 object-cover w-full h-[280px]" />
              <img src="/images/badge-ai-trainer.jpg" alt="AI Certified Trainer credential" className="rounded-2xl border border-faint/50 object-cover w-full h-[280px]" />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Bring the architect into your room"
        sub="Keynotes, advisory, and the full ClarityOS installation. Start with the session, or open the enterprise conversation directly."
      />
    </>
  );
}
