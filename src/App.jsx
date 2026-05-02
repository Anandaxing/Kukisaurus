import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaButton from "./components/WaButton";

const App = () => {
  return (
    <>
      <NavigationBar />
      <WaButton />
      <Jumbotron />
      <Hero />
      <AboutUs />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;