import React from "react";
import ShopCard from "./ShopCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "brightness(0%)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", filter: "brightness(0%)" }}
      onClick={onClick}
    />
  );
}
function ShopGroup(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" bg-blue-200 rounded-xl p-10">
      <p className="mb-3 font-bold text-xl">Style Category: {props.Category}</p>
      <Slider {...settings}>
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </Slider>
    </div>
  );
}

export default ShopGroup;
