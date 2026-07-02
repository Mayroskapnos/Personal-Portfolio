import { useEffect, useState } from "react";
import { ArrowRightCircle, Download, Linkedin } from "react-bootstrap-icons";
import headerImg from "../assets/img/argi-linkedin-transparent.webp";

const ROTATING_TITLES = [
  "Cybersecurity Engineer.",
  "Offensive Security Enthusiast.",
  "Electrical & Computer Engineer."
];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const currentText = ROTATING_TITLES[loopNum % ROTATING_TITLES.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((previousDelta) => previousDelta / 2);
      }

      if (!isDeleting && updatedText === currentText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((previousLoop) => previousLoop + 1);
        setDelta(300);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section
      className="relative isolate flex min-h-[920px] items-center overflow-hidden pt-36 md:min-h-screen md:pt-28"
      id="home"
    >
      <div className="absolute inset-0 -z-20 bg-cyber-radial"></div>
      <div className="absolute inset-0 -z-20 bg-hero-grid bg-[length:64px_64px] opacity-35 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"></div>
      <div className="absolute left-[-10%] top-[20%] -z-10 h-80 w-80 rounded-full bg-electric-cyan/10 blur-3xl"></div>
      <div className="absolute bottom-[10%] right-[-12%] -z-10 h-96 w-96 rounded-full bg-electric-violet/16 blur-3xl"></div>
      <div className="absolute left-6 top-[28%] hidden h-px w-60 origin-left animate-data-line bg-gradient-to-r from-transparent via-electric-cyan to-transparent lg:block"></div>
      <div className="absolute bottom-[28%] right-3 hidden h-px w-72 origin-right rotate-12 animate-data-line bg-gradient-to-r from-transparent via-electric-violet to-transparent lg:block"></div>

      <div className="portfolio-container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="hero-copy max-w-3xl"
            style={{
              opacity: "var(--hero-copy-opacity, 1)",
              transform: "translate3d(0, var(--hero-copy-shift, 0), 0)"
            }}
          >
            <div className="mb-5 inline-flex items-center gap-3 border border-electric-cyan/25 bg-white/[0.045] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl">
              <span className="relative h-2.5 w-2.5 rounded-full bg-electric-green shadow-[0_0_12px_rgba(121,255,188,0.8)] before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-electric-green/70"></span>
              Available for ambitious security projects
            </div>

            <span className="mb-5 inline-flex border border-white/20 bg-gradient-to-r from-electric-pink/25 to-electric-violet/25 px-3 py-2 text-sm font-bold tracking-[0.08em] text-white">
              Cybersecurity - Engineering - Leadership
            </span>

            <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.03] tracking-normal sm:text-6xl xl:text-7xl">
              Hi, I'm Argyrios Gkanatsios.
              <span className="block min-h-[1.18em] pt-2 text-gradient">
                <span className="border-r border-white/60 pr-1">{text}</span>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Electrical and Computer Engineering student focused on cybersecurity
              and offensive security. I build realistic security labs, Red Team / Blue
              Team scenarios, and technical solutions that connect engineering with
              real-world security challenges.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-gradient-to-r from-electric-pink to-electric-violet px-6 text-sm font-bold text-white shadow-violet transition hover:-translate-y-1 hover:shadow-glow"
                href="#case-studies"
              >
                View case studies <ArrowRightCircle size={22} />
              </a>
              <a
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 bg-white/[0.03] px-6 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-space-950"
                href="/ArgyriosGkanatsiosCV.pdf"
                download
              >
                <Download size={20} /> Download CV
              </a>
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/58 transition hover:text-white"
              href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> Connect with me on LinkedIn
            </a>
          </div>

          <div
            className="hero-stage relative mx-auto h-[540px] w-full max-w-[560px] md:h-[620px]"
            style={{
              transform: "translate3d(0, var(--hero-image-shift, 0), 0) scale(var(--hero-scale, 1))"
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-[min(84vw,500px)] w-[min(84vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-cyan/20 shadow-[inset_0_0_35px_rgba(77,225,255,0.1),0_0_60px_rgba(180,108,255,0.14)]">
              <span className="absolute inset-[12%] animate-spin-slow rounded-full border border-dashed border-electric-violet/35"></span>
              <span className="absolute inset-[26%] animate-[spin-slow_8s_linear_infinite_reverse] rounded-full border border-electric-cyan/25"></span>
              <span className="absolute inset-[36%] animate-pulse rounded-full bg-electric-cyan/20 blur-2xl"></span>
            </div>

            <div className="absolute inset-x-[5%] bottom-4 z-10 h-20 rounded-[50%] border border-electric-cyan/25 bg-electric-violet/15 shadow-glow [transform:perspective(200px)_rotateX(65deg)]"></div>

            <div className="absolute inset-x-[8%] bottom-7 top-4 z-20 overflow-hidden rounded-b-[38px] rounded-t-[220px]">
              <img
                className="h-full w-full object-contain object-bottom drop-shadow-[0_28px_24px_rgba(0,0,0,0.55)]"
                src={headerImg}
                alt="Argyrios Gkanatsios"
                decoding="async"
                fetchPriority="high"
                loading="eager"
                style={{ transform: "translate3d(0, var(--hero-inner-shift, 0), 0)" }}
              />
              <span className="pointer-events-none absolute inset-x-8 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-electric-cyan/25 to-transparent mix-blend-screen"></span>
            </div>

            <div className="absolute right-0 top-[22%] z-30 min-w-36 animate-float clip-cyber border border-electric-cyan/25 bg-space-900/[0.72] px-4 py-3 text-white shadow-glow backdrop-blur-xl">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-electric-cyan">Focus</span>
              <strong className="text-xs tracking-[0.08em]">OFFENSIVE SECURITY</strong>
            </div>
            <div className="absolute left-[-24%] top-[4%] z-30 hidden w-52 animate-float clip-cyber border border-electric-violet/25 bg-space-900/[0.72] px-4 py-3 text-white shadow-violet backdrop-blur-xl [animation-delay:-1.2s] lg:block 2xl:left-[-18%]">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-electric-violet">Frontend</span>
              <strong className="text-xs tracking-[0.08em]">HTML/CSS - JAVASCRIPT - REACT</strong>
            </div>
            <div className="absolute bottom-[24%] left-2 z-30 animate-float clip-cyber border border-electric-pink/25 bg-space-900/[0.72] px-4 py-3 text-white shadow-violet backdrop-blur-xl [animation-delay:-2.2s]">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-electric-pink">System</span>
              <strong className="text-xs tracking-[0.08em]">RED / BLUE TEAM</strong>
            </div>
            <div className="absolute bottom-[8%] right-0 z-30 w-52 animate-float clip-cyber border border-electric-green/25 bg-space-900/[0.72] px-4 py-3 text-white shadow-glow backdrop-blur-xl [animation-delay:-3.2s]">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-electric-green">Backend</span>
              <strong className="text-xs tracking-[0.08em]">PYTHON - JAVA - KOTLIN - C/C++</strong>
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 md:flex"
        href="#skills"
        aria-label="Scroll to expertise"
      >
        <span>Scroll to explore</span>
        <i className="relative block h-11 w-px overflow-hidden bg-white/15 after:absolute after:inset-x-0 after:top-0 after:h-2/3 after:animate-scroll-cue after:bg-gradient-to-b after:from-transparent after:to-electric-cyan"></i>
      </a>
    </section>
  );
};
