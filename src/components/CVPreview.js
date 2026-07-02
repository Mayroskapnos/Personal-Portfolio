import { Download, Envelope, FileEarmarkText } from "react-bootstrap-icons";

const highlights = [
  ["Focus", "Cybersecurity, offensive security and secure software engineering"],
  ["Education", "Integrated Master's in Electrical & Computer Engineering, DUTh"],
  ["Experience", "Cybersecurity Erasmus internship at Campfire Security"],
  ["Recognition", "1st place smart sustainable cities concept, June 2025"]
];

export const CVPreview = () => (
  <section className="cv-preview page-section bg-space-900/45" id="cv" aria-labelledby="cv-title">
    <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:62px_62px] opacity-[0.055]"></div>
    <div className="portfolio-container">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="cv-copy">
          <span className="section-kicker">Professional packet</span>
          <h2 id="cv-title" className="text-balance text-4xl font-bold md:text-5xl">
            CV snapshot and download
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
            A compact view of my background, current security focus and direct hiring materials.
          </p>

          <div className="mt-8 grid gap-3">
            {highlights.map(([label, value]) => (
              <article className="cyber-card p-4" key={label}>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-cyan">{label}</span>
                <p className="mt-2 text-sm leading-6 text-white/68">{value}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-gradient-to-r from-electric-pink to-electric-violet px-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-glow"
              href="/ArgyriosGkanatsiosCV.pdf"
              download
            >
              <Download /> Download CV
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-space-950"
              href="mailto:argi.gkanatsios@outlook.com"
            >
              <Envelope /> Email me
            </a>
          </div>
        </div>

        <div className="cv-document glass-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-cyan">
              <FileEarmarkText /> ArgyriosGkanatsiosCV.pdf
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/38">PDF</span>
          </div>
          <iframe
            title="Argyrios Gkanatsios CV preview"
            className="hidden h-[680px] w-full bg-space-950 md:block"
            src="/ArgyriosGkanatsiosCV.pdf#toolbar=0&navpanes=0"
            loading="lazy"
          ></iframe>
          <div className="grid min-h-[260px] place-items-center p-8 text-center md:hidden">
            <div>
              <FileEarmarkText className="mx-auto text-electric-cyan" size={42} />
              <p className="mt-4 text-sm leading-6 text-white/62">
                The full PDF preview is available on larger screens.
              </p>
              <a
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 border border-electric-cyan/35 px-4 text-sm font-bold text-white"
                href="/ArgyriosGkanatsiosCV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
