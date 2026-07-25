import { Link } from "react-router";
import { ArrowRight, Download, Award, Globe, BookOpen, Briefcase, GraduationCap, Mic2, MapPin } from "lucide-react";
import { CTABand, Reveal } from "@/components/chrome";
import { PageHero, Section, SectionHead } from "@/components/shared";
import { EMAIL, LINKEDIN, AWARD_LABEL, AWARD_URL } from "@/lib/content";

const PROFILE_PDF = "/profiles/zeeshan-sabri-executive-advisory-profile-2026.pdf";

const STATS = [
  { value: "$95M+", label: "Strategic initiatives delivered, GCC-wide, zero compliance breaches" },
  { value: "5M+", label: "Citizens served on national platform (900+ centers)" },
  { value: "$5.5M+", label: "Documented efficiency gains and AI value created" },
  { value: "97.6%", label: "Excellence rating, national defense procurement (KSA)" },
  { value: "3 + 8", label: "AI platforms in production + operationalized use cases" },
  { value: "22 yrs", label: "Inside Fortune 500, government, and venture transformation" },
];

const COMPETENCIES = {
  procurement: [
    "Strategic Sourcing", "Supplier Relationship Management", "Vendor Consolidation",
    "Contract Management & Negotiation", "TCO & Category Strategy", "Tendering (RFQ/RFP)",
    "Subcontractor Quality Audits", "Procurement Governance & Compliance", "ESG & Ethical Procurement", "ERP/SRM Implementation",
  ],
  ai: [
    "AI Roadmap Design", "Platform Selection & Vendor Evaluation", "Use-Case Development",
    "Human-in-the-Loop Evaluation", "AI Policy Interpretation", "Trust Architecture",
    "AI Readiness Assessment", "Executive AI Communication", "Responsible AI Deployment",
  ],
  transformation: [
    "Digital Transformation", "Operating-Model Architecture", "National Platform & Ecosystem Design",
    "GRC", "Crisis Navigation & Turnaround", "Change Management",
    "Public-Private Ecosystems", "C-Level Stakeholder Engagement", "Leadership Coaching & Mentoring",
  ],
  domain: [
    "Sharia-Compliant Digital Banking Architecture", "Central Bank Licensing (CBO Framework)",
    "Hydrogen / Green Energy Market Entry", "National Technology-Park Cluster Mapping",
    "Institutional Delegation & Partnership",
  ],
};

const ROLES = [
  {
    period: "2024 – Present",
    title: "Founder, ClarityOS™",
    org: "Global",
    points: [
      "Creator of the award-winning pre-governance Human Operating System for organizations and procurement professionals.",
      "Developed the full OS portfolio: ClarityOS™, GovernanceOS™, Crisis-to-Clarity™, CapabilityOS™, TalentOS™, HumanOS™, DocumentationOS.",
      "Awarded the Entrepreneurial Excellence Award at Founders 2.0, Dubai 2025 (score 96/100, Top 10%).",
      "Positioned at LUMS Decode 2025 as infrastructure rather than consulting; 90%+ pilot adoption.",
    ],
  },
  {
    period: "Nov 2023 – Present",
    title: "Managing Partner & Co-Founder",
    org: "Global Markets Technologies (GMT Oman), Muscat",
    points: [
      "Rebuilt GMT as an Oman-registered consultancy at the intersection of technology, procurement transformation, venture building, and GCC market advisory.",
      "Delivered $80M+ in procurement optimization and $3M+ in cost savings across ventures and advisory engagements.",
      "Signed exclusive JV to build Oman's first Sharia-compliant digital bank with full Central Bank of Oman alignment.",
      "Developed the AI Procurement Dashboard, Executive Cascade Model, and AI Pyramid for enterprise AI readiness workshops.",
    ],
  },
  {
    period: "Feb 2024 – Aug 2025 (Exited)",
    title: "Chief Operating Officer",
    org: "SuperJet Oman (GMT Oman venture)",
    points: [
      "Architected and operated Oman's first national API hub, integrated into 900+ Sanad centers nationwide.",
      "Delivered 5M+ users, 4M+ annual transactions, 25% digital-adoption uplift, 30% faster service delivery, and 99.8% uptime.",
      "Integrated the flagship e-Visa service via OmanTel into Oman's national digital platform (OTech) in Q2 2025.",
      "Exited August 2025 with market posture intact following partner-level disagreement.",
    ],
  },
  {
    period: "Sep 2020 – May 2025",
    title: "Regional Procurement Consultant, Middle East & Central Asia",
    org: "Motorola Solutions UK Ltd, Oman / UAE",
    points: [
      "Governed procurement and supplier performance for mission-critical public-safety and national-security programs across 10+ countries.",
      "Delivered $2.5M to $3M+ in cost savings through strategic sourcing and contract optimization.",
      "Applied ML clustering to three years of spend data ($150M+ transactions), raising categorized spend visibility from 60% to 94%.",
      "Built vendor-risk and inspection frameworks aligned to US regulatory standards, reducing supplier risk by 40%+.",
    ],
  },
  {
    period: "2012 – 2020",
    title: "Procurement Director → Senior Procurement Manager → CEG Buyer",
    org: "Huawei Technologies, Bahrain / Kuwait",
    points: [
      "Led regional 4G/5G and enterprise procurement through US sanctions, regulatory complexity, and geopolitical pressure.",
      "Managed $50M+ annual spend with zero compliance breaches; maintained critical telecom infrastructure continuity under sanctions constraints.",
      "Delivered 10–15% cost savings with improved payment terms; consolidated supplier base by 25%.",
      "Awarded Huawei Best Mentor Award (2017) and Huawei Future Star (2015).",
    ],
  },
];

const ENGAGEMENTS = [
  { project: "SuperJet National Platform, Oman", sector: "Government / e-services", outcome: "900+ Sanad centers; 5M+ users; 4M+ transactions; +25% adoption; +30% speed; 99.8% uptime" },
  { project: "Oman Sharia-Compliant / CBO Digital Bank", sector: "Central Bank / Fintech", outcome: "Category 1 pathway; OMR 30M capital; $2B+ market; $18–22M GMT valuation; full CBO package" },
  { project: "NCMS National Procurement OS, Riyadh", sector: "Defense", outcome: "97.6% excellence rating; 50% reduction in operational firefighting; bilingual AI from Day 1" },
  { project: "AI Procurement Compliance Platform", sector: "Enterprise / AI", outcome: "Contract review 40 hrs to 6 hrs; 94% automated anomaly detection; $1.2M annual savings" },
  { project: "AI Fraud Analytics Venture", sector: "Fintech / AI", outcome: "Detection 72% to 94%; false positives down 80%; investigation time down 94%" },
  { project: "Hydrogen Fleet Ecosystem, HydroNova", sector: "GreenTech / Energy", outcome: "Maintenance, safety, regulatory, and spare-parts model for $2B+ export market" },
];

const FRAMEWORKS = [
  { category: "The OS Portfolio", items: "ClarityOS™, GovernanceOS™, Crisis-to-Clarity™, CapabilityOS™, TalentOS™, HumanOS™, DocumentationOS" },
  { category: "Enterprise Delivery Instruments", items: "AI Pyramid Framework (5-Week CEO Program), Procurement Pyramid, 8C Crisis-to-Clarity Model, Carrier Catalyst (60-Day Executive Acceleration), National Supplier Governance Model" },
  { category: "Beyond Techniques", items: "14 Strategic Leadership Frameworks validated across Fortune 500 implementations with 90%+ pilot adoption and 150–200% Year-One ROI" },
];

const EDUCATION = [
  "MBA (in progress) — Augment Business School",
  "DBA / Research Track (planned) — governance architecture, AI governance, human-AI coexistence, national digital ecosystems",
  "Certified Accounting Technician (CAT) / ACCA route — Early 2000s",
];

const CERTS = [
  "Chartered MCIPS — CIPS UK; Level 6 Professional Diploma",
  "CIPS Level 6 Professional Diploma — strategic supply leadership, sustainability integration, board-level procurement influence",
  "CIPS Level 5 Advanced Diploma — supplier development, financial control, project governance, performance analysis",
  "CIPS Level 4 Diploma — category management, commercial law, contract management foundation",
  "Certified AI Trainer (AICT), Emotional Intelligence — AI Certs",
  "DISC / TriMetrix · Cambridge SDG & Law · SGS Food Safety · FocalPoint Coaching",
];

const AWARDS = [
  { award: "Entrepreneurial Excellence Award", year: "2025", detail: "Founders 2.0, Dubai, for ClarityOS; 96/100, Top 10%, 25/25 “Iconic” professional category" },
  { award: "Huawei “Future Star”", year: "2015", detail: "Procurement innovation and performance" },
  { award: "Best Mentor Award", year: "2017", detail: "Huawei, developing others" },
  { award: "TechCrunch Award Nomination", year: "2024", detail: "LAAMP VR/AI learning platform" },
  { award: "SCMDOJO Global Expert Recognition", year: "2024", detail: "Verified sourcing and SCM expert" },
];

const LANGUAGES = [
  { language: "English", level: "Fluent, professional" },
  { language: "Urdu", level: "Native" },
  { language: "Hindi", level: "Native / bilingual" },
  { language: "Punjabi", level: "Fluent" },
  { language: "Arabic", level: "Working, professional" },
];

const REGIONS = ["Oman", "Kuwait", "UAE", "Bahrain", "Qatar", "Saudi Arabia", "Pakistan", "United Kingdom", "Turkey"];

export default function ExecutiveProfile() {
  return (
    <>
      <PageHero
        eyebrow="Executive Advisory Profile 2026 Edition"
        title="Zeeshan Sabri"
        lead="Transformation Architect · AI Governance Strategist · Chartered Procurement & Sourcing Leader (MCIPS) · Founder, ClarityOS™"
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
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a href={PROFILE_PDF} download className="btn-gold">
            <Download size={16} /> Download Profile PDF
          </a>
          <Link to="/connect" className="btn-ghost">Request a Proposal <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> Muscat, Oman</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">{EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noopener" className="hover:text-gold transition-colors">LinkedIn</a>
        </div>
      </PageHero>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Professional Summary" title="Structure before scale. Stabilization before optimization. Governance before automation." />
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 mt-10 items-start">
          <Reveal>
            <div className="card-dark">
              <p className="text-dawn/90 leading-relaxed mb-4">
                Transformation leader with 22 years of experience spanning procurement, strategic sourcing, AI governance, and national-scale digital platforms across the Middle East, Central Asia, and the United Kingdom. Chartered MCIPS with a documented record of $95M+ in strategic initiatives delivered across the GCC with zero compliance breaches, and three AI platforms deployed to production with eight operationalized use cases.
              </p>
              <p className="text-dawn/90 leading-relaxed mb-4">
                Career foundation built inside Fortune 500 environments: eight years at Huawei Technologies rising from CEG Buyer to Country Procurement Director through sanctions-era constraints, and five years at Motorola Solutions governing procurement across 10+ countries for mission-critical public-safety programs. Currently leads Global Markets Technologies (GMT Oman), a Muscat-based venture and advisory umbrella spanning HydroNova, Shams for Services, and SuperJet Oman (exited), alongside founding ClarityOS™ and serving as Consulting Partner at AI Certs.
              </p>
              <p className="text-gold font-medium">
                Core doctrine: structure before scale, stabilization before optimization, governance before automation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src="/images/portrait-suit.jpg" alt="Zeeshan Sabri" className="rounded-3xl border border-faint/50 w-full object-cover" />
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 70}>
              <div className="card-dark h-full !p-6">
                <p className="font-display text-3xl lg:text-4xl font-semibold text-gold">{s.value}</p>
                <p className="text-mist text-sm mt-2 leading-relaxed">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Core Competencies" title="What he does" />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Reveal>
            <div className="card-gold-edge h-full">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={20} className="text-gold" />
                <h3 className="font-display text-xl font-semibold">Procurement & Supply Chain</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPETENCIES.procurement.map((c) => (
                  <span key={c} className="text-xs text-dawn/90 bg-depth border border-faint/50 rounded-full px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-gold-edge h-full">
              <div className="flex items-center gap-3 mb-4">
                <Award size={20} className="text-gold" />
                <h3 className="font-display text-xl font-semibold">AI Strategy & Governance</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPETENCIES.ai.map((c) => (
                  <span key={c} className="text-xs text-dawn/90 bg-depth border border-faint/50 rounded-full px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card-gold-edge h-full">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-gold" />
                <h3 className="font-display text-xl font-semibold">Transformation & Operations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPETENCIES.transformation.map((c) => (
                  <span key={c} className="text-xs text-dawn/90 bg-depth border border-faint/50 rounded-full px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="card-gold-edge h-full">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={20} className="text-gold" />
                <h3 className="font-display text-xl font-semibold">Domain Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPETENCIES.domain.map((c) => (
                  <span key={c} className="text-xs text-dawn/90 bg-depth border border-faint/50 rounded-full px-3 py-1.5">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Professional Experience" title="Where he has led" />
        <div className="grid gap-6 mt-10">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="card-dark">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-dawn">{r.title}</h3>
                    <p className="text-gold text-sm font-medium">{r.org}</p>
                  </div>
                  <span className="text-mist text-xs uppercase tracking-wider">{r.period}</span>
                </div>
                <ul className="space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="text-mist text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold">{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Evidence of Delivery" title="Key projects & engagements" />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-faint/40">
                <th className="py-3 pr-4 text-gold text-xs uppercase tracking-wider font-semibold">Project</th>
                <th className="py-3 pr-4 text-gold text-xs uppercase tracking-wider font-semibold">Sector</th>
                <th className="py-3 text-gold text-xs uppercase tracking-wider font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {ENGAGEMENTS.map((e, i) => (
                <tr key={i} className="border-b border-faint/20 last:border-0">
                  <td className="py-4 pr-4 text-sm text-dawn font-medium align-top">{e.project}</td>
                  <td className="py-4 pr-4 text-sm text-mist align-top">{e.sector}</td>
                  <td className="py-4 text-sm text-mist align-top">{e.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Intellectual Property" title="Proprietary frameworks & methodologies" />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.category} delay={i * 90}>
              <div className="card-dark h-full">
                <h3 className="font-display text-lg font-semibold mb-3">{f.category}</h3>
                <p className="text-mist text-sm leading-relaxed">{f.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHead eyebrow="Credentials" title="Education & certifications" />
            <Reveal>
              <div className="card-dark mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={20} className="text-gold" />
                  <h3 className="font-display text-lg font-semibold">Education</h3>
                </div>
                <ul className="space-y-2">
                  {EDUCATION.map((e) => (
                    <li key={e} className="text-mist text-sm leading-relaxed">{e}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-dark mt-5">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={20} className="text-gold" />
                  <h3 className="font-display text-lg font-semibold">Certifications & Memberships</h3>
                </div>
                <ul className="space-y-2">
                  {CERTS.map((c) => (
                    <li key={c} className="text-mist text-sm leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div>
            <SectionHead eyebrow="Recognition" title="Awards & recognition" />
            <div className="grid gap-4 mt-8">
              {AWARDS.map((a, i) => (
                <Reveal key={a.award} delay={i * 70}>
                  <div className="card-dark !p-5">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-display text-base font-semibold">{a.award}</h3>
                      <span className="text-gold text-xs font-medium">{a.year}</span>
                    </div>
                    <p className="text-mist text-sm leading-relaxed">{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <SectionHead eyebrow="Voice & Influence" title="Speaking, authorship & thought leadership" />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Reveal>
            <div className="card-dark h-full">
              <div className="flex items-center gap-3 mb-3">
                <Mic2 size={18} className="text-gold" />
                <h3 className="font-display text-lg font-semibold">Keynote & Featured Speaker</h3>
              </div>
              <p className="text-mist text-sm leading-relaxed">LUMS Decode 2025 · Kuwait Procurement Summit 2026 · CIPS MENA events · Oman Startup Hub</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-dark h-full">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={18} className="text-gold" />
                <h3 className="font-display text-lg font-semibold">Author</h3>
              </div>
              <p className="text-mist text-sm leading-relaxed"><em>From Exile to Transformation: A Memoir Beyond Techniques</em> and companion works.</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card-dark h-full">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={18} className="text-gold" />
                <h3 className="font-display text-lg font-semibold">Published Insights</h3>
              </div>
              <p className="text-mist text-sm leading-relaxed">500+ curated LinkedIn posts and the Crisis-to-Clarity audio podcast (English and Urdu).</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Reach" title="Languages & regional exposure" />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 mt-10">
          <Reveal>
            <div className="card-dark">
              <h3 className="font-display text-lg font-semibold mb-4">Languages</h3>
              <div className="grid gap-3">
                {LANGUAGES.map((l) => (
                  <div key={l.language} className="flex items-center justify-between border-b border-faint/30 last:border-0 pb-3 last:pb-0">
                    <span className="text-dawn text-sm font-medium">{l.language}</span>
                    <span className="text-mist text-sm">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-dark">
              <h3 className="font-display text-lg font-semibold mb-4">Regional Exposure</h3>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <span key={r} className="text-sm text-dawn/90 bg-depth border border-faint/50 rounded-full px-4 py-2">{r}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-shadow/40">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-depth via-shadow to-void border border-gold/25 p-10 lg:p-16 text-center gold-glow">
            <p className="eyebrow">Download the Full Profile</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-tight mb-5">Get the 2026 Executive Advisory Profile</h2>
            <p className="text-mist text-base lg:text-lg max-w-2xl mx-auto mb-9">
              A complete 12-page overview of capabilities, career history, key projects, proprietary frameworks, credentials, and contact details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PROFILE_PDF} download className="btn-gold">
                <Download size={16} /> Download PDF
              </a>
              <Link to="/connect" className="btn-ghost">Request a Proposal <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Bring governance-level clarity to your boardroom"
        sub="Advisory engagements are scoped to your context and stakes. Start the conversation with a direct enquiry."
      />
    </>
  );
}
