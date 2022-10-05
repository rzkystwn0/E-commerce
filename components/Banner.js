import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: "none", background: "red" }} />;
}

function Banner() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  
  return (
    <div className="container px-2 mx-auto">
      <div className="w-12/12">
        <Slider {...settings}>
          <a href="#">
            <img src="banner1.png" alt="" className="w-full sm:h-[350px] h-[140px] rounded-xl" />
          </a>
          <a href="#">
            <img src="banner2.png" alt="" className="w-full sm:h-[350px] h-[140px] rounded-xl" />
          </a>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
