import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import avgoulea from "../assets/img/avgoulea.jpg";
import duth from "../assets/img/duth.jpg";
import photoshop from "../assets/img/photoshop.png";
import udemy from "../assets/img/udemy.jpg";
import audax from "../assets/img/audax.jpg";
import msu from "../assets/img/msu.png";
import osd from "../assets/img/osd.png";

const projects = [
  { title: "Preschool", description: "Ages: 4-6", imgUrl: avgoulea },
  { title: "Primary School", description: "Ages: 6-12", imgUrl: avgoulea },
  { title: "Secondary School", description: "Ages: 12-18", imgUrl: avgoulea },
  { title: "C2 Proficiency", description: "MSU", imgUrl: msu },
  { title: "A2", description: "OSD Zertifikat", imgUrl: osd },
  { title: "B1", description: "Osterreichisches Sprachdiplom Deutsch", imgUrl: osd },
  { title: "Democritus University of Thrace", description: "Electrical and Computer Engineering", imgUrl: duth },
  { title: "Ultimate Ethical Hacking Seminar", description: "by Audax Cybersecurity", imgUrl: audax },
  { title: "Ethical Hacking Seminar", description: "by Audax Cybersecurity", imgUrl: audax },
  { title: "Photoshop Masterclass", description: "by Alexandros Karpas", imgUrl: photoshop },
  { title: "Udemy Certification", description: "Advanced knowledges, deep dive in C++", imgUrl: udemy },
  {
    title: "Udemy Certification",
    description: "NextJS 14 full-stack React course, currently in progress",
    imgUrl: udemy
  }
];

const tabs = [
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "upcoming", label: "Upcoming" }
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="project page-section bg-space-950" id="projects">
      <div className="portfolio-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Archive</span>
          <h2 className="text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="mt-4 text-base leading-7 text-white/62">
            Education, selected projects and upcoming collaborations.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 overflow-hidden border border-white/10 bg-white/[0.035]">
          {tabs.map((tab) => (
            <button
              className={`px-4 py-3 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-electric-pink to-electric-violet text-white"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-white"
              }`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              key={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {activeTab === "education" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} {...project} />
              ))}
            </div>
          )}
          {activeTab === "projects" && (
            <div className="glass-panel mx-auto max-w-3xl p-6 text-center text-white/68">
              I have worked as a photo editor and creator in a YouTube channel. My job was to create attractive thumbnails.
            </div>
          )}
          {activeTab === "upcoming" && (
            <div className="glass-panel mx-auto max-w-3xl p-6 text-center text-white/68">
              Right now I am building this website and an appointment website for a barber shop.
            </div>
          )}
        </div>
      </div>
      <img
        className="pointer-events-none absolute right-0 top-1/4 -z-10 w-[35%] opacity-40 blur-sm"
        src={colorSharp2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};
