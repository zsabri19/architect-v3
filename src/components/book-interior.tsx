import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// -----------------------------------------------------------------------------
// Reusable ornament: horizontal line with a central diamond
// -----------------------------------------------------------------------------
function GoldOrnament({ className = "", width = "w-24" }: { className?: string; width?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`book-gold-line-left ${width}`} />
      <svg width="16" height="16" viewBox="0 0 20 20" className="text-[#d4af37] shrink-0">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor" />
      </svg>
      <div className={`book-gold-line-left ${width} rotate-180`} />
    </div>
  );
}

// -----------------------------------------------------------------------------
// Cream paper page wrapper
// -----------------------------------------------------------------------------
function BookPage({
  children,
  className = "",
  aspect = "aspect-[2/3]",
}: {
  children: React.ReactNode;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`book-paper-texture relative overflow-hidden shadow-2xl shadow-black/40 border border-[#d4af37]/10 ${aspect} ${className}`}
    >
      {children}
    </div>
  );
}

// -----------------------------------------------------------------------------
// 1. Opening Spread (two-page title spread)
// -----------------------------------------------------------------------------
export function OpeningSpread() {
  return (
    <div className="flex w-full h-full">
      {/* Left page — blank with small ornament */}
      <div className="w-1/2 h-full book-paper-texture border-r border-[#d4af37]/10 flex items-center justify-center">
        <GoldOrnament width="w-16" />
      </div>

      {/* Right page — title page */}
      <div className="w-1/2 h-full book-paper-texture flex flex-col items-center justify-center px-8 sm:px-12 py-16 relative">
        {/* gold border frame */}
        <div className="absolute inset-4 sm:inset-6 border border-[#d4af37]/40" />

        <div className="relative z-10 text-center max-w-[280px]">
          <h1 className="font-book-display text-[#1a2d4d] text-3xl sm:text-4xl font-semibold leading-[1.15] mb-2">
            From Exile to
            <br />
            Transformation
          </h1>

          <GoldOrnament className="my-5" width="w-20" />

          <p className="font-book-display text-[#1a2d4d] text-lg sm:text-xl italic mb-8">
            A Memoir Beyond Techniques
          </p>

          <p className="font-book-body text-[#1a2d4d] text-base sm:text-lg">
            by <span className="font-book-display text-lg sm:text-xl">Zeeshan Sabri</span>
          </p>
        </div>

        <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2">
          <GoldOrnament width="w-14" />
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 2. Chapter Header
// -----------------------------------------------------------------------------
export function ChapterHeaderPage() {
  return (
    <BookPage className="flex flex-col items-center justify-center px-10 py-16">
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <GoldOrnament width="w-32" />
      </div>

      <p className="font-book-accent text-[#1a2d4d] text-sm tracking-[0.25em] uppercase mb-4">Chapter</p>

      <p className="font-book-display text-[#d4af37] text-[120px] sm:text-[140px] leading-none font-semibold mb-6">
        01
      </p>

      <GoldOrnament className="mb-8" width="w-20" />

      <h2 className="font-book-display text-[#1a2d4d] text-3xl sm:text-4xl italic text-center">
        Born Between Worlds
      </h2>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
        <GoldOrnament className="mb-4" width="w-28" />
        <p className="font-book-body text-[#1a2d4d]/60 text-sm tracking-wide">Zeeshan Sabri</p>
      </div>
    </BookPage>
  );
}

// -----------------------------------------------------------------------------
// 3. Text Page
// -----------------------------------------------------------------------------
export function TextPage() {
  return (
    <BookPage className="px-10 sm:px-14 py-14">
      {/* running header */}
      <div className="flex items-center justify-between font-book-display text-[#1a2d4d] text-sm italic mb-3">
        <span>Chapter One</span>
        <span>1</span>
      </div>
      <div className="book-gold-line mb-8" />

      <div className="space-y-5 font-book-body text-[#2c2c2c] text-base sm:text-lg leading-[1.75]">
        <p>
          Kuwait, August 2, 1990. The sirens started at dusk. Not the test alarms we had grown accustomed to in
          Kuwait City, but the real ones — the kind that turned ordinary evenings into something you remember for the
          rest of your life.
        </p>
        <p>
          I was young, barely old enough to understand the geopolitics of what was happening, but old enough to feel
          the weight of it in my mother's grip as we moved through corridors lit by emergency generators.
        </p>
        <p>
          That night taught me the first principle I would later codify into the Exile Resilience Framework: when
          systems collapse, resilience becomes your first governance framework.
        </p>
      </div>

      {/* pull quote */}
      <div className="mt-8 pl-5 border-l-2 border-[#d4af37]">
        <p className="font-book-display text-[#1a2d4d] text-xl italic leading-relaxed">
          "Clarity is born in exile, not in comfort."
        </p>
      </div>
    </BookPage>
  );
}

// -----------------------------------------------------------------------------
// 4. Table of Contents
// -----------------------------------------------------------------------------
export function TOCPage() {
  const parts = [
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

  let chapterCount = 0;

  return (
    <BookPage className="px-8 sm:px-12 py-12 overflow-y-auto">
      <h2 className="font-book-accent text-[#1a2d4d] text-2xl sm:text-3xl tracking-[0.15em] uppercase text-center mb-3">
        Table of Contents
      </h2>
      <GoldOrnament className="mb-8" width="w-32" />

      <div className="space-y-5">
        {parts.map((part, pi) => (
          <div key={pi}>
            <h3 className="font-book-display text-[#1a2d4d] text-lg font-semibold mb-2">
              {part.num}. {part.title}
            </h3>
            <div className="space-y-1.5 pl-4">
              {part.chapters.map((ch) => {
                chapterCount++;
                return (
                  <div key={ch} className="flex items-baseline gap-3">
                    <span className="font-book-accent text-[#d4af37] text-xs tracking-wider w-6">
                      {String(chapterCount).padStart(2, "0")}
                    </span>
                    <span className="font-book-body text-[#2c2c2c] text-sm flex-1">{ch}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <GoldOrnament width="w-24" />
      </div>
    </BookPage>
  );
}

// -----------------------------------------------------------------------------
// 5. Dedication
// -----------------------------------------------------------------------------
export function DedicationPage() {
  return (
    <BookPage className="flex flex-col items-center justify-center px-12 py-16 text-center">
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <GoldOrnament width="w-28" />
      </div>

      <h2 className="font-book-display text-[#1a2d4d] text-3xl sm:text-4xl font-semibold mb-4">Dedication</h2>
      <GoldOrnament className="mb-10" width="w-16" />

      <p className="font-book-display text-[#1a2d4d] text-xl sm:text-2xl italic leading-relaxed max-w-md mb-6">
        For Nashwa, Amirah, and Ahlam.
      </p>

      <p className="font-book-body text-[#2c2c2c] text-base sm:text-lg italic leading-relaxed max-w-sm">
        Leadership is not about titles or positions. It is about presence under pressure, and the space you create for
        others to grow.
      </p>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <GoldOrnament className="mb-4" width="w-28" />
        <p className="font-book-body text-[#1a2d4d]/60 text-sm">— Zeeshan Sabri</p>
      </div>
    </BookPage>
  );
}

// -----------------------------------------------------------------------------
// 6. Epilogue
// -----------------------------------------------------------------------------
export function EpiloguePage() {
  return (
    <BookPage className="px-10 sm:px-14 py-14 overflow-y-auto">
      <h2 className="font-book-accent text-[#1a2d4d] text-2xl sm:text-3xl tracking-[0.15em] uppercase text-center mb-3">
        Epilogue
      </h2>
      <GoldOrnament className="mb-8" width="w-32" />

      <div className="space-y-5 font-book-body text-[#2c2c2c] text-base sm:text-lg leading-[1.75]">
        <p>
          For years, these fourteen frameworks existed as separate instruments — each powerful in its own domain, each
          born from a distinct chapter of lived experience.
        </p>
        <p>
          But over time, a pattern emerged that I had not designed. The frameworks were not separate tools. They were
          expressions of a single underlying principle: you cannot install a first-world governance system on a broken
          human operating system.
        </p>
        <p>
          ClarityOS is the name I gave to that recognition. Not a new framework layered on top of the existing fourteen,
          but the operating system that connects them — the Pre-Governance methodology that addresses the human
          foundation before any technical, structural, or strategic system is installed.
        </p>
      </div>

      <div className="mt-8 pl-5 border-l-2 border-[#d4af37]">
        <p className="font-book-display text-[#1a2d4d] text-xl italic leading-relaxed">
          "Techniques are necessary but insufficient. What makes you transformational is what lies beyond techniques."
        </p>
      </div>

      <p className="mt-6 text-center font-book-display text-[#1a2d4d]/70 text-lg italic">— Zeeshan Sabri</p>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <GoldOrnament width="w-24" />
      </div>
    </BookPage>
  );
}

// -----------------------------------------------------------------------------
// Preview carousel
// -----------------------------------------------------------------------------
const PAGES = [
  { component: OpeningSpread, label: "Opening Spread", aspect: "aspect-[2/3] sm:aspect-[3/2]" },
  { component: ChapterHeaderPage, label: "Chapter Header", aspect: "aspect-[2/3]" },
  { component: TextPage, label: "Text Layout", aspect: "aspect-[2/3]" },
  { component: TOCPage, label: "Table of Contents", aspect: "aspect-[2/3]" },
  { component: DedicationPage, label: "Dedication", aspect: "aspect-[2/3]" },
  { component: EpiloguePage, label: "Epilogue", aspect: "aspect-[2/3]" },
];

export function InteriorBookPreview() {
  const [active, setActive] = useState(0);
  const ActivePage = PAGES[active].component;

  const next = () => setActive((i) => (i + 1) % PAGES.length);
  const prev = () => setActive((i) => (i - 1 + PAGES.length) % PAGES.length);

  return (
    <div className="w-full">
      {/* main preview */}
      <div className="relative max-w-3xl mx-auto mb-8">
        <div
          key={active}
          className={`w-full ${PAGES[active].aspect} transition-opacity duration-500`}
        >
          <ActivePage />
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-void/80 text-gold p-2 rounded-full hover:bg-void transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-void/80 text-gold p-2 rounded-full hover:bg-void transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* thumbnails */}
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
        {PAGES.map((p, i) => {
          const Thumb = p.component;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden transition-all duration-300 w-16 h-12 sm:w-20 sm:h-14 ${
                active === i ? "ring-2 ring-[#d4af37] opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className="scale-[0.25] origin-top-left w-[400%] h-[400%]">
                <Thumb />
              </div>
            </button>
          );
        })}
      </div>

      <p className="font-book-accent text-white/40 text-xs tracking-[0.2em] uppercase text-center mt-4">
        {PAGES[active].label}
      </p>
    </div>
  );
}
