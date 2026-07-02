import { useEffect, useState } from "react";
import { List, X } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "skills", label: "Expertise", href: "#skills" },
  { id: "profile", label: "Profile", href: "#profile" },
  { id: "cv", label: "CV", href: "#cv" },
  { id: "projects", label: "Projects", href: "#case-studies" },
  { id: "connect", label: "Contact", href: "#connect" }
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectLink = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-space-950/[0.88] py-2 shadow-[0_18px_55px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
          : "py-5"
      }`}
    >
      <nav className="portfolio-container flex items-center justify-between gap-5" aria-label="Primary navigation">
        <a
          className="text-gradient text-3xl font-bold tracking-normal"
          href="#home"
          aria-label="Argyrios Gkanatsios"
          onClick={() => selectLink("home")}
        >
          AG.
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border border-electric-cyan/30 bg-white/[0.04] text-white backdrop-blur lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="portfolio-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <List size={25} />}
        </button>

        <div
          id="portfolio-menu"
          className={`absolute left-4 right-4 top-[calc(100%+12px)] grid gap-5 border border-white/10 bg-space-900/[0.96] p-5 shadow-panel backdrop-blur-2xl transition lg:static lg:flex lg:flex-1 lg:items-center lg:justify-end lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none ${
            menuOpen ? "opacity-100" : "pointer-events-none -translate-y-3 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <a
                className={`relative px-3 py-2 text-sm font-medium uppercase tracking-[0.12em] text-white/68 transition hover:text-white ${
                  activeLink === link.id ? "text-white after:scale-x-100" : "after:scale-x-0"
                } after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:bg-electric-cyan after:transition-transform`}
                href={link.href}
                key={link.id}
                aria-current={activeLink === link.id ? "page" : undefined}
                onClick={() => selectLink(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-4 lg:ml-4 lg:flex-row lg:items-center lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
            <div className="flex items-center gap-2">
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
            <a
              className="inline-flex min-h-11 items-center justify-center border border-white px-5 text-sm font-bold text-white transition hover:bg-white hover:text-space-950"
              href="/ArgyriosGkanatsiosCV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
