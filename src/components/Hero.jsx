import HeroImage from "../assets/images/hero-section-image.jpg";
import "../../public/fonts.css";
import "../assets/styles/Hero.css";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h1 className="poppins-semibold">
        “ Terkadang, yang dibutuhkan untuk menjual biskuit bukan hanya rasa yang enak, tetapi juga cerita yang membuat setiap gigitan terasa spesial. ”
      </h1>
      <img src={HeroImage} alt="cookies image" loading="lazy"/>
    </section>
  );
};

export default HeroSection;