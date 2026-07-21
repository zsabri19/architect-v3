import { CREDIBILITY_LOGOS, ECOSYSTEM_LOGOS } from "@/lib/content";
import { Reveal } from "./chrome";

function LogoCard({ l, i }: { l: { src: string; alt: string; caption: string; bgClass?: string }; i: number }) {
  return (
    <Reveal delay={i * 60}>
      <div className={`group rounded-xl h-[110px] flex items-center justify-center p-5 transition-all duration-300 hover:-translate-y-1 ${l.bgClass ?? "bg-dawn"}`} title={l.caption}>
        <img src={l.src} alt={l.alt} className="max-h-[72px] max-w-full object-contain" loading="lazy" />
      </div>
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.1] max-w-4xl">{title}</h1>
          {lead && <p className="mt-6 text-lg lg:text-xl text-mist max-w-2xl leading-relaxed">{lead}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-14 lg:py-20 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-3xl lg:text-[2.75rem] font-semibold leading-tight max-w-3xl">{title}</h2>
      {sub && <p className="mt-4 text-mist text-base lg:text-lg max-w-2xl">{sub}</p>}
    </Reveal>
  );
}

export function LogoStrip({ title = "Credibility earned inside real institutions" }: { title?: string }) {
  return (
    <Section className="!py-12">
      <Reveal>
        <p className="text-center text-mist text-xs uppercase tracking-[0.3em] mb-10">{title}</p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CREDIBILITY_LOGOS.map((l, i) => (
          <LogoCard key={l.alt} l={l} i={i} />
        ))}
      </div>
      <Reveal>
        <p className="text-center text-mist text-xs uppercase tracking-[0.3em] mt-14 mb-8">Ventures, platforms, and ecosystem</p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1100px] mx-auto">
        {ECOSYSTEM_LOGOS.map((l, i) => (
          <LogoCard key={l.alt} l={l} i={i} />
        ))}
      </div>
    </Section>
  );
}

export function Divider() {
  return <div className="max-w-[1440px] mx-auto px-6 lg:px-16"><div className="h-px bg-faint/40" /></div>;
}
