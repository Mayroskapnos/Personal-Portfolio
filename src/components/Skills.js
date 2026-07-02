import { useState } from "react";
import {
  Boxes,
  Bug,
  CodeSlash,
  HddNetwork,
  People,
  ShieldLock
} from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.webp";

const expertise = [
  {
    code: "SEC-01",
    title: "Offensive Security",
    description: "Ethical hacking, penetration testing, reconnaissance and web security.",
    status: "ATTACK VECTOR",
    accent: "#4de1ff",
    accentRgb: "77, 225, 255",
    strength: 92,
    icon: ShieldLock
  },
  {
    code: "LAB-02",
    title: "Red / Blue Team Labs",
    description: "Realistic attack-and-defence scenarios and hands-on training environments.",
    status: "DUAL OPERATIONS",
    accent: "#b46cff",
    accentRgb: "180, 108, 255",
    strength: 88,
    icon: Bug
  },
  {
    code: "DEV-03",
    title: "Software Development",
    description: "Python, C/C++, Java, Kotlin, JavaScript and React development.",
    status: "CODE ENGINE",
    accent: "#ff5fbd",
    accentRgb: "255, 95, 189",
    strength: 86,
    icon: CodeSlash
  },
  {
    code: "NET-04",
    title: "Systems & Networks",
    description: "Linux security, networking fundamentals and penetration-testing workflows.",
    status: "INFRASTRUCTURE",
    accent: "#79ffbc",
    accentRgb: "121, 255, 188",
    strength: 84,
    icon: HddNetwork
  },
  {
    code: "OPS-05",
    title: "Tools & Platforms",
    description: "Docker, Git, JSON, environment configuration and Solidity.",
    status: "TOOLCHAIN",
    accent: "#ffc35f",
    accentRgb: "255, 195, 95",
    strength: 82,
    icon: Boxes
  },
  {
    code: "CMD-06",
    title: "Leadership",
    description: "Team coordination and technical community leadership through IEEE DUTh.",
    status: "COMMAND LAYER",
    accent: "#6e8cff",
    accentRgb: "110, 140, 255",
    strength: 90,
    icon: People
  }
];

const connectionPoints = [
  { x: 18, y: 17 },
  { x: 82, y: 17 },
  { x: 16, y: 54 },
  { x: 84, y: 54 },
  { x: 25, y: 86 },
  { x: 75, y: 86 }
];

const ExpertiseSatellite = ({ item, index, active, onActivate, onDeactivate }) => {
  const Icon = item.icon;

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty("--card-glow-x", `${x}px`);
    card.style.setProperty("--card-glow-y", `${y}px`);
  };

  return (
    <article
      className={`expertise-satellite cyber-card clip-cyber min-h-[230px] cursor-pointer p-5 ${
        active ? "border-electric-cyan/50 bg-white/[0.075] shadow-glow" : ""
      }`}
      onPointerEnter={onActivate}
      onPointerMove={handlePointerMove}
      onPointerLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex="0"
      style={{
        "--accent-rgb": item.accentRgb,
        "--satellite-accent": item.accent,
        "--satellite-accent-rgb": item.accentRgb
      }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-white/30"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/30"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <header className="relative z-10 flex items-start gap-4">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center border border-white/15 bg-white/[0.055] text-white shadow-glow"
          style={{ color: item.accent }}
        >
          <Icon size={23} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
            {item.code} - {item.status}
          </span>
          <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
        </div>
        <span className="hidden items-center gap-1 text-[9px] font-bold uppercase tracking-[0.16em] text-electric-green sm:inline-flex">
          <i className="h-1.5 w-1.5 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
          Sync
        </span>
      </header>

      <p className="relative z-10 mt-5 text-sm leading-6 text-white/62">{item.description}</p>

      <footer className="relative z-10 mt-7 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden bg-white/10">
          <span
            className="block h-full bg-gradient-to-r from-electric-cyan to-electric-violet"
            style={{ width: `${item.strength}%` }}
          ></span>
        </div>
        <strong className="text-sm text-white">{item.strength}%</strong>
        <span className="flex h-5 items-end gap-0.5">
          {[3, 6, 9, 12].map((height, barIndex) => (
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

export const Skills = () => {
  const [activeModule, setActiveModule] = useState(0);
  const selected = expertise[activeModule];
  const SelectedIcon = selected.icon;

  return (
    <section className="skill page-section" id="skills">
      <div className="absolute left-1/2 top-0 h-px w-[min(76vw,920px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-70"></div>
      <img
        className="pointer-events-none absolute left-0 top-1/4 -z-10 w-[42%] opacity-45 blur-sm"
        src={colorSharp}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="portfolio-container">
        <div className="expertise-command glass-panel relative overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:70px_70px] opacity-[0.06]"></div>
          <div className="expertise-command-header flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-kicker">Integrated capability architecture</span>
              <h2 className="text-balance text-4xl font-bold md:text-5xl">Core Expertise Command</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
                Six verified systems connected to one adaptive engineering core.
                Select a capability to synchronize the command network.
              </p>
            </div>

            <div className="clip-cyber border border-electric-green/25 bg-electric-green/5 px-5 py-4 text-right">
              <span className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
                <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_12px_rgba(121,255,188,0.9)]"></i>
                All systems nominal
              </span>
              <strong className="mt-2 block text-3xl text-white">06 / 06</strong>
              <small className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/42">
                Capabilities online
              </small>
            </div>
          </div>

          <div className="expertise-constellation relative mt-12 grid gap-5 lg:grid-cols-3">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-60 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {connectionPoints.map((point, index) => {
                const active = activeModule === index;
                return (
                  <g key={`${point.x}-${point.y}`}>
                    <line
                      x1="50"
                      y1="50"
                      x2={point.x}
                      y2={point.y}
                      stroke={active ? selected.accent : "rgba(255,255,255,0.16)"}
                      strokeWidth={active ? "0.35" : "0.18"}
                    />
                    <circle cx={point.x} cy={point.y} r="0.7" fill={active ? selected.accent : "rgba(255,255,255,0.25)"} />
                  </g>
                );
              })}
            </svg>

            {expertise.slice(0, 3).map((item, index) => (
              <ExpertiseSatellite
                item={item}
                index={index}
                active={activeModule === index}
                onActivate={() => setActiveModule(index)}
                onDeactivate={() => setActiveModule(0)}
                key={item.title}
              />
            ))}

            <div
              className="expertise-reactor relative order-first grid min-h-[290px] place-items-center overflow-hidden border border-white/10 bg-space-900/70 p-7 shadow-glow backdrop-blur-2xl lg:order-none lg:col-span-3 lg:min-h-[330px]"
              style={{
                "--reactor-accent": selected.accent,
                "--reactor-accent-rgb": selected.accentRgb
              }}
            >
              <div className="absolute h-72 w-72 rounded-full border border-dashed border-white/15"></div>
              <div className="absolute h-56 w-56 animate-spin-slow rounded-full border border-electric-cyan/25"></div>
              <div className="absolute h-36 w-36 animate-[spin-slow_8s_linear_infinite_reverse] rounded-full border border-electric-violet/30"></div>
              <span className="absolute h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: `${selected.accent}30` }}></span>

              <div className="relative z-10 grid place-items-center text-center">
                <div
                  className="grid h-24 w-24 place-items-center rounded-full border border-white/20 bg-white/[0.055] shadow-glow"
                  style={{ color: selected.accent }}
                >
                  <SelectedIcon size={34} />
                </div>
                <span className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                  {selected.code} synchronized
                </span>
                <strong className="mt-2 text-3xl text-white">{selected.title}</strong>
                <small className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: selected.accent }}>
                  Core signal {selected.strength}%
                </small>
              </div>
            </div>

            {expertise.slice(3).map((item, offset) => {
              const index = offset + 3;
              return (
                <ExpertiseSatellite
                  item={item}
                  index={index}
                  active={activeModule === index}
                  onActivate={() => setActiveModule(index)}
                  onDeactivate={() => setActiveModule(0)}
                  key={item.title}
                />
              );
            })}
          </div>

          <div className="expertise-command-footer mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>Argyrios // Capability Network</span>
            <div className="flex h-5 items-end gap-1">
              {Array.from({ length: 6 }, (_, index) => (
                <i
                  className="w-1 animate-bars bg-electric-cyan"
                  style={{ height: `${4 + index * 2}px`, animationDelay: `${index * -0.2}s` }}
                  key={index}
                ></i>
              ))}
            </div>
            <span>Live telemetry enabled</span>
          </div>
        </div>
      </div>
    </section>
  );
};
