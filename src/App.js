import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { CVPreview } from "./components/CVPreview";
import { CaseStudies } from "./components/CaseStudies";
import { Now } from "./components/Now";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollEffects } from "./components/ScrollEffects";
import { FutureScene } from "./components/FutureScene";
import { ExperienceNavigator } from "./components/ExperienceNavigator";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-space-950 text-white">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <FutureScene />
      <ScrollEffects />
      <ExperienceNavigator />
      <NavBar />
      <main id="main-content">
        <Banner />
        <Skills />
        <Profile />
        <CVPreview />
        <CaseStudies />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
