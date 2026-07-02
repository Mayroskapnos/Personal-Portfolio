import { useEffect } from "react";

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);
const lerp = (start, end, amount) => start + (end - start) * amount;

const revealGroups = [
  { selector: ".expertise-command-header, .expertise-command-footer", type: "rise", delay: 80 },
  { selector: ".expertise-reactor", type: "scale", delay: 0 },
  { selector: ".expertise-satellite", type: "card", delay: 90 },
  { selector: ".profile > .portfolio-container .section-kicker, .profile > .portfolio-container h2, .profile .section-intro", type: "rise", delay: 80 },
  { selector: ".profile-tabs", type: "scale", delay: 0 },
  { selector: ".profile-subheading, .archive-header, .operations-header, .archive-section-label", type: "rise", delay: 70 },
  { selector: ".academic-record, .credential-record, .achievement-file, .operation-card, .skill-hologram", type: "card", delay: 85 },
  { selector: ".cv-copy", type: "left", delay: 0 },
  { selector: ".cv-document", type: "right", delay: 0 },
  { selector: ".case-studies-header", type: "rise", delay: 0 },
  { selector: ".case-study-card, .case-study-dossier", type: "card", delay: 90 },
  { selector: ".now-visual", type: "scale", delay: 0 },
  { selector: ".now-copy", type: "right", delay: 70 },
  { selector: ".research-notebook", type: "rise", delay: 0 },
  { selector: ".contact-section-header", type: "rise", delay: 0 },
  { selector: ".contact-visual", type: "left", delay: 0 },
  { selector: ".secure-composer", type: "right", delay: 95 },
  { selector: ".footer-cta", type: "scale", delay: 0 },
  { selector: ".footer .portfolio-container > div:last-child", type: "rise", delay: 80 }
];

export const ScrollEffects = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsIntersectionObserver = typeof window.IntersectionObserver === "function";
    const compactViewport =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 767px)").matches;
    const revealElements = [];

    root.classList.add("js-scroll-motion");

    revealGroups.forEach(({ selector, type, delay }) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("scroll-reveal");
        element.dataset.reveal = type;
        element.style.setProperty("--reveal-delay", `${(index % 6) * delay}ms`);
        revealElements.push(element);
      });
    });

    const cleanRevealAttributes = () => {
      revealElements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        delete element.dataset.reveal;
        element.style.removeProperty("--reveal-delay");
      });
    };

    if (reducedMotion || !supportsIntersectionObserver) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        root.classList.remove("js-scroll-motion");
        cleanRevealAttributes();
      };
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 4% 0px"
      }
    );

    const revealElement = (element) => {
      if (!element.classList.contains("is-visible")) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    };

    const revealElementsInView = () => {
      revealElements.forEach((element) => {
        if (element.classList.contains("is-visible")) return;
        const rect = element.getBoundingClientRect();
        const isNearViewport =
          rect.top <= window.innerHeight * 1.03 &&
          rect.bottom >= -window.innerHeight * 0.08;

        if (isNearViewport) {
          revealElement(element);
        }
      });
    };

    revealElements.forEach((element) => observer.observe(element));
    revealElementsInView();

    if (compactViewport) {
      return () => {
        observer.disconnect();
        root.classList.remove("js-scroll-motion");
        cleanRevealAttributes();
      };
    }

    const sections = [...document.querySelectorAll(".skill, .profile, .cv-preview, .case-studies, .now-section, .contact")];
    let targetScroll = window.scrollY;
    let currentScroll = targetScroll;
    let animationFrame = null;

    const renderMotion = () => {
      currentScroll = lerp(currentScroll, targetScroll, 0.12);
      const heroProgress = clamp(currentScroll / Math.max(window.innerHeight * 0.92, 1), 0, 1);
      const pageHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const pageProgress = clamp(currentScroll / pageHeight, 0, 1);

      root.style.setProperty("--hero-copy-shift", `${heroProgress * -44}px`);
      root.style.setProperty("--hero-image-shift", `${heroProgress * 58}px`);
      root.style.setProperty("--hero-inner-shift", `${heroProgress * -22}px`);
      root.style.setProperty("--hero-scale", `${1 - heroProgress * 0.055}`);
      root.style.setProperty("--hero-copy-opacity", `${1 - heroProgress * 0.42}`);
      root.style.setProperty("--ambient-shift", `${clamp(currentScroll * -0.028, -110, 0)}px`);
      root.style.setProperty("--grid-shift", `${currentScroll * 0.075}px`);
      root.style.setProperty("--page-progress", `${pageProgress}`);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = clamp(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          0,
          1
        );
        section.style.setProperty("--section-progress", progress);
      });

      if (Math.abs(targetScroll - currentScroll) > 0.1) {
        animationFrame = window.requestAnimationFrame(renderMotion);
      } else {
        currentScroll = targetScroll;
        animationFrame = null;
      }
    };

    const requestMotionFrame = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(renderMotion);
      }
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
      revealElementsInView();
      requestMotionFrame();
    };

    const onPointerMove = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--pointer-page-x", `${(event.clientX / window.innerWidth) * 100}%`);
      root.style.setProperty("--pointer-page-y", `${(event.clientY / window.innerHeight) * 100}%`);
    };

    renderMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const revealSafetyTimer = window.setTimeout(() => {
      revealElementsInView();
    }, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(revealSafetyTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      root.classList.remove("js-scroll-motion");
      cleanRevealAttributes();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
};
