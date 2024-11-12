import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CatchballInfo from "./components/CatchballInfo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";
import slide6 from "./assets/slide6.jpg";
import Carousel from "./components/Carousel";

function App() {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24">
      <Navbar />
      <Hero />

      <CatchballInfo />
      <About />
      <Carousel images={slides} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
