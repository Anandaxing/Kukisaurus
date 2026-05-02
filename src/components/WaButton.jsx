import "../assets/styles/NavigationBar.css";
import "../../public/fonts.css";
import { IoLogoWhatsapp } from "react-icons/io5";
const WaButton = () => {
  return (
    <a href="https://api.whatsapp.com/send/?phone=6281391326445&text&type=phone_number&app_absent=0" target="blank" className="waButton" data-aos="fade-up">
        <IoLogoWhatsapp />
    </a>
  );
};

export default WaButton; 