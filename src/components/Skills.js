import { useState } from "react";
import {
  Boxes,
  Bug,
  CodeSlash,
  HddNetwork,
  People,
  ShieldLock
} from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";

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
  { x: 17, y: 15 },
  { x: 83, y: 15 },
  { x: 12, y: 50 },
  { x: 88, y: 50 },
  { x: 17, y: 85 },
  { x: 83, y: 85 }
];

const ExpertiseSatellite = ({ item, index, active, onActivate, onDeactivate }) => {
  const Icon = item.icon;

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 12;
    const rotateX = ((y / bounds.height) - 0.5) * -10;

    card.style.setProperty("--satellite-rx", `${rotateX}deg`);
    card.style.setProperty("--satellite-ry", `${rotateY}deg`);
    card.style.setProperty("--satellite-glow-x", `${x}px`);
    card.style.setProperty("--satellite-glow-y", `${y}px`);
  };

  const resetTilt = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--satellite-rx", "0deg");
    card.style.setProperty("--satellite-ry", "0deg");
    card.style.setProperty("--satellite-glow-x", "50%");
    card.style.setProperty("--satellite-glow-y", "50%");
    onDeactivate();
  };

  return (
    <article
      className={`expertise-satellite satellite-${index + 1} ${active ? "active" : ""}`}
      onPointerEnter={onActivate}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onFocus={onActivate}
      onBlur={resetTilt}
      tabIndex="0"
      style={{
        "--satellite-accent": item.accent,
        "--satellite-accent-rgb": item.accentRgb,
        "--satellite-index": index
      }}
    >
      <span className="satellite-corner corner-tl"></span>
      <span className="satellite-corner corner-br"></span>
      <div className="satellite-scan" aria-hidden="true"></div>
      <header>
        <div className="satellite-emblem">
          <span className="emblem-ring"></span>
          <Icon size={23} />
        </div>
        <div>
          <span>{item.code} · {item.status}</span>
          <h3>{item.title}</h3>
        </div>
        <span className="satellite-state"><i></i>SYNC</span>
      </header>
      <p>{item.description}</p>
      <footer>
        <div className="satellite-meter">
          <span style={{ "--meter-strength": `${item.strength}%` }}></span>
        </div>
        <strong>{item.strength}%</strong>
        <span className="satellite-bars"><i></i><i></i><i></i><i></i></span>
      </footer>
    </article>
  );
};

export const Skills = () => {
  const [activeModule, setActiveModule] = useState(0);
  const selected = expertise[activeModule];
  const SelectedIcon = selected.icon;

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx expertise-command">
              <div className="expertise-command-header">
                <div>
                  <span className="section-kicker">Integrated capability architecture</span>
                  <h2>Core Expertise Command</h2>
                  <p>
                    Six verified systems connected to one adaptive engineering core.
                    Select a capability to synchronize the command network.
                  </p>
                </div>
                <div className="command-health">
                  <span><i></i>ALL SYSTEMS NOMINAL</span>
                  <strong>06 / 06</strong>
                  <small>CAPABILITIES ONLINE</small>
                </div>
              </div>

              <div className="expertise-constellation">
                <svg className="constellation-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <filter id="linkGlow">
                      <feGaussianBlur stdDeviation="0.55" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {connectionPoints.map((point, index) => (
                    <g className={activeModule === index ? "active" : ""} key={`${point.x}-${point.y}`}>
                      <line x1="50" y1="50" x2={point.x} y2={point.y} />
                      <circle cx={point.x} cy={point.y} r="0.7" />
                    </g>
                  ))}
                </svg>

                <div
                  className="expertise-reactor"
                  style={{
                    "--reactor-accent": selected.accent,
                    "--reactor-accent-rgb": selected.accentRgb
                  }}
                >
                  <div className="reactor-rings">
                    <span className="reactor-ring reactor-ring-one"></span>
                    <span className="reactor-ring reactor-ring-two"></span>
                    <span className="reactor-ring reactor-ring-three"></span>
                  </div>
                  <div className="reactor-core">
                    <SelectedIcon size={32} />
                  </div>
                  <div className="reactor-copy">
                    <span>{selected.code} SYNCHRONIZED</span>
                    <strong>{selected.title}</strong>
                    <small>CORE SIGNAL {selected.strength}%</small>
                  </div>
                  <span className="reactor-orbit-node node-a"></span>
                  <span className="reactor-orbit-node node-b"></span>
                  <span className="reactor-orbit-node node-c"></span>
                </div>

                {expertise.map((item, index) => (
                  <ExpertiseSatellite
                    item={item}
                    index={index}
                    active={activeModule === index}
                    onActivate={() => setActiveModule(index)}
                    onDeactivate={() => setActiveModule(0)}
                    key={item.title}
                  />
                ))}
              </div>

              <div className="expertise-command-footer">
                <span>ARGYRIOS // CAPABILITY NETWORK</span>
                <div><i></i><i></i><i></i><i></i><i></i><i></i></div>
                <span>LIVE TELEMETRY ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
