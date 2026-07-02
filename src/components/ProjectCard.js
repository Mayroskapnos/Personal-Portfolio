export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <article className="group cyber-card overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={imgUrl}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-r from-electric-pink/85 to-electric-violet/85 p-5 text-center opacity-0 transition duration-300 group-hover:opacity-100">
          <div>
            <h4 className="text-2xl font-bold text-white">{title}</h4>
            <span className="mt-2 block text-sm italic text-white/80">{description}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
