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
function ShopGroup({ brandName, products, percentMatch }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // log products.length
  console.log('products.length: ' + products.length);
  return (
    <div className=" bg-blue-200 rounded-xl p-10">
      <p className="mb-3 font-bold text-xl">Brand: {brandName}</p>
      <Slider {...settings}>
        {...products.map((product) => {
          console.log('product id: ' + product.productId);
          return (
            <ShopCard
              key={product.productId}
              imageurl={product.imageurl}
              name={product.name}
              brandName={product.brandName}
              price={product.price}
              percentMatch={percentMatch}
            />
            // <div>
            //   productId: {product.productId}
            //   {/* imageurl: {product.imageurl} */}
            //   {/* name: {product.name} */}
            // </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ShopGroup;
