import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import ProfilePicture from "../../public/kukisaurus-profile-picture.jpg";
import "../assets/styles/Contact.css";
import "../../public/fonts.css";

const Contact = () => {
  return (
    <div id="contact" className="contactContainer poppins-regular">
      <h1>Contact <span>Us!</span></h1>
      <div className="contacts">
        <div className="imageContainer">
          <img src={ProfilePicture} alt="pfp" loading="lazy" />
        </div>
        <div className="contactsList">
          <ul>
            <li>
              <a href="https://maps.app.goo.gl/1YZz8U5kR2j767mu6" target="blank"><FaLocationDot /> Semarang, ID</a>
            </li>
            <li>
              <a href="https://www.instagram.com/kukisaurus.id/?igsh=aXdxanpud3l2Zzlm#" target="blank"><RiInstagramFill /> kukisaurus.id</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=6281391326445&text&type=phone_number&app_absent=0" target="blank"><IoLogoWhatsapp /> +6281391326445</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;