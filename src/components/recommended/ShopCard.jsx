import React from "react";

/*
ShopCard: this component contains the layout of the recommended section
*/
function ShopCard({imageurl, name, brandName, price, percentMatch}) {
  return (
    <div className="flex flex-col p-3 rounded-xl overflow-hidden">
      <img
        src={imageurl}
        alt="Shop Image"
        className=" object-fill rounded-xl "
      />
      <div className="flex flex-col">
        <p className="text-xl font-bold text-black">{name}</p>
        <p className="text-lg font-semibold text-gray-600">{percentMatch}% Match</p>
        <div className=" flex flex-col text-md font-semibold text-blue-800">
          <p className="line-through text-red-800">{price.toFixed(2)}</p>
          <p>{(price * 0.9).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
