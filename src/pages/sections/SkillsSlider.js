import Slider from "react-slick";
import "./Slider.css";

const SkillsSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider">
      <div>
        <h3 className="comment">//Programming</h3>
        <p>HTML, CSS, JS, React, PHP, Wordpress, Woocommerce</p>
      </div>
      <div>
        <h3 className="comment">//Design & Art</h3>
        <p>Blender3D, Adobe Photoshop, Adobe Illustrator, Substance Painter</p>
      </div>
      <div>
        <h3 className="comment">//Languages</h3>
        <div>
          <p>
            English<span>(</span>
            <span className="string">'en_EN'</span>, <span className="string">'B2'</span><span>)</span>,
          </p>
          <p>
            Polish<span>(</span>
            <span className="string">'pl_PL'</span>, <span className="string">'B2'</span><span>)</span>,
          </p>
          <p>
            Russian<span>(</span>
            <span className="string">'ru_RU'</span>, <span className="string">'Native'</span><span>)</span>
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default SkillsSlider;
