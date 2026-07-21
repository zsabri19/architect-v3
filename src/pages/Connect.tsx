import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { EMAIL, LINKEDIN, STRIPE_SESSION_URL, YOUTUBE } from "@/lib/content";

const TOPICS = ["Enterprise ClarityOS (90-day program)", "Board advisory", "Speaking engagement", "Executive counsel", "Partnership", "Other"];

export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topic}] Enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Two lanes. Pick the one that fits."
        lead="The paid session and the enterprise path stay separate by design. Choose yours and move."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LANE 1: PAID SESSION */}
          <Reveal>
            <div className="card-dark h-full border-gold/60 gold-glow relative flex flex-col">
              <span className="absolute -top-3 left-7 bg-gold text-void text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Fastest path</span>
              <p className="eyebrow">Lane 1: Personal</p>
              <h2 className="font-display text-3xl font-semibold">The $79 Clarity Session</h2>
              <p className="mt-4 text-mist leading-relaxed flex-1">
                A focused 90-minute paid intervention for founders, executives, and operators who need sharper decisions and cleaner thinking. Book directly. No proposal cycle.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-dawn/90">
                {["90 minutes, one real blocker diagnosed", "Direct read on decisions, ownership, and alignment", "Clear next step before you leave the call"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{x}</li>
                ))}
              </ul>
              <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold w-full mt-8">
                Buy the $79 Session <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* LANE 2: ENTERPRISE */}
          <Reveal delay={120}>
            <div className="card-dark h-full flex flex-col">
              <p className="eyebrow">Lane 2: Enterprise and Advisory</p>
              <h2 className="font-display text-3xl font-semibold">Enterprise Discovery Enquiry</h2>
              <p className="mt-4 text-mist leading-relaxed">
                For enterprise ClarityOS, advisory, speaking, or partnership work. Outline your context and what kind of engagement you need.
              </p>
              <form onSubmit={submit} className="mt-6 grid gap-4 flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="bg-depth border border-faint/60 rounded-lg px-4 py-3.5 text-sm text-dawn placeholder:text-mist focus:outline-none focus:border-gold" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Your email" className="bg-depth border border-faint/60 rounded-lg px-4 py-3.5 text-sm text-dawn placeholder:text-mist focus:outline-none focus:border-gold" />
                </div>
                <select value={topic} onChange={(e) => setTopic(e.target.value)} className="bg-depth border border-faint/60 rounded-lg px-4 py-3.5 text-sm text-dawn focus:outline-none focus:border-gold">
                  {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder="Your context, leadership challenge, and what you need" className="bg-depth border border-faint/60 rounded-lg px-4 py-3.5 text-sm text-dawn placeholder:text-mist focus:outline-none focus:border-gold resize-none" />
                <button type="submit" className="btn-gold w-full">Send Enquiry <Mail size={15} /></button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXPECTATIONS + DIRECT CHANNELS */}
      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHead eyebrow="Response Time" title="What to expect" />
            <div className="grid gap-5 mt-10">
              {[
                { t: "Clarity calls", d: "Initial review starts from your enquiry submission." },
                { t: "Email responses", d: "Initial response within 48 hours for detailed enquiries." },
                { t: "Proposals", d: "Tailored proposals within 5 business days for qualified engagements." },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 80}>
                  <div className="card-dark !p-6">
                    <h3 className="font-semibold text-lg mb-1.5">{x.t}</h3>
                    <p className="text-mist text-sm">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Direct Channels" title="Reach the architect directly" />
            <div className="grid gap-5 mt-10">
              <Reveal>
                <a href={`mailto:${EMAIL}`} className="card-dark !p-6 block group">
                  <h3 className="font-semibold text-lg mb-1.5 group-hover:text-gold transition-colors">Email</h3>
                  <p className="text-mist text-sm">{EMAIL}</p>
                </a>
              </Reveal>
              <Reveal delay={80}>
                <a href={LINKEDIN} target="_blank" rel="noopener" className="card-dark !p-6 block group">
                  <h3 className="font-semibold text-lg mb-1.5 group-hover:text-gold transition-colors">LinkedIn</h3>
                  <p className="text-mist text-sm">Professional network and thought leadership</p>
                </a>
              </Reveal>
              <Reveal delay={160}>
                <a href={YOUTUBE} target="_blank" rel="noopener" className="card-dark !p-6 block group">
                  <h3 className="font-semibold text-lg mb-1.5 group-hover:text-gold transition-colors">YouTube</h3>
                  <p className="text-mist text-sm">Transformation insights and framework explanations</p>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Still deciding which lane fits?"
        sub="The $79 session is the lowest-risk way to find out. One call, one diagnosis, one clear next step."
      />
    </>
  );
}
