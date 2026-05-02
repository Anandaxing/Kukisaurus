import { FaGlobe } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import "../../public/fonts.css";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer poppins-regular">
      <div className="logos">
        <ul>
          <li>
            <FaGlobe />
          </li>
          <li>
            <RiInstagramFill />
          </li>
          <li>
            <IoLogoWhatsapp />
          </li>
        </ul>
      </div>
      <div className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Products</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="copyright">
        <p>Created by <span>Ananda12</span> &copy;2024</p>
      </div>
    </footer>
  );
};

export default Footer;