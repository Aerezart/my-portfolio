import Slider from "react-slick";
import "./Slider.css";
import art1 from "../../images/art1.jpg";
import art2 from "../../images/art2.png";
import art3 from "../../images/art3.jpg";

const ArtSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider art">
      <div>
        <img src={art1} alt="" />
      </div>
      <div>
        <img src={art2} alt="" />
      </div>
      <div>
        <img src={art3} alt="" />
      </div>
    </Slider>
  );
};

export default ArtSlider;
