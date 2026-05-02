import jumbotronImage from "../assets/images/jumbotron-image.jpg";
import "../../public/fonts.css";
import "../assets/styles/Jumbotron.css";
import { FaWhatsapp } from "react-icons/fa";

const Jumbotron = () => {
  return (
    <div id="home" className="jumbotronContainer poppins-regular">
      <div className="titleContainer">
        <h1 id="jumbotron-title" data-aos="fade-up">Kukis<span>aurus</span></h1>
        <h2>Manisan yang kecil untuk <span>momen <br/> yang besar</span></h2>
        <a href="https://api.whatsapp.com/send/?phone=6281391326445&text&type=phone_number&app_absent=0" target="blank" className="jumbotronButton"><span><FaWhatsapp /></span> Buruan order</a>
      </div>
      <div className="jumbotronImageContainer">
        <img src={jumbotronImage} />
      </div>
    </div>
  );
};

export default Jumbotron;