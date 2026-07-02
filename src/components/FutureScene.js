const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: (index * 37) % 100,
  y: (index * 61) % 100,
  size: 2 + (index % 4),
  delay: (index % 8) * -0.9,
  duration: 8 + (index % 7)
}));

export const FutureScene = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-[-20%] animate-grid-pan bg-hero-grid bg-[length:58px_58px] opacity-[0.08]"></div>
      <div className="absolute inset-[-20%] animate-[grid-pan_28s_linear_infinite_reverse] bg-hero-grid bg-[length:120px_120px] opacity-[0.06]"></div>
      <div className="absolute left-[8%] top-[18%] h-64 w-64 animate-float-soft rounded-full bg-electric-cyan/10 blur-3xl"></div>
      <div className="absolute bottom-[8%] right-[10%] h-80 w-80 animate-float-soft rounded-full bg-electric-violet/12 blur-3xl [animation-delay:-3s]"></div>
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-cyan/10 blur-3xl"
        style={{
          left: "var(--pointer-x, 50%)",
          top: "var(--pointer-y, 50%)"
        }}
      ></div>
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            className="absolute rounded-full bg-electric-cyan/70 shadow-[0_0_12px_rgba(77,225,255,0.85)]"
            key={particle.id}
            style={{
              left: "var(--particle-x)",
              top: "var(--particle-y)",
              width: "var(--particle-size)",
              height: "var(--particle-size)",
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              "--particle-x": `${particle.x}%`,
              "--particle-y": `${particle.y}%`,
              "--particle-size": `${particle.size}px`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-duration": `${particle.duration}s`
            }}
          ></span>
        ))}
      </div>
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:4px_4px]"></div>
    </div>
  );
};
