import { Link } from "react-router";
import { Award, ArrowRight } from "lucide-react";
import { CTABand, NewsletterForm, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";

const PARTS = [
  {
    part: "Part I: Roots & Resilience",
    era: "Kuwait & Pakistan, 1980s to 1992",
    body: "Iraq invades Kuwait on August 2, 1990. A Pakistani family loses everything, rebuilds in Pakistan, and returns to a Kuwait scarred by war. Cricket becomes the training ground for discipline and strategy.",
    quote: "Reinvention is not about discarding the past. It is about taking what is broken and giving it new alignment.",
  },
  {
    part: "Part II: Fortune 500 Foundations",
    era: "Huawei and Motorola, 2012 to 2025",
    body: "Breaking into Huawei and Motorola as a Pakistani professional in the Gulf, proving credibility twice over, and turning governance from red tape into an $80M, zero-breach runway.",
    quote: "Competence opens the door, but credibility keeps you inside.",
  },
  {
    part: "Part III: The GCC Odyssey",
    era: "Kuwait, Bahrain, Dubai, Qatar, Oman, Saudi Arabia",
    body: "Reading six GCC markets as distinct cultural ecosystems rather than one monolith, and building cross-border authority in twenty-four months.",
    quote: "Leaders don't just read contracts. They read cultures.",
  },
  {
    part: "Part IV: Frameworks & Playbooks",
    era: "The signature methodology",
    body: "A friend's phone call becomes the Pyramid Framework. Procurement is reframed from a cost center that says no into a strategic growth engine.",
    quote: "If a framework can't guide a friend, it won't guide a Fortune 500.",
  },
  {
    part: "Part V: Building Movements",
    era: "Oman and beyond",
    body: "Dignity-first labor reform at Shams for Services, Oman's first Sharia-compliant digital bank with SuperJet, and AI governance built on interpretation, not replacement.",
    quote: "Sustainable change begins where trust is weakest.",
  },
  {
    part: "Part VI: The Leader & The Self",
    era: "The reckoning",
    body: "A TriMetrix assessment becomes the Character Compass. The final chapter turns from Fortune 500 case studies to letters written for Nashwa, Amirah, and Ahlam.",
    quote: "Emotional intelligence is not optional. It is the architecture of sustainable leadership.",
  },
];

const METRICS = [
  { n: "90–95%", d: "Pyramid Framework adoption, against a 25% industry standard" },
  { n: "$80M", d: "Procurement portfolio managed with zero compliance breaches" },
  { n: "6", d: "GCC markets navigated, cross-border authority built in 24 months" },
  { n: "75%", d: "Reduction in subcontractor penalties, Super-Labor, Oman" },
];

const FOURTEEN_FRAMEWORKS = [
  { t: "Exile Resilience", q: "When systems collapse, resilience becomes your first governance framework." },
  { t: "Cultural Ecosystem Mapping", q: "Leaders don't just read contracts. They read cultures." },
  { t: "Identity Preservation Under Change", q: "Success is about adapting without losing your core." },
  { t: "Constraint-Based Innovation", q: "Constraints are not obstacles — they are innovation accelerators." },
  { t: "Governance as Accelerator", q: "Governance isn't red tape. It's the runway." },
  { t: "Market Volatility Navigation", q: "Market volatility is strategic intelligence in motion." },
  { t: "Crisis as Audit", q: "Crisis is not disruption. It is a forced audit." },
  { t: "The Pyramid (Signature)", q: "If a framework can't guide a friend, it won't guide a Fortune 500." },
  { t: "Function Reframing", q: "Procurement is not about cutting costs. It's about creating leverage." },
  { t: "Cross-Cultural Authority", q: "Authority transcends geography when built on competence and cultural respect." },
  { t: "Super-Labor", q: "Sustainable change begins where trust is weakest." },
  { t: "Digital Nation Building", q: "Nation-building begins with solving frustrations you've lived." },
  { t: "AI Governance Integration", q: "Technology becomes transformation only when leaders act as interpreters." },
  { t: "Character Compass", q: "Emotional intelligence is the architecture of sustainable leadership." },
];

const WHY_AUDIENCES = [
  "For leaders who sense that technical frameworks alone are not enough — who know that sustainable transformation requires character, cultural intelligence, and the courage to start at the foundation.",
  "For anyone who has ever been the outsider in the room, the one who had to prove credibility twice over before being heard.",
  "For my daughters — Nashwa, Amirah, and Ahlam — so they understand that their father's restlessness was never aimless. It was a compass.",
];

export default function Memoir() {
  return (
    <>
      <PageHero
        eyebrow="The Book, Coming 2026"
        title="From Exile to Transformation: A Memoir Beyond Techniques"
        lead="The complete story, from the night Iraq invaded Kuwait in 1990 to Fortune 500 transformation at Huawei and Motorola, and the birth of ClarityOS — captured in a memoir written for the next generation of leaders."
      >
        <div className="mt-7 inline-flex items-center gap-2.5 border border-gold/40 rounded-full px-4 py-2.5 text-xs text-gold uppercase tracking-[0.15em]">
          <Award size={14} className="shrink-0" />
          Winner, Entrepreneurial Excellence Award — Founders 2.0 Conference, Dubai, December 2025
        </div>
      </PageHero>

      <Section>
        <SectionHead eyebrow="The Narrative" title="A story of crisis, clarity, and transformation" sub="Six parts, fifteen chapters, and an epilogue that reveals why it was never fourteen separate frameworks." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PARTS.map((p, i) => (
            <Reveal key={p.part} delay={i * 80}>
              <div className="card-dark h-full flex flex-col">
                <p className="text-gold text-xs uppercase tracking-[0.2em]">{p.part}</p>
                <p className="text-mist text-xs mt-1 mb-4">{p.era}</p>
                <p className="text-dawn/90 text-sm leading-relaxed flex-1">{p.body}</p>
                <blockquote className="mt-5 border-l-2 border-gold pl-4 text-gold/90 italic font-display leading-relaxed text-[15px]">“{p.quote}”</blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="From the Book" title="The Prologue" />
        <Reveal>
          <div className="mt-10 max-w-3xl mx-auto card-gold-edge !p-8 lg:!p-10">
            <p className="font-display text-lg lg:text-xl italic leading-relaxed text-dawn/90">
              “Kuwait, August 2, 1990. The sirens started at dusk. Not the test alarms we had grown accustomed to in Kuwait City, but the real ones — the kind that turned ordinary evenings into something you remember for the rest of your life. I was young, barely old enough to understand the geopolitics of what was happening, but old enough to feel the weight of it in my mother's grip as we moved through corridors lit by emergency generators.”
            </p>
            <p className="mt-5 text-gold text-xs uppercase tracking-[0.2em]">— Prologue, From Exile to Transformation</p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHead eyebrow="The Proof" title="Frameworks tested on real crises, real teams, real institutions" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {METRICS.map((m, i) => (
            <Reveal key={m.d} delay={i * 70}>
              <div className="card-dark !p-6 text-center h-full flex flex-col justify-center">
                <p className="font-display text-3xl lg:text-4xl font-semibold text-gold">{m.n}</p>
                <p className="text-mist text-xs mt-2 leading-relaxed">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead
          eyebrow="The Frameworks"
          title="Fourteen frameworks, born in exile and constraint"
          sub="Every framework in this book was field-tested first — on a friend, a family member, or the author himself — before it reached a boardroom."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {FOURTEEN_FRAMEWORKS.map((f, i) => (
            <Reveal key={f.t} delay={(i % 6) * 60}>
              <div className="card-dark !p-5 h-full">
                <h3 className="font-semibold text-sm mb-1.5">{f.t}</h3>
                <p className="text-mist text-[13px] leading-relaxed italic">“{f.q}”</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-dawn/90 leading-relaxed">
              For years these fourteen frameworks operated as separate instruments. The epilogue reveals what connects them: you cannot install a first-world governance system on a broken human operating system. That recognition became ClarityOS, and its 8C Crisis-to-Clarity sequence is how the fourteen frameworks convert into a program you can install today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
              <Link to="/clarityos" className="btn-ghost">See the 8C Methodology <ArrowRight size={16} /></Link>
              <Link to="/frameworks" className="btn-ghost">Explore the Full Framework Library <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHead eyebrow="Beyond Techniques" title="Why fourteen frameworks became one operating system" sub="The epilogue's thesis, and the reason ClarityOS exists." />
        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <Reveal>
            <div className="card-dark h-full">
              <p className="text-dawn/90 leading-relaxed">
                The fourteen frameworks in this book are not intellectual exercises. They are codified experiences, each born in a moment of displacement, constraint, or crisis, and tested on a friend or family member before it was deployed in a corporate context.
              </p>
              <p className="mt-4 text-dawn/90 leading-relaxed">
                ClarityOS is not a fifteenth framework layered on top. It is the operating system that connects the other fourteen — the Pre-Governance methodology that addresses the human foundation before any technical, structural, or strategic system is installed.
              </p>
              <blockquote className="mt-6 border-l-2 border-gold pl-4 text-gold/90 italic font-display leading-relaxed text-[15px]">
                “Techniques are necessary but insufficient. What makes you transformational is what lies beyond techniques: character, cultural intelligence, resilience, and the willingness to start at the foundation when everyone else is building from the top.”
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-gold-edge h-full flex flex-col">
              <p className="eyebrow !mb-3">Dedication</p>
              <p className="font-display text-lg italic text-dawn/90 leading-relaxed">
                “For Nashwa, Amirah, and Ahlam. Leadership is not about titles or positions. It is about presence under pressure, and the space you create for others to grow.”
              </p>
              <p className="eyebrow !mb-3 mt-8">Why I Wrote This</p>
              <ul className="space-y-3">
                {WHY_AUDIENCES.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-dawn/90 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-shadow/40">
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
