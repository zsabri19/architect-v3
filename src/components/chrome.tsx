import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import {
  NAV_LINKS, STRIPE_SESSION_URL, EMAIL, LINKEDIN, YOUTUBE, INSTAGRAM, TIKTOK,
  MAILCHIMP_ACTION, MAILCHIMP_U, MAILCHIMP_ID,
} from "@/lib/content";

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Navigation ---------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-void/90 backdrop-blur-md border-b border-faint/40" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-wide text-dawn">
          Zeeshan <span className="text-gold">Sabri</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.filter((l) => l.to !== "/" && l.to !== "/connect").map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-wide transition-colors ${isActive ? "text-gold" : "text-mist hover:text-dawn"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/connect" className={({ isActive }) => `text-[13px] font-medium tracking-wide ${isActive ? "text-gold" : "text-mist hover:text-dawn"}`}>
            Connect
          </NavLink>
          <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold !px-5 !py-2.5 !text-xs">
            Book $79 Session
          </a>
        </nav>
        <button className="xl:hidden text-dawn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden bg-shadow border-t border-faint/40 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-gold" : "text-dawn"}`}>
              {l.label}
            </NavLink>
          ))}
          <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold mt-2 text-center">
            Book $79 Clarity Session
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------- Newsletter form (Mailchimp) ---------- */
export function NewsletterForm({ tag, buttonLabel = "Subscribe" }: { tag?: string; buttonLabel?: string }) {
  return (
    <form action={MAILCHIMP_ACTION} method="POST" target="_blank" className="flex flex-col sm:flex-row gap-3 w-full">
      <input type="hidden" name="u" value={MAILCHIMP_U} />
      <input type="hidden" name="id" value={MAILCHIMP_ID} />
      {tag && <input type="hidden" name="tags" value={tag} />}
      <input
        type="email"
        name="EMAIL"
        required
        placeholder="Your email address"
        className="flex-1 bg-depth border border-faint/60 rounded-lg px-4 py-3.5 text-sm text-dawn placeholder:text-mist focus:outline-none focus:border-gold"
      />
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input type="text" name={`b_${MAILCHIMP_U}_${MAILCHIMP_ID}`} tabIndex={-1} defaultValue="" />
      </div>
      <button type="submit" className="btn-gold !py-3.5 whitespace-nowrap">{buttonLabel}</button>
    </form>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-faint/40 bg-shadow/60">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-2xl font-semibold mb-3">Zeeshan <span className="text-gold">Sabri</span></p>
            <p className="text-mist text-sm leading-relaxed mb-2">The Human OS before the System OS.</p>
            <p className="text-gold text-sm font-medium">ClarityOS is the prerequisite, not the upgrade.</p>
            <div className="flex gap-4 mt-6 text-xs text-mist">
              <a href={LINKEDIN} target="_blank" rel="noopener" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href={YOUTUBE} target="_blank" rel="noopener" className="hover:text-gold transition-colors">YouTube</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-gold transition-colors">Instagram</a>
              <a href={TIKTOK} target="_blank" rel="noopener" className="hover:text-gold transition-colors">TikTok</a>
            </div>
          </div>
          <div>
            <p className="eyebrow">Navigate</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="text-mist hover:text-gold transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">The Clarity Dispatch</p>
            <p className="text-mist text-sm mb-4">One pattern, one decision, one next step. Direct to your inbox.</p>
            <NewsletterForm tag="dispatch" buttonLabel="Subscribe" />
            <a href={`mailto:${EMAIL}`} className="block mt-5 text-sm text-mist hover:text-gold transition-colors">{EMAIL}</a>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-faint/30 flex flex-col sm:flex-row justify-between gap-3 text-xs text-mist">
          <span>© {new Date().getFullYear()} Zeeshan Sabri. All rights reserved.</span>
          <span>Muscat, Oman. Operating across the GCC.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating contact ---------- */
export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-shadow border border-faint/50 rounded-2xl p-6 w-[290px] gold-glow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-display text-lg font-semibold">Quick Contact</h3>
            <button onClick={() => setOpen(false)} className="text-mist hover:text-dawn" aria-label="Close"><X size={18} /></button>
          </div>
          <p className="text-mist text-sm mb-4">Choose the path that fits your situation.</p>
          <div className="grid gap-2.5">
            <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold !py-3 !text-xs text-center">Buy $79 Session</a>
            <a href={`mailto:${EMAIL}`} className="btn-ghost !py-3 !text-xs text-center">Send Email</a>
            <Link to="/connect" onClick={() => setOpen(false)} className="btn-ghost !py-3 !text-xs text-center">Enterprise Enquiry</Link>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gold text-void flex items-center justify-center gold-glow hover:bg-shine transition-all hover:-translate-y-1"
        aria-label="Open contact options"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

/* ---------- CTA band (end of every page) ---------- */
export function CTABand({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-depth via-shadow to-void border border-gold/25 p-10 lg:p-16 text-center gold-glow">
            <div className="eyebrow">Next Step</div>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-tight mb-5">{title}</h2>
            <p className="text-mist text-base lg:text-lg max-w-2xl mx-auto mb-9">{sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={STRIPE_SESSION_URL} target="_blank" rel="noopener" className="btn-gold">
                Book the $79 Clarity Session <ArrowRight size={16} />
              </a>
              <Link to="/connect" className="btn-ghost">Enterprise Enquiry</Link>
            </div>
            <p className="mt-6 text-xs text-mist">Paid session for personal clarity. Enterprise path for teams and institutions.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
