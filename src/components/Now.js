import { ArrowUpRight } from "react-bootstrap-icons";

const signalRows = [
  ["RFID", "13.56 MHz"],
  ["SUB-GHZ", "433/868"],
  ["NFC", "Auth token"]
];

const notebookEntries = [
  {
    label: "Research question",
    value: "How can common EV charging touchpoints be assessed safely for authentication, RF and protocol weaknesses?"
  },
  {
    label: "Target surface",
    value: "EVSE interfaces, RFID/NFC authentication flows, Sub-GHz signals, user-facing charger behavior."
  },
  {
    label: "Tools",
    value: "Flipper Zero, Linux workstation, Python scripts, protocol documentation and controlled lab notes."
  },
  {
    label: "Methodology",
    value: "Map the environment, document signals, test in authorized conditions, compare behavior against expected flows."
  },
  {
    label: "Ethics boundary",
    value: "Authorized testing only, no public infrastructure disruption, no credential misuse, no unsafe charging behavior."
  }
];

export const Now = () => (
  <section className="now-section page-section" id="now" aria-labelledby="now-title">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-space-950 via-space-900 to-space-950"></div>
    <div className="portfolio-container">
      <div className="now-board glass-panel grid gap-10 overflow-hidden p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="now-visual relative min-h-[430px] overflow-hidden border border-white/10 bg-space-900/70 sm:min-h-[520px]">
          <div className="absolute inset-0 bg-hero-grid bg-[length:42px_42px] opacity-[0.075]"></div>
          <div className="absolute inset-x-8 bottom-10 h-px bg-gradient-to-r from-transparent via-electric-cyan/45 to-transparent"></div>

          <div className="absolute left-[7%] top-[12%] h-[280px] w-[150px] rounded-[28px] border border-electric-cyan/35 bg-gradient-to-b from-[#181b24] to-[#090b12] shadow-glow sm:left-[10%] sm:h-[330px] sm:w-[174px]">
            <div className="absolute left-1/2 top-5 h-16 w-[112px] -translate-x-1/2 rounded-xl border border-electric-cyan/30 bg-space-950 p-3 shadow-[inset_0_0_24px_rgba(77,225,255,0.08)]">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-electric-cyan">EVSE-01</span>
              <span className="mt-2 flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.12em] text-electric-green">
                <i className="h-1.5 w-1.5 rounded-full bg-electric-green shadow-[0_0_8px_rgba(121,255,188,0.9)]"></i>
                Charge point
              </span>
            </div>

            <div className="absolute left-1/2 top-[112px] grid h-[78px] w-[78px] -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.035]">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-electric-cyan/35 bg-space-950">
                <i className="h-4 w-4 rounded-full border-4 border-electric-cyan/70"></i>
              </span>
              {[0, 1, 2, 3, 4].map((pin) => (
                <i
                  className="absolute h-1.5 w-1.5 rounded-full bg-white/45"
                  style={{ transform: `rotate(${pin * 72}deg) translateY(-23px)` }}
                  key={pin}
                ></i>
              ))}
            </div>

            <span className="absolute bottom-24 left-1/2 -translate-x-1/2 rounded-full border border-electric-violet/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-electric-violet">
              Type 2
            </span>
            <span className="absolute bottom-12 left-1/2 h-8 w-[94px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04]"></span>
            <span className="absolute -bottom-12 left-1/2 h-14 w-3 -translate-x-1/2 bg-electric-cyan/20"></span>
          </div>

          <div className="absolute bottom-[92px] left-[17%] h-[150px] w-[270px] rounded-full border-[10px] border-electric-cyan/18 border-t-transparent sm:left-[19%] sm:w-[330px]"></div>
          <div className="absolute bottom-[76px] left-[43%] h-14 w-9 rotate-[28deg] rounded-lg border border-electric-cyan/35 bg-space-950 shadow-glow">
            <span className="absolute -right-3 top-4 h-5 w-4 rounded-r bg-electric-cyan/30"></span>
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-electric-green"></span>
            <span className="absolute bottom-2 left-2 right-2 h-1 rounded bg-white/25"></span>
          </div>

          <div className="absolute bottom-[76px] right-[4%] h-[150px] w-[330px] max-w-[72vw] rotate-[-3deg] sm:right-[7%] sm:h-[178px] sm:w-[410px]">
            <div className="absolute inset-0 [clip-path:polygon(8%_0,92%_0,100%_18%,100%_82%,92%_100%,8%_100%,0_82%,0_18%)] bg-[#e8ebe6] shadow-[0_28px_70px_rgba(0,0,0,0.42),inset_0_-12px_22px_rgba(0,0,0,0.12)]"></div>
            <div className="absolute inset-[7px] [clip-path:polygon(8%_0,92%_0,100%_18%,100%_82%,92%_100%,8%_100%,0_82%,0_18%)] border border-white/70 bg-gradient-to-b from-white/70 to-[#d7dbd4]"></div>

            <div className="absolute left-[14%] top-[18%] h-[48%] w-[36%] overflow-hidden rounded-xl border border-[#d95d14]/45 bg-[#f7953a] shadow-[inset_0_0_18px_rgba(76,29,8,0.28)]">
              <div className="absolute inset-x-3 top-3 h-5 rounded border border-[#b94f11]/35 bg-[#ffad57]/45">
                <span className="absolute left-2 top-1 h-1.5 w-20 bg-[#b94f11]/55"></span>
                <span className="absolute right-2 top-1 h-1.5 w-12 bg-[#b94f11]/55"></span>
                <span className="absolute left-8 right-10 top-3 h-px bg-[#b94f11]/55"></span>
              </div>
              <div className="absolute bottom-4 left-5 h-8 w-14 rounded-full border-2 border-[#8a3c0f]/55">
                <span className="absolute -right-9 top-2 h-px w-9 bg-[#8a3c0f]/55"></span>
                <span className="absolute -right-12 top-0 text-[12px] font-bold text-[#8a3c0f]/75">)))</span>
              </div>
              <span className="absolute bottom-4 right-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a3c0f]">SCAN</span>
            </div>

            <div className="absolute right-[20%] top-[16%] grid h-[72px] w-[72px] place-items-center rounded-full bg-[#f27d22] shadow-[inset_0_-8px_14px_rgba(107,43,7,0.26)] sm:h-[84px] sm:w-[84px]">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[#ba4f13]/45 bg-[#f39237] shadow-[inset_0_0_12px_rgba(255,255,255,0.16)]"></span>
              <i className="absolute top-2 h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-[#b74d12]"></i>
              <i className="absolute bottom-2 h-0 w-0 border-x-[5px] border-t-[8px] border-x-transparent border-t-[#b74d12]"></i>
              <i className="absolute left-2 h-0 w-0 border-y-[5px] border-r-[8px] border-y-transparent border-r-[#b74d12]"></i>
              <i className="absolute right-2 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#b74d12]"></i>
            </div>

            <button
              className="absolute right-[8%] top-[34%] grid h-9 w-9 place-items-center rounded-full bg-[#f27d22] text-[#9d3d09] shadow-[inset_0_-4px_8px_rgba(107,43,7,0.25)]"
              type="button"
              tabIndex="-1"
              aria-hidden="true"
            >
              <span className="text-sm font-black">C</span>
            </button>

            <span className="absolute bottom-[20%] left-[34%] text-[20px] font-bold italic tracking-[0.18em] text-[#f06f18] sm:text-[25px]">
              FLIPPER
            </span>
            <span className="absolute bottom-[13%] left-[56%] h-1.5 w-14 rounded-full bg-space-950/28"></span>
            <span className="absolute bottom-[12%] left-[72%] h-2 w-8 rounded-full border border-space-950/25"></span>
            <span className="absolute bottom-[9%] right-[10%] h-1.5 w-10 rounded-full bg-space-950/20"></span>
          </div>

          <div className="absolute left-[39%] top-[15%] hidden w-[176px] sm:block">
            {signalRows.map(([label, value], index) => (
              <div
                className="mb-2 flex items-center justify-between border border-white/10 bg-space-950/70 px-3 py-2 backdrop-blur"
                style={{ transform: `translateX(${index % 2 === 0 ? 0 : 18}px)` }}
                key={label}
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-electric-cyan">{label}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/45">{value}</span>
              </div>
            ))}
          </div>

          {[0, 1, 2].map((index) => (
            <span
              className="absolute left-[47%] top-[47%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full border border-electric-cyan/35"
              style={{ animationDelay: `${index * -0.8}s` }}
              key={index}
            ></span>
          ))}
          <span className="absolute left-[34%] top-[44%] h-px w-[34%] rotate-[-10deg] bg-gradient-to-r from-transparent via-electric-cyan to-transparent"></span>
          <span className="absolute left-[36%] top-[57%] h-px w-[31%] rotate-[8deg] bg-gradient-to-r from-transparent via-electric-violet to-transparent"></span>
          <span className="absolute left-[33%] top-[32%] h-2 w-2 animate-pulse rounded-full bg-electric-cyan shadow-[0_0_12px_rgba(77,225,255,0.9)]"></span>
          <span className="absolute bottom-[18%] right-[20%] h-2 w-2 animate-pulse rounded-full bg-electric-violet shadow-[0_0_12px_rgba(180,108,255,0.9)]"></span>
        </div>

        <div className="now-copy">
          <div className="now-meta mb-5 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
            <span className="inline-flex items-center gap-2 text-electric-green">
              <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
              Active research
            </span>
            <span>Diploma thesis - In progress</span>
          </div>
          <span className="section-kicker">Now</span>
          <h2 id="now-title" className="text-balance text-4xl font-bold md:text-5xl">
            Currently investigating
          </h2>
          <p className="mt-5 text-2xl font-bold leading-snug text-gradient">
            Penetration testing of electric vehicle charging infrastructure with Flipper Zero
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
            Current diploma research focused on EVSE attack surfaces, RFID/NFC authentication flows,
            radio-frequency probing and practical security testing around charging infrastructure.
          </p>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-electric-cyan/35 px-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-electric-cyan hover:text-space-950"
            href="#connect"
          >
            Discuss the research <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="research-notebook mt-8 glass-panel overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-electric-cyan">
              Research lab notebook
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">EV charging security study frame</h3>
          </div>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-electric-green">
            <i className="h-2 w-2 rounded-full bg-electric-green shadow-[0_0_10px_rgba(121,255,188,0.9)]"></i>
            Safe lab scope
          </span>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-5">
          {notebookEntries.map((entry, index) => (
            <article className="bg-space-950/88 p-5" key={entry.label}>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-electric-violet">
                {String(index + 1).padStart(2, "0")} / {entry.label}
              </span>
              <p className="mt-3 text-sm leading-6 text-white/64">{entry.value}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
