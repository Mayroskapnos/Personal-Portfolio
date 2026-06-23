import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollEffects } from "./components/ScrollEffects";
import { FutureScene } from "./components/FutureScene";

function App() {
  return (
    <div className="App">
      <FutureScene />
      <ScrollEffects />
      <NavBar />
      <Banner />
      <Skills />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
