/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        centra: ["Centra", "sans-serif"]
      },
      colors: {
        space: {
          950: "#05050a",
          900: "#07070c",
          850: "#0a0a12",
          800: "#10101a"
        },
        electric: {
          cyan: "#4de1ff",
          violet: "#b46cff",
          pink: "#ff5fbd",
          green: "#79ffbc",
          amber: "#ffc35f"
        }
      },
      boxShadow: {
        glow: "0 0 38px rgba(77, 225, 255, 0.22)",
        violet: "0 24px 80px rgba(92, 73, 255, 0.28)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(77, 225, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 225, 255, 0.09) 1px, transparent 1px)",
        "cyber-radial":
          "radial-gradient(circle at 20% 20%, rgba(77, 225, 255, 0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(180, 108, 255, 0.24), transparent 33%), radial-gradient(circle at 50% 90%, rgba(255, 95, 189, 0.14), transparent 34%)"
      },
      keyframes: {
        "grid-pan": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(var(--grid-shift, 48px), 48px, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        "float-soft": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -18px, 0) scale(1.035)" }
        },
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(220%)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" }
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" }
        },
        bars: {
          "0%, 100%": { transform: "scaleY(0.45)", opacity: "0.45" },
          "50%": { transform: "scaleY(1)", opacity: "1" }
        },
        "data-line": {
          "0%, 100%": { transform: "scaleX(0.28)", opacity: "0" },
          "45%, 65%": { transform: "scaleX(1)", opacity: "0.65" }
        },
        ripple: {
          "0%": { transform: "scale(0.72)", opacity: "0.85" },
          "100%": { transform: "scale(1.55)", opacity: "0" }
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" }
        },
        "scroll-cue": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" }
        }
      },
      animation: {
        "grid-pan": "grid-pan 18s linear infinite",
        float: "float 4.5s ease-in-out infinite",
        "float-soft": "float-soft 7s ease-in-out infinite",
        scan: "scan 4.5s linear infinite",
        "pulse-glow": "pulse-glow 2.2s ease-in-out infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        bars: "bars 1.3s ease-in-out infinite",
        "data-line": "data-line 5s ease-in-out infinite",
        ripple: "ripple 2.5s ease-out infinite",
        wave: "wave 1.4s ease-in-out infinite",
        "scroll-cue": "scroll-cue 2s ease-in-out infinite",
        shimmer: "shimmer 1.9s cubic-bezier(0.16, 1, 0.3, 1) infinite"
      }
    }
  },
  plugins: []
};
