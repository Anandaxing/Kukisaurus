import descriptionImage from "../assets/images/description-image.jpg";
import "../assets/styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about" className="aboutUsContainer poppins-medium">
      <h1>About <span>Us</span></h1>
      <div className="descriptionContainer">
        <div className="descriptionImageContainer">
          <img src={descriptionImage} alt="cookies" />
        </div>
        <div className="description">
          <h2>Why Choose <span>Us?</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet repudiandae dignissimos similique numquam soluta unde expedita porro nemo cupiditate officiis dolore omnis laboriosam enim alias magnam, autem, mollitia ipsam facere assumenda perferendis quod. At ea laborum deserunt placeat explicabo, culpa et quasi qui maxime, libero accusantium? Ratione, impedit corporis!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;