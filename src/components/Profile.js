import { useState } from "react";
import {
  Award,
  Book,
  Briefcase,
  Calendar3,
  CheckCircleFill,
  CodeSlash,
  Cpu,
  Mortarboard,
  ShieldLock,
  StarFill,
  Translate
} from "react-bootstrap-icons";
import colorSharp2 from "../assets/img/color-sharp2.webp";

const certifications = [
  {
    title: "Cyber Security Winter School - Pro Hacker",
    issuer: "Campfire Security",
    detail: "Issued March 2026"
  },
  {
    title: "Advanced Top 10 Web Security Pro Series",
    issuer: "Campfire Security",
    detail: "Web application security"
  },
  {
    title: "Cyber Security Summer School 2025",
    issuer: "Campfire Security",
    detail: "Hands-on cybersecurity training"
  },
  {
    title: "Ethical Hacking Seminars",
    issuer: "Audax Cybersecurity",
    detail: "Ethical hacking and penetration testing"
  },
  {
    title: "Flipper Zero Series",
    issuer: "Udemy",
    detail: "Full Course, Mastery and Beyond"
  },
  {
    title: "Advanced Knowledge - Deep Dive in C++",
    issuer: "Udemy",
    detail: "Advanced C++ development"
  },
  {
    title: "ECDL & Microsoft Certifications",
    issuer: "ECDL / Microsoft",
    detail: "Word, Excel and PowerPoint"
  },
  {
    title: "Photoshop Masterclass",
    issuer: "Alexandros Karpas",
    detail: "Graphic design and image editing"
  }
];

const skillGroups = [
  {
    title: "Cybersecurity",
    code: "SEC-01",
    status: "THREAT MATRIX",
    accent: "#4de1ff",
    accentRgb: "77, 225, 255",
    icon: ShieldLock,
    skills: [
      "Ethical Hacking",
      "Penetration Testing",
      "Red Team",
      "Blue Team",
      "Web Security",
      "Linux Security",
      "Network Reconnaissance"
    ]
  },
  {
    title: "Programming",
    code: "DEV-02",
    status: "CODE ENGINE",
    accent: "#b46cff",
    accentRgb: "180, 108, 255",
    icon: CodeSlash,
    skills: ["Python", "C", "C++", "Java", "Kotlin", "JavaScript", "React", "Solidity"]
  },
  {
    title: "Tools & Technologies",
    code: "SYS-03",
    status: "TOOLCHAIN",
    accent: "#ff5fbd",
    accentRgb: "255, 95, 189",
    icon: Cpu,
    skills: ["Docker", "Git", "HTML/CSS", "JSON", ".env", "Flipper Zero", "Photoshop"]
  },
  {
    title: "Languages",
    code: "COM-04",
    status: "COMMS ARRAY",
    accent: "#79ffbc",
    accentRgb: "121, 255, 188",
    icon: Translate,
    skills: ["Greek - Native", "English - C2", "German - A2"]
  }
];

const tabs = [
  { id: "studies", label: "Studies & Certifications" },
  { id: "work", label: "Work & Leadership" },
  { id: "toolkit", label: "Skills" }
];

const applyCardTilt = (event, intensity = 9) => {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const rotateY = ((x / bounds.width) - 0.5) * intensity;
  const rotateX = ((y / bounds.height) - 0.5) * -intensity;

  card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
  card.style.setProperty("--card-rotate-y", `${rotateY}deg`);
  card.style.setProperty("--card-glow-x", `${x}px`);
  card.style.setProperty("--card-glow-y", `${y}px`);
};

const resetCardTilt = (event) => {
  const card = event.currentTarget;
  card.style.setProperty("--card-rotate-x", "0deg");
  card.style.setProperty("--card-rotate-y", "0deg");
  card.style.setProperty("--card-glow-x", "50%");
  card.style.setProperty("--card-glow-y", "50%");
};

const HolographicSkillCard = ({ group, index }) => {
  const Icon = group.icon;

  return (
    <article
      className="skill-hologram cyber-card clip-cyber min-h-[330px] p-6 preserve-3d"
      onPointerMove={(event) => applyCardTilt(event, 13)}
      onPointerLeave={resetCardTilt}
      onBlur={resetCardTilt}
      tabIndex="0"
      style={{
        "--accent-rgb": group.accentRgb,
        "--module-accent": group.accent,
        transform: "perspective(900px) rotateX(var(--card-rotate-x, 0deg)) rotateY(var(--card-rotate-y, 0deg))"
      }}
    >
      <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-white/25"></div>
      <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-white/25"></div>
      <div className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-white/25"></div>
      <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-white/25"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      <header className="relative z-10 flex items-start gap-4">
        <div
          className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.055]"
          style={{ color: group.accent }}
        >
          <span className="absolute inset-[-8px] animate-spin-slow rounded-full border border-dashed border-white/15"></span>
          <Icon size={25} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
            {group.code} - {group.status}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white">{group.title}</h3>
        </div>
        <div className="hidden items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-electric-green sm:flex">
          <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
          Online
        </div>
      </header>

      <div className="relative z-10 my-6 h-px overflow-hidden bg-white/10">
        <span className="block h-full w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-electric-cyan to-transparent"></span>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {group.skills.map((skill, skillIndex) => (
          <span
            className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/72 transition hover:border-electric-cyan/40 hover:text-white"
            key={skill}
            style={{ transitionDelay: `${skillIndex * 24}ms` }}
          >
            <i className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: group.accent }}></i>
            {skill}
          </span>
        ))}
      </div>

      <footer className="relative z-10 mt-7 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
        <span>{String(group.skills.length).padStart(2, "0")} nodes connected</span>
        <span className="flex h-5 items-end gap-0.5">
          {[4, 7, 10, 13].map((height, barIndex) => (
            <i
              className="w-1 animate-bars bg-electric-cyan"
              style={{ height, animationDelay: `${barIndex * -0.2}s` }}
              key={height}
            ></i>
          ))}
        </span>
      </footer>
    </article>
  );
};

const AcademicRecord = ({ index, period, title, institution, meta, icon: Icon }) => (
  <article
    className="academic-record cyber-card grid gap-5 p-5 md:grid-cols-[auto_1fr_auto]"
    onPointerMove={(event) => applyCardTilt(event, 7)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-cyan">
      AR-{String(index + 1).padStart(2, "0")}
    </span>
    <div className="flex gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-electric-cyan/25 bg-electric-cyan/10 text-electric-cyan">
        <Icon size={27} />
      </div>
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/45">
          <Calendar3 /> {period}
        </span>
        <h4 className="mt-2 text-xl font-bold text-white">{title}</h4>
        <p className="mt-2 text-sm text-white/58">{institution}</p>
        <span className="mt-3 inline-flex text-xs font-medium text-electric-violet">{meta}</span>
      </div>
    </div>
    <div className="flex items-start gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
      <i className="mt-1 h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.8)]"></i>
      Verified
    </div>
  </article>
);

const CredentialRecord = ({ certification, index }) => (
  <article
    className="credential-record cyber-card p-5"
    onPointerMove={(event) => applyCardTilt(event, 6)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <div className="flex gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center border border-electric-green/25 bg-electric-green/10 text-electric-green">
        <CheckCircleFill />
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/42">
          Authority - {certification.issuer}
        </span>
        <h4 className="mt-2 text-lg font-bold text-white">{certification.title}</h4>
        <p className="mt-2 text-sm text-white/58">{certification.detail}</p>
      </div>
    </div>
    <footer className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/38">
      <span>Hash {String(index + 1).padStart(2, "0")}X-{(index * 271 + 731).toString(16).toUpperCase()}</span>
      <i className="h-px w-14 bg-electric-cyan/70"></i>
    </footer>
  </article>
);

const OperationCard = ({
  code,
  period,
  role,
  organization,
  status,
  icon: Icon,
  items,
  featured = false
}) => (
  <article
    className={`operation-card cyber-card grid gap-6 p-5 md:grid-cols-[auto_1fr] ${
      featured ? "border-electric-cyan/35 bg-electric-cyan/[0.045]" : ""
    }`}
    onPointerMove={(event) => applyCardTilt(event, 8)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <div className="relative grid h-16 w-16 place-items-center rounded-full border border-electric-cyan/25 bg-electric-cyan/10 text-electric-cyan">
      <span className="absolute inset-[-8px] animate-spin-slow rounded-full border border-dashed border-white/15"></span>
      <Icon size={25} />
    </div>
    <div>
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-electric-cyan">
            {code}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45">
            <Calendar3 /> {period}
          </span>
        </div>
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-electric-green">
          <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
          {status}
        </span>
      </header>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-white">{role}</h3>
        <h4 className="mt-1 text-base font-medium text-electric-violet">{organization}</h4>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <li className="flex gap-3 text-sm leading-6 text-white/65" key={item}>
            <span className="text-[10px] font-bold text-electric-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
      <footer className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/42">
        <span>Mission data synchronized</span>
        <span className="flex h-5 items-end gap-0.5">
          {[7, 10, 13, 8, 4].map((height, index) => (
            <i
              className="w-1 animate-bars bg-electric-cyan"
              style={{ height, animationDelay: `${index * -0.2}s` }}
              key={`${height}-${index}`}
            ></i>
          ))}
        </span>
      </footer>
    </div>
  </article>
);

const SectionLabel = ({ number, label }) => (
  <div className="archive-section-label my-8 flex items-center gap-4">
    <span className="grid h-9 w-9 place-items-center border border-electric-cyan/25 bg-electric-cyan/10 text-xs font-bold text-electric-cyan">
      {number}
    </span>
    <div className="flex flex-1 items-center gap-3">
      <i className="h-px flex-1 bg-white/10"></i>
      <strong className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/48">{label}</strong>
      <i className="h-px flex-1 bg-white/10"></i>
    </div>
  </div>
);

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("studies");

  return (
    <section className="profile page-section bg-space-950/70" id="profile">
      <div className="absolute left-1/2 top-0 h-px w-[min(76vw,920px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-violet to-transparent opacity-70"></div>
      <img
        className="pointer-events-none absolute right-0 top-[18%] -z-10 w-[38%] opacity-45 blur-sm"
        src={colorSharp2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="portfolio-container">
        <span className="section-kicker">Background & experience</span>
        <h2 className="text-balance text-4xl font-bold md:text-5xl">Professional Profile</h2>
        <p className="section-intro mt-4 max-w-2xl text-base leading-7 text-white/62">
          My academic foundation, hands-on cybersecurity work and technical toolkit.
        </p>

        <div className="profile-tabs mt-10 flex flex-col gap-2 border border-white/10 bg-white/[0.035] p-1 sm:inline-flex sm:flex-row">
          {tabs.map((tab) => (
            <button
              className={`px-5 py-3 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-electric-pink to-electric-violet text-white shadow-violet"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-white"
              }`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              key={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "studies" && (
          <div className="profile-panel archive-panel glass-panel mt-8 p-5 sm:p-8">
            <div className="archive-header flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
                  Encrypted credential archive
                </span>
                <h3 className="mt-3 text-3xl font-bold">Academic Intelligence</h3>
                <p className="mt-2 text-white/58">Verified education, certifications and distinction records.</p>
              </div>
              <div className="clip-cyber border border-electric-green/25 bg-electric-green/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
                Access granted
              </div>
            </div>

            <SectionLabel number="01" label="Education records" />
            <div className="academic-records grid gap-4">
              <AcademicRecord
                index={0}
                period="2021 - Present"
                title="Integrated Master's in Electrical & Computer Engineering"
                institution="Democritus University of Thrace (DUTh)"
                meta="Xanthi, Greece - Active academic record"
                icon={Mortarboard}
              />
              <AcademicRecord
                index={1}
                period="2007 - 2021"
                title="High School Diploma"
                institution="Avgoulea-Linardatou Microsoft Showcase School"
                meta="Final grade: 19.3 / 20"
                icon={StarFill}
              />
            </div>

            <SectionLabel number="02" label="Verified credentials" />
            <div className="credential-grid grid gap-4 md:grid-cols-2">
              {certifications.map((certification, index) => (
                <CredentialRecord
                  certification={certification}
                  index={index}
                  key={certification.title}
                />
              ))}
            </div>

            <SectionLabel number="03" label="Achievement vault" />
            <div className="achievement-vault grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="achievement-file cyber-card p-6">
                <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-14 w-14 place-items-center border border-electric-amber/30 bg-electric-amber/10 text-electric-amber">
                    <Award size={31} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-amber">
                      Vault-01 - 1st place - June 2025
                    </span>
                    <h4 className="mt-3 text-xl font-bold text-white">The Future of Cities and Smart Sustainable Solutions</h4>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      DUTh Alumni Association award for a Smart & Green Building Complexes project combining IoT
                      monitoring, custom blockchain infrastructure, payment rewards and renewable-energy optimization.
                    </p>
                  </div>
                </div>
              </article>
              <article className="achievement-file cyber-card p-6">
                <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-14 w-14 place-items-center border border-electric-violet/30 bg-electric-violet/10 text-electric-violet">
                    <StarFill size={27} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-violet">
                      Vault-02 - Excellence - June 2021
                    </span>
                    <h4 className="mt-3 text-xl font-bold text-white">Eurobank Excellence Honors</h4>
                    <p className="mt-3 text-sm leading-6 text-white/62">Recognition for outstanding academic performance.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}

        {activeTab === "work" && (
          <div className="profile-panel operations-panel glass-panel mt-8 p-5 sm:p-8">
            <div className="operations-header flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
                  Field operations command
                </span>
                <h3 className="mt-3 text-3xl font-bold">Mission Timeline</h3>
                <p className="mt-2 text-white/58">Professional deployments and leadership operations.</p>
              </div>
              <div className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green sm:text-right">
                <span>2 missions</span>
                <span>System nominal</span>
              </div>
            </div>

            <div className="operations-timeline relative mt-8 grid gap-5">
              <span className="operations-rail absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-electric-cyan via-electric-violet to-transparent md:block"></span>
              <OperationCard
                code="OPS-DK-2026"
                period="March 2026 - April 2026"
                role="Cybersecurity Erasmus Intern"
                organization="Campfire Security - Denmark"
                status="DEPLOYED"
                icon={Briefcase}
                featured
                items={[
                  "Built hands-on cybersecurity training environments.",
                  "Applied a full-stack development approach to develop and automate cybersecurity lab components.",
                  "Developed realistic Red Team and Blue Team scenarios.",
                  "Contributed to enterprise cybersecurity training platforms.",
                  "Selected for client-facing cybersecurity training work."
                ]}
              />
              <OperationCard
                code="CMD-IEEE-2325"
                period="2023 - 2025"
                role="Vice President"
                organization="IEEE DUTh Student Branch"
                status="COMPLETED"
                icon={Book}
                items={[
                  "Served in a student-branch leadership role.",
                  "Developed coordination, communication and team leadership experience."
                ]}
              />
            </div>
          </div>
        )}

        {activeTab === "toolkit" && (
          <div className="profile-panel toolkit-panel glass-panel mt-8 p-5 sm:p-8">
            <div className="skill-matrix-header flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
                  Interactive skill matrix
                </span>
                <h3 className="mt-3 text-3xl font-bold">Technical Systems</h3>
                <p className="mt-2 text-white/58">Move across each module to explore its depth layers.</p>
              </div>
              <div className="clip-cyber border border-electric-green/25 bg-electric-green/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
                04 modules online
              </div>
            </div>

            <div className="skill-groups mt-8 grid gap-5 lg:grid-cols-2">
              {skillGroups.map((group, index) => (
                <HolographicSkillCard group={group} index={index} key={group.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
