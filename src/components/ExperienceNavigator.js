import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

const chapters = [
  { id: "home", code: "00", label: "Launch", short: "Home" },
  { id: "skills", code: "01", label: "Command Core", short: "Skills" },
  { id: "profile", code: "02", label: "Archive", short: "Profile" },
  { id: "cv", code: "03", label: "CV Packet", short: "CV" },
  { id: "case-studies", code: "04", label: "Case Files", short: "Cases" },
  { id: "now", code: "05", label: "Research", short: "Now" },
  { id: "connect", code: "06", label: "Uplink", short: "Contact" }
];

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

const scrollToChapter = (index) => {
  const chapter = chapters[index];
  const target = chapter ? document.getElementById(chapter.id) : null;
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

export const ExperienceNavigator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);

  const activeChapter = chapters[activeIndex];
  const progressLabel = useMemo(
    () => `${Math.round(sectionProgress * 100).toString().padStart(2, "0")}%`,
    [sectionProgress]
  );

  useEffect(() => {
    const root = document.documentElement;
    const getSections = () =>
      chapters
        .map((chapter) => document.getElementById(chapter.id))
        .filter(Boolean);

    let frame = null;

    const updateActiveChapter = () => {
      const sections = getSections();
      const viewportCenter = window.innerHeight * 0.42;
      let nextActiveIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const index = chapters.findIndex((chapter) => chapter.id === section.id);
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);

        if (distance < nearestDistance && rect.bottom > 120) {
          nearestDistance = distance;
          nextActiveIndex = index;
        }
      });

      const activeSection = document.getElementById(chapters[nextActiveIndex].id);
      if (activeSection) {
        const rect = activeSection.getBoundingClientRect();
        const travel = Math.max(rect.height - window.innerHeight * 0.52, 1);
        const progress = clamp((window.innerHeight * 0.32 - rect.top) / travel, 0, 1);

        root.style.setProperty("--chapter-progress", progress.toFixed(3));
        setSectionProgress(progress);
      }

      setActiveIndex(nextActiveIndex);
      frame = null;
    };

    const requestUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateActiveChapter);
      }
    };

    updateActiveChapter();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <aside
        className="pointer-events-none fixed right-4 top-1/2 z-[9000] hidden -translate-y-1/2 xl:block"
        aria-label="Experience navigator"
      >
        <div className="pointer-events-auto w-[190px] border border-white/10 bg-space-950/[0.72] p-3 shadow-panel backdrop-blur-2xl">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-electric-cyan">
                Mission map
              </span>
              <strong className="mt-1 block text-sm text-white">{activeChapter.label}</strong>
            </div>
            <div
              className="grid h-11 w-11 place-items-center rounded-full text-[10px] font-bold text-white"
              style={{
                background: `conic-gradient(rgb(77 225 255) ${sectionProgress * 360}deg, rgba(255,255,255,0.1) 0deg)`
              }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-space-950">{progressLabel}</span>
            </div>
          </div>

          <div className="relative grid gap-1">
            <span className="absolute bottom-3 left-[17px] top-3 w-px bg-white/10"></span>
            {chapters.map((chapter, index) => {
              const active = activeIndex === index;

              return (
                <button
                  className={`group relative z-10 grid grid-cols-[34px_1fr] items-center gap-2 px-1 py-2 text-left transition ${
                    active ? "text-white" : "text-white/42 hover:text-white"
                  }`}
                  type="button"
                  onClick={() => scrollToChapter(index)}
                  aria-current={active ? "page" : undefined}
                  key={chapter.id}
                >
                  <span
                    className={`grid h-7 w-7 place-items-center border text-[9px] font-bold transition ${
                      active
                        ? "border-electric-cyan bg-electric-cyan text-space-950 shadow-[0_0_18px_rgba(77,225,255,0.45)]"
                        : "border-white/15 bg-space-900 group-hover:border-electric-cyan/50"
                    }`}
                  >
                    {chapter.code}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold uppercase tracking-[0.13em]">
                      {chapter.short}
                    </span>
                    <span className="block truncate text-[10px] text-white/35">{chapter.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
            <button
              className="grid h-9 place-items-center border border-white/10 bg-white/[0.035] text-white/70 transition hover:border-electric-cyan/40 hover:text-electric-cyan disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              onClick={() => scrollToChapter(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous section"
            >
              <ChevronUp size={16} />
            </button>
            <button
              className="grid h-9 place-items-center border border-white/10 bg-white/[0.035] text-white/70 transition hover:border-electric-cyan/40 hover:text-electric-cyan disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              onClick={() => scrollToChapter(activeIndex + 1)}
              disabled={activeIndex === chapters.length - 1}
              aria-label="Next section"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </aside>

      <nav
        className="fixed inset-x-3 bottom-3 z-[9000] border border-white/10 bg-space-950/[0.82] p-2 shadow-panel backdrop-blur-2xl xl:hidden"
        aria-label="Mobile experience navigator"
      >
        <div className="mb-2 flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
          <span>{activeChapter.label}</span>
          <span className="text-electric-cyan">{activeChapter.code}</span>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {chapters.map((chapter, index) => {
            const active = activeIndex === index;

            return (
              <button
                className={`h-9 border text-[10px] font-bold transition ${
                  active
                    ? "border-electric-cyan bg-electric-cyan text-space-950"
                    : "border-white/10 bg-white/[0.035] text-white/45"
                }`}
                type="button"
                onClick={() => scrollToChapter(index)}
                aria-label={`Go to ${chapter.label}`}
                aria-current={active ? "page" : undefined}
                key={chapter.id}
              >
                {chapter.code}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
