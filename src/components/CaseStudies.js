import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check2Circle, CodeSlash, ShieldLock, X } from "react-bootstrap-icons";

const caseStudies = [
  {
    id: "training-environments",
    code: "CASE-01",
    eyebrow: "CAMPFIRE SECURITY - ERASMUS INTERNSHIP - 2026",
    title: "Cybersecurity Training Environments",
    summary:
      "Hands-on security labs and realistic Red Team / Blue Team scenarios built for practical, enterprise-facing cybersecurity training.",
    challenge:
      "Make security training feel realistic, repeatable and useful for learners without losing clarity or technical depth.",
    contribution:
      "Built and automated cybersecurity lab components through a full-stack development approach, while developing realistic attack-and-defence scenarios.",
    outcome:
      "Contributed to enterprise training platforms and was selected for client-facing cybersecurity training work.",
    tags: ["Full-stack development", "Security engineering", "Security labs"],
    role: "Cybersecurity lab engineering, automation support and realistic Red Team / Blue Team scenario development.",
    stack: ["Full-stack development", "Security labs", "Red Team", "Blue Team", "Automation"],
    metrics: [
      ["Period", "Mar-Apr 2026"],
      ["Context", "Enterprise training"],
      ["Output", "Hands-on labs"]
    ],
    timeline: [
      "Mapped training objectives to realistic attack-and-defence workflows.",
      "Built and automated lab components through a full-stack development approach.",
      "Contributed to client-facing cybersecurity training material and scenarios."
    ],
    deliverables: [
      "Hands-on cybersecurity environments",
      "Red Team / Blue Team scenarios",
      "Automated lab components",
      "Training-platform contributions"
    ],
    icon: ShieldLock,
    accent: "violet",
    accentRgb: "180, 108, 255"
  },
  {
    id: "smart-building",
    code: "CASE-02",
    eyebrow: "AWARD-WINNING CONCEPT - 1ST PLACE - JUNE 2025",
    title: "Smart & Green Building Complexes",
    summary:
      "A sustainable-building platform combining IoT monitoring, a custom Ethereum-inspired blockchain, digital payments and renewable-energy optimisation.",
    challenge:
      "Create a trusted system for building-complex monitoring and incentives, where energy-aware behaviour can be rewarded transparently and securely.",
    contribution:
      "Built a custom Ethereum-inspired blockchain with its own currency, exchange rate and Kotlin smart contracts. Created the web payment environment and a rewards system that delivers cashback to users.",
    outcome:
      "1st place in The Future of Cities and Smart Sustainable Solutions, awarded by the DUTh Alumni Association.",
    tags: ["Custom blockchain", "Payments & cashback", "Smart contracts"],
    role: "System concept, custom blockchain logic, Kotlin smart-contract design and web payment flow.",
    stack: ["Kotlin", "Smart contracts", "IoT concept", "Digital payments", "Reward logic"],
    metrics: [
      ["Award", "1st place"],
      ["Domain", "Smart buildings"],
      ["Scope", "Payments + energy rewards"]
    ],
    timeline: [
      "Defined a trust model for building-complex monitoring and resident incentives.",
      "Designed the custom currency, exchange-rate logic and smart-contract behavior.",
      "Connected the payment environment with a cashback-style reward layer."
    ],
    deliverables: [
      "Custom Ethereum-inspired blockchain concept",
      "Kotlin smart-contract logic",
      "Web payment and reward-system flow",
      "Award presentation material"
    ],
    icon: CodeSlash,
    accent: "cyan",
    accentRgb: "77, 225, 255"
  }
];

export const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeStudy) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveStudy(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeStudy]);

  return (
    <section className="case-studies page-section bg-space-900/45" id="case-studies" aria-labelledby="case-studies-title">
      <div className="absolute inset-0 -z-10 bg-cyber-radial opacity-60"></div>
      <div className="portfolio-container">
        <header className="case-studies-header flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">Selected field work</span>
            <h2 id="case-studies-title" className="text-balance text-4xl font-bold md:text-5xl">
              Proof, not just potential.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/62">
              A closer look at work that connects secure systems, practical engineering and real-world impact.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 border border-electric-green/25 bg-electric-green/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
            <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
            02 case files available
          </span>
        </header>

        <div className="case-studies-grid mt-10 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <button
                className="case-study-card cyber-card group min-h-[410px] p-6 text-left"
                key={study.id}
                type="button"
                onClick={() => setActiveStudy(study)}
                aria-haspopup="dialog"
                style={{ "--accent-rgb": study.accentRgb }}
              >
                <span className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition duration-500 group-hover:scale-125" style={{ backgroundColor: `rgba(${study.accentRgb}, 0.16)` }}></span>
                <div className="relative z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  <span>{study.code}</span>
                  <ArrowUpRight className="text-electric-cyan transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} aria-hidden="true" />
                </div>
                <div className="relative z-10 mt-10 grid h-16 w-16 place-items-center border border-white/15 bg-white/[0.055] text-electric-cyan shadow-glow">
                  <Icon size={31} />
                </div>
                <span className="relative z-10 mt-8 block text-[10px] font-bold uppercase tracking-[0.18em] text-electric-violet">
                  {study.eyebrow}
                </span>
                <h3 className="relative z-10 mt-4 text-3xl font-bold leading-tight text-white">{study.title}</h3>
                <p className="relative z-10 mt-4 text-sm leading-7 text-white/62">{study.summary}</p>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span className="border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/64" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-electric-cyan">
                  Open case study <ArrowUpRight size={17} />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6">
          {caseStudies.map((study) => (
            <article
              className="case-study-dossier glass-panel overflow-hidden p-5 sm:p-7"
              id={`case-${study.id}`}
              key={`${study.id}-dossier`}
              style={{ "--accent-rgb": study.accentRgb }}
            >
              <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
                    {study.code} - Full dossier
                  </span>
                  <h3 className="mt-3 text-3xl font-bold text-white">{study.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{study.summary}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {study.metrics.map(([label, value]) => (
                      <div className="border border-white/10 bg-white/[0.035] p-4" key={label}>
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">{label}</span>
                        <strong className="mt-2 block text-lg text-white">{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="border border-white/10 bg-white/[0.035] p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-violet">My role</span>
                    <p className="mt-3 text-sm leading-6 text-white/66">{study.role}</p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="border border-white/10 bg-white/[0.035] p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-cyan">Execution timeline</span>
                      <ol className="mt-4 grid gap-3">
                        {study.timeline.map((item, index) => (
                          <li className="flex gap-3 text-sm leading-6 text-white/62" key={item}>
                            <span className="text-[10px] font-bold text-electric-cyan">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="border border-white/10 bg-white/[0.035] p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">Deliverables</span>
                      <ul className="mt-4 grid gap-3">
                        {study.deliverables.map((item) => (
                          <li className="flex gap-3 text-sm leading-6 text-white/62" key={item}>
                            <Check2Circle className="mt-1 shrink-0 text-electric-green" size={15} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((item) => (
                      <span className="border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/64" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeStudy && (
        <div
          className="case-study-modal-backdrop fixed inset-0 z-[10050] grid place-items-center overflow-y-auto bg-space-950/[0.82] p-4 backdrop-blur-xl"
          role="presentation"
          onMouseDown={() => setActiveStudy(null)}
        >
          <section
            className="case-study-modal glass-panel relative w-full max-w-4xl p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            aria-describedby="case-study-modal-summary"
            onMouseDown={(event) => event.stopPropagation()}
            style={{ "--accent-rgb": activeStudy.accentRgb }}
          >
            <button
              ref={closeButtonRef}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-white/15 bg-white/[0.045] text-white transition hover:border-electric-cyan/50 hover:text-electric-cyan"
              type="button"
              onClick={() => setActiveStudy(null)}
              aria-label="Close case study"
            >
              <X size={23} />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
              {activeStudy.code} - Case file
            </span>
            <h2 id="case-study-modal-title" className="mt-4 max-w-3xl text-4xl font-bold text-white">
              {activeStudy.title}
            </h2>
            <p id="case-study-modal-summary" className="mt-4 max-w-3xl text-base leading-7 text-white/66">{activeStudy.summary}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="border border-white/10 bg-white/[0.035] p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-cyan">The challenge</span>
                <p className="mt-3 text-sm leading-6 text-white/62">{activeStudy.challenge}</p>
              </article>
              <article className="border border-white/10 bg-white/[0.035] p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-violet">Contribution</span>
                <p className="mt-3 text-sm leading-6 text-white/62">{activeStudy.contribution}</p>
              </article>
              <article className="border border-electric-green/20 bg-electric-green/[0.045] p-5">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
                  <Check2Circle size={16} /> Outcome
                </span>
                <p className="mt-3 text-sm leading-6 text-white/66">{activeStudy.outcome}</p>
              </article>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {activeStudy.tags.map((tag) => (
                <span className="border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/64" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 border border-electric-cyan/35 px-4 text-sm font-bold text-white transition hover:bg-electric-cyan hover:text-space-950"
              href={`#case-${activeStudy.id}`}
              onClick={() => setActiveStudy(null)}
            >
              Read full dossier <ArrowUpRight size={16} />
            </a>
          </section>
        </div>
      )}
    </section>
  );
};
