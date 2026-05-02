import FirstGallery from "../assets/images/gallery-01.jpg";
import SecondGallery from "../assets/images/gallery-02.jpeg";
import ThirdGallery from "../assets/images/gallery-03.jpg";
import FourthGallery from "../assets/images/gallery-04.jpg";
import "../../public/fonts.css";
import "../assets/styles/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery poppins-regular">
      <h1>From Our<span> Gallery</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nobis!</p>
      <div className="imageGalleryContainer">
        <img src={FirstGallery} alt="" />
        <img src={SecondGallery} alt="" />
        <img src={ThirdGallery} alt="" />
        <img src={FourthGallery} alt="" />
      </div>
    </div>
  );
};

export default Gallery;