import { useState } from "react";
import { ArrowUpRight, Award, Play } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { AWARD_LABEL, AWARD_URL, FIELD_GALLERY, INSTAGRAM, INSTAGRAM_REELS, QUOTE_CARDS, YOUTUBE } from "@/lib/content";

function ReelCard({ id, label }: { id: string; label: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="card-dark !p-0 overflow-hidden">
      {loaded ? (
        <iframe
          src={`https://www.instagram.com/reel/${id}/embed`}
          className="w-full h-[480px] border-0"
          loading="lazy"
          allowFullScreen
          title={label}
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="w-full h-[480px] bg-depth flex flex-col items-center justify-center gap-4 group"
        >
          <span className="w-16 h-16 rounded-full bg-gold text-void flex items-center justify-center group-hover:bg-shine transition-colors">
            <Play size={26} fill="currentColor" />
          </span>
          <span className="text-mist text-sm px-6 text-center">{label}</span>
          <span className="text-gold text-xs uppercase tracking-widest">Tap to load reel</span>
        </button>
      )}
    </div>
  );
}

export default function Media() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="The field, in writing, on stage, and in the room"
        lead="Talks, conversations, workshops, and public moments from the work behind ClarityOS."
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

      {/* YOUTUBE */}
      <Section className="bg-shadow/40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead eyebrow="Video" title="The YouTube channel" />
            <p className="mt-6 text-mist leading-relaxed">
              Framework breakdowns, transformation insights, and on-camera clarity sessions. New material lands on the channel first.
            </p>
            <a href={YOUTUBE} target="_blank" rel="noopener" className="btn-gold mt-8">
              Watch on YouTube <ArrowUpRight size={16} />
            </a>
          </div>
          <Reveal delay={120}>
            <div className="grid grid-cols-3 gap-4">
              {QUOTE_CARDS.map((q, i) => (
                <img key={q.src} src={q.src} alt={q.alt} loading="lazy" className={`rounded-2xl border border-faint/50 object-cover w-full ${i === 1 ? "mt-8" : ""}`} />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* INSTAGRAM REELS */}
      <Section>
        <SectionHead
          eyebrow="Conversations and Rooms"
          title="Selected reels from the field"
          sub="Leadership conversations, founder talks, signing ceremonies, and workshop moments. Reels load on tap to keep the page fast."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INSTAGRAM_REELS.slice(0, 6).map((r, i) => (
            <Reveal key={r.id} delay={i * 60}>
              <ReelCard id={r.id} label={r.label} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="btn-ghost">
              Full archive on Instagram <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </Section>

      {/* FIELD GALLERY */}
      <Section className="bg-shadow/40">
        <SectionHead eyebrow="In the Field" title="Workshops, stages, and signing rooms" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {FIELD_GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 80}>
              <figure className="card-dark !p-3">
                <img src={g.src} alt={g.caption} loading="lazy" className="rounded-xl w-full h-[220px] object-cover" />
                <figcaption className="text-mist text-xs mt-3 px-2 pb-1">{g.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Book the voice behind the work"
        sub="Keynotes, panels, and leadership sessions across the GCC and beyond. Direct enquiry, fast scoping."
      />
    </>
  );
}
