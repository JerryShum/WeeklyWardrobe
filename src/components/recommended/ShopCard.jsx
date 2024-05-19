import React from "react";

function ShopCard(imageURL, itemName, brandName, price) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <img src={imageURL} alt="Shop Image" className="object-fit" />
      <div className="flex flex-col">
        <p className="text-xl font-bold text-black">Item Name</p>
        <p className="text-lg font-semibold text-gray-600">Brand Name</p>
        <div className=" flex flex-col text-lg font-semibold text-blue-800">
          <p>OG Price</p>
          <p>OUR PRICE</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
