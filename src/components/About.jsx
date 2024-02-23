import { IMG_CLOUD_URL } from "../Constants";
const About = () => {
  return (
    <div className="flex-column">
      <h1>
        Welcome to <span style={{ color: "orange" }}>QuickBite</span>
      </h1>
      <img src={IMG_CLOUD_URL + "ig1ah7db0aex0ytysesj"} alt="" />
      <p>Enjoy tasty and healthy meal delivered at your door step</p>
    </div>
  );
};

export default About;
