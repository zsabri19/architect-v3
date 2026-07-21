import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTABand, NewsletterForm, Reveal } from "@/components/chrome";
import { PageHero, Section } from "@/components/shared";

type Block = { h?: string; p?: string; list?: string[]; quote?: string };

const ARTICLES: Record<string, { title: string; date: string; read: string; issue: string; excerpt: string; blocks: Block[] }> = {
  "investment-paradox": {
    issue: "Issue 01",
    title: "The Investment Paradox",
    date: "March 15, 2025",
    read: "5 min read",
    excerpt: "We spend 90% on System OS and close to nothing on Human OS. This is why 70% of transformations fail.",
    blocks: [
      { h: "The Pattern", p: "Every transformation budget I have audited follows the same split: 90% on System OS. Software licenses, implementation partners, consultants, training modules, documentation. 10% on Human OS. Leadership alignment, decision architecture, ownership clarity, governance, operating rhythm. Then we wonder why 70% of transformations fail." },
      { h: "Three Examples" },
      { h: "1. The ERP Mirage", p: "$10M on SAP. $200K on change management. The system works perfectly. The people do not. Go-live becomes go-back." },
      { h: "2. The Framework Fallacy", p: "Agile. DevOps. Lean. SAFe. Beautiful frameworks on the wall. When the first crisis hits and the CEO wants to override the process, the framework collapses. The reason: there is no architecture for decision-making under uncertainty." },
      { h: "3. The Training Mirage", p: "Workshops. Certifications. Leadership offsites. Inspiration fades by Monday. Behavior stays unchanged. The investment evaporates." },
      { h: "The Real Problem", p: "We treat transformation as a system upgrade. Transformation is a human upgrade wearing a system costume. The System OS is visible, measurable, buyable. The Human OS is invisible, uncomfortable, and hard to invoice. So we invest where we can see, and wonder why nothing changes where it matters." },
      { h: "What Actually Works", list: ["System OS + Human OS = sustainable change", "System OS alone = expensive documentation of failure", "Human OS alone = inspired chaos"], p: "The integration is the work. Everything else is preparation." },
      { h: "The Question", p: "If you audited your last transformation budget, what ratio would you find? 90/10? 80/20? 50/50? And when the pressure hit, which OS actually drove the decisions?" },
      { quote: "Next edition: AI Adoption is Leadership, a deeper look at the Pyramid Framework for embedding AI with strategy and governance." },
    ],
  },
  "ai-adoption": {
    issue: "Issue 02",
    title: "AI Adoption vs Human Readiness",
    date: "March 22, 2025",
    read: "6 min read",
    excerpt: "Why AI adoption fails when human readiness is never measured first.",
    blocks: [
      { h: "The AI Adoption Pyramid", p: "Every AI rollout follows the same four-layer pyramid: Installation, Integration, Governance, Evolution. Most organisations invest 90% in Layer 1 and wonder why adoption stalls." },
      { h: "Layer 1: Installation, the easy part", p: "Buy the licenses. Set up the accounts. Run the training sessions. This is what vendors sell you. This is what IT can deliver. This is where 90% of AI transformation programs start and end." },
      { h: "Layer 2: Integration, the work part", p: "Redesign workflows around AI capabilities. Define human-AI handoff protocols. Create feedback loops for improvement. This requires operational leadership, the people who understand how work actually happens." },
      { h: "Layer 3: Governance, the hard part", p: "Decision rights: who approves AI-generated outputs? Quality assurance: how do we verify accuracy? Risk management: what is our exposure? Ethics: where are the boundaries? This is where most AI programs collapse. Governance determines whether AI creates value or liability." },
      { h: "Layer 4: Evolution, the leadership part", p: "Strategy: how does AI change our competitive position? Organisation: what new roles and capabilities do we need? Culture: how do we build AI literacy and trust? Innovation: what becomes possible that was impossible before? This is where AI becomes transformational, and where leadership earns its title." },
      { h: "The Human Readiness Gap", p: "We measure technical readiness and ignore human readiness. Technical readiness asks: can the system run? Human readiness asks: can the organisation absorb the change? Most AI initiatives answer the first question and never ask the second." },
      { quote: "Installation is Layer 1. Adoption is Layers 2 through 4. Most leaders stop at Layer 1 and wonder why nothing changes." },
    ],
  },
};

function DispatchIndex() {
  return (
    <>
      <PageHero
        eyebrow="The Clarity Dispatch"
        title="One pattern. One decision. One next step."
        lead="Field notes from two decades of transformation: what actually breaks, and what actually holds."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(ARTICLES).map(([slug, a], i) => (
            <Reveal key={slug} delay={i * 100}>
              <Link to={`/dispatch/${slug}`} className="card-dark h-full flex flex-col group">
                <p className="eyebrow !mb-2">{a.issue}</p>
                <h3 className="font-display text-2xl font-semibold group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="text-mist text-xs mt-2">{a.date} · {a.read}</p>
                <p className="text-mist text-sm leading-relaxed mt-4 flex-1">{a.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-gold text-sm font-medium">
                  Read the issue <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 max-w-2xl mx-auto card-dark">
            <p className="eyebrow">Subscribe</p>
            <h3 className="font-display text-2xl font-semibold mb-3">Get the next issue first</h3>
            <p className="text-mist text-sm mb-6">New dispatches go to subscribers before they reach the site.</p>
            <NewsletterForm tag="dispatch" buttonLabel="Subscribe to the Dispatch" />
          </div>
        </Reveal>
      </Section>
      <CTABand
        title="Reading the pattern is step one"
        sub="A clarity session applies the same diagnosis to your own organisation in 90 minutes."
      />
    </>
  );
}

function Article({ slug }: { slug: string }) {
  const a = ARTICLES[slug];
  if (!a) return <DispatchIndex />;
  return (
    <>
      <section className="pt-40 pb-12 lg:pt-48">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <Link to="/dispatch" className="inline-flex items-center gap-2 text-mist text-sm hover:text-gold transition-colors mb-8">
              <ArrowLeft size={15} /> Back to The Dispatch
            </Link>
            <p className="eyebrow">The Clarity Dispatch · {a.issue}</p>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight">{a.title}</h1>
            <p className="mt-4 text-mist text-sm">Published: {a.date} · {a.read}</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {a.blocks.map((b, i) => (
            <Reveal key={i}>
              <div className="mb-9">
                {b.h && <h2 className="font-display text-2xl font-semibold mb-4 text-dawn">{b.h}</h2>}
                {b.p && <p className="text-dawn/85 leading-[1.85]">{b.p}</p>}
                {b.list && (
                  <ul className="my-4 space-y-2.5">
                    {b.list.map((li) => (
                      <li key={li} className="flex gap-3 text-dawn/85 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {li}
                      </li>
                    ))}
                  </ul>
                )}
                {b.quote && (
                  <blockquote className="border-l-2 border-gold pl-6 py-1 text-gold/90 italic font-display text-xl leading-relaxed">{b.quote}</blockquote>
                )}
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="mt-14 pt-8 border-t border-faint/40">
              <p className="text-mist text-sm">Zeeshan Sabri, Founder of ClarityOS. Crisis-to-Clarity Architect.</p>
              <div className="mt-8 card-dark">
                <p className="eyebrow">Subscribe</p>
                <NewsletterForm tag="dispatch" buttonLabel="Subscribe" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand
        title="Audit your own ratio"
        sub="Bring your last transformation budget to a clarity session. Leave knowing which OS is actually driving your decisions."
      />
    </>
  );
}

export default function Dispatch() {
  const { slug } = useParams();
  return slug ? <Article slug={slug} /> : <DispatchIndex />;
}
