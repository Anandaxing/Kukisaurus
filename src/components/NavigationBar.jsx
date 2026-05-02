import "../assets/styles/NavigationBar.css";
import "../../public/fonts.css";
import profilePicture from "../../public/kukisaurus-profile-picture.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar").classList.add("scrollMode");
      document.querySelector(".menuBtn").classList.add("colorWhite")
    } else {
      document.querySelector(".navbar").classList.remove("scrollMode");
      document.querySelector(".menuBtn").classList.remove("colorWhite");
    }
  }

  function openSideBar() {
    const menuButton = document.getElementsByClassName("menuBtn")[0];
    const pagination = document.getElementsByClassName("pagination")[0];
    const closeButton = document.getElementsByClassName("menuBtn")[1];
    pagination.classList.toggle("active");
    menuButton.classList.toggle("dnone");
    closeButton.classList.toggle("dblock");
  }

  return (
    <div className="navbar">
      <div className="pagination poppins-regular" id="pagination">
        <a className="navigation" href="#home" >Home</a>
        <a className="navigation" href="#about">About</a>
        <a className="navigation" href="#product">Product</a>
        <a className="navigation" href="#contact">Contact</a>
      </div>
      <div className="menu" onClick={() => openSideBar()}>
        <IoMenu id="menu-btn" className="menuBtn"/>
        <IoClose id="close-btn" className="menuBtn" />
      </div>
      <div className="profileImageContainer">
        <img src={profilePicture} loading="lazy" />
      </div>
    </div>
  );
};

export default NavigationBar;