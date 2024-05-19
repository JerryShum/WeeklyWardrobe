import React from "react";

function ShopCard(imageURL, itemName, brandName, price) {
  return (
    <div className="flex flex-col p-3 rounded-xl overflow-hidden">
      <img
        src="https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/464932/item/cagoods_03_464932.jpg?width=750"
        alt="Shop Image"
        className=" object-fill rounded-xl "
      />
      <div className="flex flex-col">
        <p className="text-xl font-bold text-black">Item Name</p>
        <p className="text-lg font-semibold text-gray-600">Brand Name</p>
        <div className=" flex flex-col text-md font-semibold text-blue-800">
          <p className="line-through text-red-800">OG Price 50$</p>
          <p>OUR PRICE 30$</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
