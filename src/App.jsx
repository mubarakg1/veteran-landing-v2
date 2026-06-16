import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reputation from "./components/Reputation";
import Ambassadors from "./components/Ambassadors";
import CreatorNetwork from "./components/CreatorNetwork";
import { ImagePlay } from "lucide-react";
import Impact from "./components/Impact";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Reputation />
      <Ambassadors/>
      <CreatorNetwork/>
      <Impact/>
      <Contact/>
    </main>
  );
}

export default App;