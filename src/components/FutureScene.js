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
    <div className="future-scene" aria-hidden="true">
      <div className="future-grid"></div>
      <div className="future-grid future-grid-secondary"></div>
      <div className="future-orb future-orb-one"></div>
      <div className="future-orb future-orb-two"></div>
      <div className="future-cursor-glow"></div>
      <div className="future-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              "--particle-x": `${particle.x}%`,
              "--particle-y": `${particle.y}%`,
              "--particle-size": `${particle.size}px`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-duration": `${particle.duration}s`
            }}
          ></span>
        ))}
      </div>
      <div className="future-noise"></div>
    </div>
  );
};
