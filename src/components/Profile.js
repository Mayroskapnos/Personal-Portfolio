import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
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
import colorSharp2 from "../assets/img/color-sharp2.png";

const certifications = [
  {
    title: "Cyber Security Winter School — Pro Hacker",
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
    title: "Advanced Knowledge — Deep Dive in C++",
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
    skills: ["Greek — Native", "English — C2", "German — A2"]
  }
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
      className="skill-hologram"
      onPointerMove={(event) => applyCardTilt(event, 13)}
      onPointerLeave={resetCardTilt}
      onBlur={resetCardTilt}
      tabIndex="0"
      style={{
        "--module-accent": group.accent,
        "--module-accent-rgb": group.accentRgb,
        "--module-index": index
      }}
    >
      <div className="hologram-frame">
        <span className="holo-corner corner-one"></span>
        <span className="holo-corner corner-two"></span>
        <span className="holo-corner corner-three"></span>
        <span className="holo-corner corner-four"></span>
      </div>
      <div className="hologram-scan" aria-hidden="true"></div>
      <header className="hologram-header">
        <div className="hologram-core">
          <span className="core-orbit orbit-one"></span>
          <span className="core-orbit orbit-two"></span>
          <span className="core-orbit orbit-three"></span>
          <Icon size={25} />
        </div>
        <div className="hologram-title">
          <span>{group.code} · {group.status}</span>
          <h3>{group.title}</h3>
        </div>
        <div className="module-status">
          <i></i>
          ONLINE
        </div>
      </header>
      <div className="hologram-divider"><span></span></div>
      <div className="skill-node-field">
        {group.skills.map((skill, skillIndex) => (
          <span
            className="skill-node"
            key={skill}
            style={{
              "--node-index": skillIndex,
              "--node-depth": `${18 + (skillIndex % 3) * 10}px`
            }}
          >
            <i></i>
            {skill}
          </span>
        ))}
      </div>
      <footer className="hologram-footer">
        <span>{String(group.skills.length).padStart(2, "0")} NODES CONNECTED</span>
        <span className="signal-bars"><i></i><i></i><i></i><i></i></span>
      </footer>
    </article>
  );
};

const AcademicRecord = ({ index, period, title, institution, meta, icon: Icon }) => (
  <article
    className="academic-record"
    onPointerMove={(event) => applyCardTilt(event, 7)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <span className="record-index">AR-{String(index + 1).padStart(2, "0")}</span>
    <div className="record-seal">
      <span></span>
      <Icon size={27} />
    </div>
    <div className="record-content">
      <span className="record-period"><Calendar3 /> {period}</span>
      <h4>{title}</h4>
      <p>{institution}</p>
      <span className="record-meta">{meta}</span>
    </div>
    <div className="record-verification">
      <i></i>
      VERIFIED
    </div>
    <span className="record-scan"></span>
  </article>
);

const CredentialRecord = ({ certification, index }) => (
  <article
    className="credential-record"
    onPointerMove={(event) => applyCardTilt(event, 6)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <div className="credential-seal">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <CheckCircleFill />
    </div>
    <div className="credential-copy">
      <span>AUTHORITY · {certification.issuer}</span>
      <h4>{certification.title}</h4>
      <p>{certification.detail}</p>
    </div>
    <footer>
      <span>HASH {String(index + 1).padStart(2, "0")}X-{(index * 271 + 731).toString(16).toUpperCase()}</span>
      <i></i>
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
    className={`operation-card ${featured ? "featured" : ""}`}
    onPointerMove={(event) => applyCardTilt(event, 8)}
    onPointerLeave={resetCardTilt}
    tabIndex="0"
  >
    <div className="operation-node-core">
      <span className="node-ring"></span>
      <Icon size={25} />
    </div>
    <div className="operation-dossier">
      <header>
        <div>
          <span className="operation-code">{code}</span>
          <span className="operation-period"><Calendar3 /> {period}</span>
        </div>
        <span className="operation-status"><i></i>{status}</span>
      </header>
      <div className="operation-heading">
        <h3>{role}</h3>
        <h4>{organization}</h4>
      </div>
      <ul className="operation-log">
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ul>
      <footer>
        <span>MISSION DATA SYNCHRONIZED</span>
        <span className="operation-wave"><i></i><i></i><i></i><i></i><i></i></span>
      </footer>
    </div>
  </article>
);

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <Container>
        <Row>
          <Col xs={12}>
                <div>
                  <span className="section-kicker">Background & experience</span>
                  <h2>Professional Profile</h2>
                  <p className="section-intro">
                    My academic foundation, hands-on cybersecurity work and technical toolkit.
                  </p>

                  <Tab.Container id="profile-tabs" defaultActiveKey="studies">
                    <Nav variant="pills" className="profile-tabs justify-content-center">
                      <Nav.Item>
                        <Nav.Link eventKey="studies">Studies & Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="work">Work & Leadership</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="toolkit">Skills</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="studies">
                        <div className="profile-panel archive-panel">
                          <div className="archive-header">
                            <div>
                              <span>ENCRYPTED CREDENTIAL ARCHIVE</span>
                              <h3>Academic Intelligence</h3>
                              <p>Verified education, certifications and distinction records.</p>
                            </div>
                            <div className="archive-access">
                              <span className="access-radar"><i></i></span>
                              ACCESS GRANTED
                            </div>
                          </div>

                          <div className="archive-section-label">
                            <span>01</span>
                            <div><i></i><strong>EDUCATION RECORDS</strong><i></i></div>
                          </div>
                          <div className="academic-records">
                            <AcademicRecord
                              index={0}
                              period="2021 — Present"
                              title="Integrated Master’s in Electrical & Computer Engineering"
                              institution="Democritus University of Thrace (DUTh)"
                              meta="Xanthi, Greece · Active academic record"
                              icon={Mortarboard}
                            />
                            <AcademicRecord
                              index={1}
                              period="2007 — 2021"
                              title="High School Diploma"
                              institution="Avgoulea–Linardatou Microsoft Showcase School"
                              meta="Final grade: 19.3 / 20"
                              icon={StarFill}
                            />
                          </div>

                          <div className="archive-section-label">
                            <span>02</span>
                            <div><i></i><strong>VERIFIED CREDENTIALS</strong><i></i></div>
                          </div>
                          <div className="credential-grid">
                            {certifications.map((certification, index) => (
                              <CredentialRecord
                                certification={certification}
                                index={index}
                                key={certification.title}
                              />
                            ))}
                          </div>

                          <div className="archive-section-label">
                            <span>03</span>
                            <div><i></i><strong>ACHIEVEMENT VAULT</strong><i></i></div>
                          </div>
                          <div className="achievement-vault">
                            <article className="achievement-file primary">
                              <div className="achievement-emblem"><Award size={31} /></div>
                              <div>
                                <span>VAULT-01 · 1ST PLACE · JUNE 2025</span>
                                <h4>The Future of Cities and Smart Sustainable Solutions</h4>
                                <p>
                                DUTh Alumni Association award for a Smart & Green Building
                                Complexes project combining IoT monitoring, blockchain security
                                and renewable-energy optimization.
                                </p>
                              </div>
                            </article>
                            <article className="achievement-file">
                              <div className="achievement-emblem"><StarFill size={27} /></div>
                              <div>
                                <span>VAULT-02 · EXCELLENCE · JUNE 2021</span>
                                <h4>Eurobank Excellence Honors</h4>
                                <p>Recognition for outstanding academic performance.</p>
                              </div>
                            </article>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="work">
                        <div className="profile-panel operations-panel">
                          <div className="operations-header">
                            <div>
                              <span>FIELD OPERATIONS COMMAND</span>
                              <h3>Mission Timeline</h3>
                              <p>Professional deployments and leadership operations.</p>
                            </div>
                            <div className="command-telemetry">
                              <span><i></i>2 MISSIONS</span>
                              <span><i></i>SYSTEM NOMINAL</span>
                            </div>
                          </div>
                          <div className="operations-timeline">
                            <span className="operations-rail"><i></i></span>
                            <OperationCard
                              code="OPS-DK-2026"
                              period="March 2026 — April 2026"
                              role="Cybersecurity Erasmus Intern"
                              organization="Campfire Security · Denmark"
                              status="DEPLOYED"
                              icon={Briefcase}
                              featured
                              items={[
                                "Built hands-on cybersecurity training environments.",
                                "Used Python extensively to develop and automate cybersecurity lab components.",
                                "Developed realistic Red Team and Blue Team scenarios.",
                                "Contributed to enterprise cybersecurity training platforms.",
                                "Selected for client-facing cybersecurity training work."
                              ]}
                            />
                            <OperationCard
                              code="CMD-IEEE-2325"
                              period="2023 — 2025"
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
                      </Tab.Pane>

                      <Tab.Pane eventKey="toolkit">
                        <div className="profile-panel toolkit-panel">
                          <div className="skill-matrix-header">
                            <div>
                              <span>INTERACTIVE SKILL MATRIX</span>
                              <h3>Technical Systems</h3>
                              <p>Move across each module to explore its depth layers.</p>
                            </div>
                            <div className="matrix-status">
                              <span className="matrix-pulse"></span>
                              04 MODULES ONLINE
                            </div>
                          </div>
                          <div className="skill-groups">
                            {skillGroups.map((group, index) => (
                              <HolographicSkillCard group={group} index={index} key={group.title} />
                            ))}
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
