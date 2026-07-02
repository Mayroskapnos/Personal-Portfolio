import { Download, Linkedin } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden bg-space-950 py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_90%,rgba(180,108,255,0.18),transparent_28%)]"></div>
      <div className="portfolio-container">
        <div className="footer-cta glass-panel mb-10 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">Let's connect</span>
            <h3 className="text-balance text-2xl font-bold md:text-3xl">
              Interested in cybersecurity, engineering or building something useful?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-gradient-to-r from-electric-pink to-electric-violet px-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-glow"
              href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-space-950"
              href="/ArgyriosGkanatsiosCV.pdf"
              download
            >
              <Download /> Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a className="text-gradient text-4xl font-bold" href="#home" aria-label="Back to top">
            AG.
          </a>
          <div className="text-left sm:text-right">
            <div className="flex items-center gap-2 sm:justify-end">
              {[
                { href: "https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/", src: navIcon1, alt: "LinkedIn" },
                { href: "https://www.facebook.com/argyrisgkanatsios", src: navIcon2, alt: "Facebook" },
                { href: "https://www.instagram.com/argyrisgk/", src: navIcon3, alt: "Instagram" }
              ].map((icon) => (
                <a
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] transition hover:border-white hover:bg-white"
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                  key={icon.alt}
                >
                  <img className="h-4 w-4 transition group-hover:invert" src={icon.src} alt={icon.alt} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/45">
              &copy; {new Date().getFullYear()} Argyrios D. Gkanatsios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
