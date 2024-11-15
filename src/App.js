import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CatchballWhyInfo from "./components/CatchballWhyInfo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CatchballInfo from "./components/CatchballInfo";

function App() {
  return (
    // <div className="px-4 md:px-8 lg:px-16 xl:px-24">
    <div>
      <Navbar />
      <Hero />

      <CatchballWhyInfo />
      <CatchballInfo />

      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
