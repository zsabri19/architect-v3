import { useState } from "react";
import { Link } from "react-router";
import { Award, ArrowRight, BookOpen, Lightbulb, Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { CTABand, NewsletterForm, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { AWARD_LABEL, AWARD_URL, EMAIL } from "@/lib/content";

const BOOK_COVER =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_cover_main_4e011d21.png";

const INTERIOR_IMAGES = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_opening_spread_001f34e8.png",
    label: "Opening Spread",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_chapter_header_09c97580.png",
    label: "Chapter Header",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_text_page_3922bd32.png",
    label: "Text Layout",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_table_of_contents_51da1965.png",
    label: "Table of Contents",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_dedication_page_7d45d152.png",
    label: "Dedication",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663082684680/S8MfvHPtiwRMBxbjeesKWV/book_interior_foreword_page_2a1812d8.png",
    label: "Foreword",
  },
];

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
    body: "Dignity-first labor reform at Shams for Services; Oman's first Sharia-compliant digital bank; and AI governance built on interpretation, not replacement, through SuperJet.",
    quote: "Sustainable change begins where trust is weakest.",
  },
  {
    part: "Part VI: The Leader & The Self",
    era: "The reckoning",
    body: "A TriMetrix assessment becomes the Character Compass. The final chapter turns from Fortune 500 case studies to letters written for Nashwa, Amirah, and Ahlam.",
    quote: "Emotional intelligence is not optional. It is the architecture of sustainable leadership.",
  },
];

const TOC = [
  {
    num: "I",
    title: "Roots & Resilience",
    chapters: ["Born Between Worlds", "The Gulf War — When Systems Collapse", "Return and Reinvention"],
  },
  {
    num: "II",
    title: "Fortune 500 Foundations",
    chapters: ["Breaking Into the Room", "Governance as Runway", "The Constraint Advantage"],
  },
  {
    num: "III",
    title: "The GCC Odyssey",
    chapters: ["Reading Cultures, Not Just Contracts", "Building Authority Across Borders"],
  },
  {
    num: "IV",
    title: "Frameworks & Playbooks",
    chapters: ["The Pyramid — A Framework for Everything", "Reframing the Function"],
  },
  {
    num: "V",
    title: "Building Movements",
    chapters: ["Super-Labor — Dignity at the Root", "Digital Nation-Building in Oman", "AI as Interpreter, Not Replacement"],
  },
  {
    num: "VI",
    title: "The Leader & The Self",
    chapters: ["The Character Compass", "Letters to My Daughters"],
  },
];

const METRICS = [
  { n: "90–95%", d: "Pyramid Framework adoption, against a 25% industry standard" },
  { n: "$80M", d: "Procurement portfolio managed with zero compliance breaches" },
  { n: "6", d: "GCC markets navigated, cross-border authority built in 24 months" },
  { n: "75%", d: "Reduction in subcontractor penalties, Super-Labor, Oman" },
];

const ROI_METRICS = [
  { n: "150–200%", d: "Year One ROI across validated case studies" },
  { n: "60–85%", d: "Organizational resilience improvement across crisis scenarios" },
  { n: "80%", d: "Innovation output enhanced through constraint-based approaches" },
  { n: "90%", d: "Leadership sustainability improvement via Character Compass" },
];

const ROADMAP = [
  {
    phase: "Foundation",
    frameworks: "Resilience, Identity, Crisis Audit, Character Compass",
    goal: "Stabilize the human operating system before installing systems.",
  },
  {
    phase: "Operational",
    frameworks: "Cultural Mapping, Constraint Innovation, Governance Acceleration, Volatility Navigation",
    goal: "Build repeatable execution and governance rhythms.",
  },
  {
    phase: "Transformation",
    frameworks: "Pyramid, Function Reframing, Super-Labor, Digital Nation Building",
    goal: "Scale structural change and cross-cultural authority.",
  },
  {
    phase: "Integration",
    frameworks: "Cross-Cultural Authority, AI Governance Integration",
    goal: "Embed AI, compliance, and legacy into one coherent system.",
  },
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

const FRAMEWORK_SPOTLIGHTS = [
  {
    name: "Cultural Ecosystem Mapping",
    quote: "Leaders don't just read contracts. They read cultures.",
    params: "Power distance, risk tolerance, innovation outlook, team orientation, process formality",
    result: "70% improved cross-cultural project success",
  },
  {
    name: "Exile Resilience Framework",
    quote: "When systems collapse, resilience becomes your first governance framework.",
    params: "Stabilization, Assessment, Reconstruction, Integration",
    result: "60% faster crisis response",
  },
  {
    name: "The Pyramid Framework",
    quote: "Every transformation starts with a stable base.",
    params: "Foundation, Structure, Alignment, Optimization, Transformation",
    result: "90–95% adoption vs. 25% industry standard",
  },
  {
    name: "Identity Preservation Under Change",
    quote: "You adapt, but you do not dissolve.",
    params: "Core values, adaptive behaviors, boundary management, cultural integration",
    result: "Maintained organizational identity through 3 major restructurings",
  },
  {
    name: "Constraint Advantage Framework",
    quote: "Constraints are not obstacles. They are design parameters.",
    params: "Resource mapping, constraint identification, advantage extraction, leverage points",
    result: "Turned budget limitations into competitive differentiation",
  },
  {
    name: "Pre-Governance Operating System",
    quote: "Clarity before scale. Stabilization before optimization.",
    params: "Structural clarity, sequencing, disciplined thinking, Human OS before System OS",
    result: "The foundational methodology behind ClarityOS",
  },
];

const WHY_AUDIENCES = [
  "For leaders who sense that technical frameworks alone are not enough — who know that sustainable transformation requires character, cultural intelligence, and the courage to start at the foundation.",
  "For anyone who has ever been the outsider in the room, the one who had to prove credibility twice over before being heard.",
  "For my daughters — Nashwa, Amirah, and Ahlam — so they understand that their father's restlessness was never aimless. It was a compass.",
];

export default function Memoir() {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => setActiveImage((i) => (i + 1) % INTERIOR_IMAGES.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + INTERIOR_IMAGES.length) % INTERIOR_IMAGES.length);

  return (
    <>
      <PageHero
        eyebrow="The Book, Coming 2026"
        title="From Exile to Transformation: A Memoir Beyond Techniques"
        lead="The complete story, from the night Iraq invaded Kuwait in 1990 to Fortune 500 transformation at Huawei and Motorola, and the birth of ClarityOS — captured in a memoir written for the next generation of leaders."
      >
        <div className="mt-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1 max-w-2xl">
            <a
              href={AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-gold/40 rounded-full px-4 py-2.5 text-xs text-gold uppercase tracking-[0.15em] hover:bg-gold/10 transition-colors"
            >
              <Award size={14} className="shrink-0" />
              {AWARD_LABEL}
            </a>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#prologue" className="btn-gold">
                Read the Prologue
                <ArrowRight size={16} />
              </a>
              <a href="#book" className="btn-ghost">
                Explore the Book
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[320px] shrink-0">
            <img
              src={BOOK_COVER}
              alt="From Exile to Transformation — Book Cover"
              className="w-full max-w-[280px] mx-auto shadow-2xl shadow-black/60"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
            />
          </div>
        </div>
      </PageHero>

      <Section id="book">
        <SectionHead
          eyebrow="About the Book"
          title="A Story of Clarity Forged in Crisis"
          sub="In 1989, when war forced his family from Kuwait to Pakistan, Zeeshan Sabri experienced exile before he understood the word."
        />
        <div className="grid lg:grid-cols-2 gap-10 mt-12 items-start">
          <Reveal>
            <div className="card-dark h-full">
              <p className="text-dawn/90 leading-relaxed mb-5">
                Those early years of uncertainty became the compass for a life dedicated to building clarity in chaos, dignity in work, and governance in transformation. This memoir blends personal narrative with professional frameworks forged in Fortune 500 boardrooms and national-scale projects across the Gulf.
              </p>
              <p className="text-dawn/90 leading-relaxed mb-5">
                From Huawei and Motorola to the Government of Oman, the journey captures what it takes to lead under pressure, reframe procurement into progress, and design frameworks like the Pyramid and Beyond Techniques that anchor transformation in both people and systems.
              </p>
              <blockquote className="border-l-2 border-gold pl-4 text-gold/90 italic font-display leading-relaxed text-[15px]">
                "True transformation starts where trust has been broken and dignity restored."
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "15 Chapters", desc: "Six transformative parts" },
                { icon: Lightbulb, label: "14 Frameworks", desc: "Battle-tested methodologies" },
                { icon: Globe, label: "4 Continents", desc: "Cross-cultural leadership" },
                { icon: Award, label: "Award-Winning", desc: "Founders 2.0, Dubai 2025" },
              ].map((item, i) => (
                <div key={i} className="card-dark !p-5 text-center">
                  <item.icon className="mx-auto mb-3 text-gold" size={26} strokeWidth={1.2} />
                  <p className="text-gold text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-mist text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="card-gold-edge text-center">
              <p className="eyebrow">As Seen In MarketersMEDIA — Founders 2.0 Conference, Dubai, December 2025</p>
              <blockquote className="font-display text-xl lg:text-2xl italic leading-relaxed text-dawn/90 mt-4">
                "We are seeing a maturity shift in the GCC. Leaders are realizing that you cannot install a First World governance system on a broken human operating system."
              </blockquote>
              <p className="text-gold text-sm uppercase tracking-wider mt-4">— Zeeshan Sabri, Founders 2.0 Conference, Dubai</p>
              <p className="text-mist text-sm mt-5 leading-relaxed">
                The Entrepreneurial Excellence Award recognized ClarityOS as the world’s first Pre-Governance Operating System, currently deployed across national-scale digital banking, telecom, and defense procurement transformations serving 5 million+ users. Press coverage published January 29, 2026.
              </p>
              <a
                href={AWARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6"
              >
                Read the Press Release <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="prologue" className="bg-shadow/40">
        <SectionHead eyebrow="From the Book" title="The Prologue: The Night Everything Changed" />
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          <Reveal>
            <p className="text-dawn/90 leading-relaxed">
              Muscat, December 2025. I was sitting in my home office, thousands of kilometers from the Founders 2.0 Conference stage in Dubai. Visa logistics and travel constraints had made the trip impossible — a familiar pattern for someone who has spent a career navigating borders that do not always open on schedule. So I watched the ceremony through a screen, the way I had learned to participate in a world that does not always make space for you at the table.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-dawn/90 leading-relaxed">
              When they called my name for the Entrepreneurial Excellence Award, the applause was distant, filtered through a video feed. But what I felt was immediate. Not pride, exactly — something closer to recognition. Not the kind the audience was giving me, but the kind you give yourself when the pattern you have been building for decades is finally seen by others.
            </p>
          </Reveal>
          <Reveal>
            <div className="card-gold-edge !p-8">
              <p className="font-display text-lg lg:text-xl italic leading-relaxed text-dawn/90">
                "They don't give awards for playing it safe. Crisis forces clarity that comfort never could."
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-dawn/90 leading-relaxed">
              The award was for ClarityOS — a methodology the citation described as the world's first Pre-Governance Operating System. But ClarityOS did not begin in a strategy session or a product lab. It began on a night in 1990, in a city under siege, in the grip of a mother trying to keep her family together as the world she had built dissolved around her.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-dawn/90 leading-relaxed">
              Kuwait, August 2, 1990. The sirens started at dusk. Not the test alarms we had grown accustomed to in Kuwait City, but the real ones — the kind that turned ordinary evenings into something you remember for the rest of your life. I was young, barely old enough to understand the geopolitics of what was happening, but old enough to feel the weight of it in my mother's grip as we moved through corridors lit by emergency generators.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-lg italic text-gold/80 text-center mt-8">
              Alhamdulillah. The journey continues.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="The Narrative"
          title="A story of crisis, clarity, and transformation"
          sub="Six parts, fifteen chapters, and an epilogue that reveals why it was never fourteen separate frameworks."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PARTS.map((p, i) => (
            <Reveal key={p.part} delay={i * 80}>
              <div className="card-dark h-full flex flex-col">
                <p className="text-gold text-xs uppercase tracking-[0.2em]">{p.part}</p>
                <p className="text-mist text-xs mt-1 mb-4">{p.era}</p>
                <p className="text-dawn/90 text-sm leading-relaxed flex-1">{p.body}</p>
                <blockquote className="mt-5 border-l-2 border-gold pl-4 text-gold/90 italic font-display leading-relaxed text-[15px]">
                  “{p.quote}”
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Contents" title="The Journey in Six Parts" sub="Fifteen chapters plus epilogue and appendix." />
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {TOC.map((part, pi) => (
            <Reveal key={part.num}>
              <div className="flex items-start gap-5 sm:gap-8">
                <div className="font-display text-4xl sm:text-5xl text-gold/30 font-light leading-none pt-1 w-12 sm:w-16 shrink-0 text-right">
                  {part.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl text-dawn font-semibold mb-3">{part.title}</h3>
                  <div className="space-y-2">
                    {part.chapters.map((ch, ci) => {
                      const chapterNum = TOC.slice(0, pi).reduce((acc, p) => acc + p.chapters.length, 0) + ci + 1;
                      return (
                        <div key={ci} className="flex items-baseline gap-3">
                          <span className="text-gold text-xs uppercase tracking-wider">{String(chapterNum).padStart(2, "0")}</span>
                          <span className="text-mist text-sm sm:text-base">{ch}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {pi < TOC.length - 1 && <div className="h-px bg-faint/30 mt-8" />}
            </Reveal>
          ))}
          <Reveal>
            <p className="text-center text-mist text-sm italic mt-8">
              Plus: Epilogue — Beyond Techniques · Appendix — The 14 Frameworks Quick Reference
            </p>
          </Reveal>
        </div>
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
          eyebrow="Implementation"
          title="A four-phase roadmap, not a random toolkit"
          sub="The 14 frameworks are sequenced so that each phase builds on the one before it."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.phase} delay={i * 80}>
              <div className="card-dark h-full">
                <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Phase {i + 1}</p>
                <h3 className="font-display text-xl font-semibold text-dawn mb-3">{r.phase}</h3>
                <p className="text-mist text-sm leading-relaxed mb-4">{r.goal}</p>
                <p className="text-xs text-dawn/70">
                  <span className="text-gold uppercase tracking-wider text-[10px]">Frameworks:</span> {r.frameworks}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {ROI_METRICS.map((m) => (
              <div key={m.d} className="card-gold-edge !p-5 text-center">
                <p className="font-display text-2xl font-semibold text-gold">{m.n}</p>
                <p className="text-mist text-xs mt-2 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Framework Spotlight"
          title="Six frameworks, field-tested before they reached the boardroom"
          sub="Each one was born in a moment of displacement, constraint, or crisis, and tested on a friend or family member first."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FRAMEWORK_SPOTLIGHTS.map((fw, i) => (
            <Reveal key={fw.name} delay={i * 80}>
              <div className="card-dark h-full border-l-2 border-gold/40 hover:border-gold/80 transition-all duration-300">
                <h3 className="font-display text-lg text-gold font-semibold mb-2">{fw.name}</h3>
                <p className="text-mist italic text-sm mb-4">“{fw.quote}”</p>
                <div className="h-px bg-faint/30 mb-4" />
                <p className="text-xs text-dawn/70 mb-2">
                  <span className="text-gold/80 uppercase tracking-wider text-[10px]">Parameters:</span> {fw.params}
                </p>
                <p className="text-xs text-dawn/70">
                  <span className="text-gold/80 uppercase tracking-wider text-[10px]">Impact:</span> {fw.result}
                </p>
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
              <Link to="/clarityos" className="btn-ghost">
                See the 8C Methodology <ArrowRight size={16} />
              </Link>
              <Link to="/frameworks" className="btn-ghost">
                Explore the Full Framework Library <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Beyond Techniques"
          title="Why fourteen frameworks became one operating system"
          sub="The epilogue's thesis, and the reason ClarityOS exists."
        />
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
        <SectionHead eyebrow="Interior Design" title="A Glimpse Inside the Manuscript" />
        <div className="mt-10 max-w-3xl mx-auto">
          <Reveal>
            <div className="relative">
              <img
                src={INTERIOR_IMAGES[activeImage].src}
                alt={INTERIOR_IMAGES[activeImage].label}
                className="w-full shadow-2xl shadow-black/40 border border-gold/10"
              />
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-void/80 text-gold p-2 rounded-full hover:bg-void transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-void/80 text-gold p-2 rounded-full hover:bg-void transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
          <div className="flex justify-center gap-2 mt-5 flex-wrap">
            {INTERIOR_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative overflow-hidden transition-all duration-300 ${activeImage === i ? "ring-2 ring-gold opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <img src={img.src} alt={img.label} className="w-16 h-12 object-cover" />
              </button>
            ))}
          </div>
          <p className="text-gold text-xs uppercase tracking-wider text-center mt-4">{INTERIOR_IMAGES[activeImage].label}</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Publisher Inquiries</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight">Interested in This Manuscript?</h2>
            <p className="mt-4 text-mist leading-relaxed">
              The manuscript is currently in first draft stage and available for publisher review. For inquiries about publishing rights, representation, or collaboration opportunities, please reach out directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${EMAIL}`} className="btn-gold">
                <Mail size={16} />
                Contact the Author
              </a>
              <a
                href="https://architect.global-mkts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Visit the Main Website <ArrowRight size={16} />
              </a>
            </div>
            <p className="mt-10 text-sm text-mist italic">First Draft Manuscript — March 2026</p>
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
