import React, { useEffect, useState } from "react";
import WornItem from "./WornItem";

function WornGrid() {
  const [wornItems, setWornItems] = useState([]);
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    let url = `http://jeremymark.ca:3000/get_worn_clothes?username=Jeremy`;
    const fetchWorn = async () => {
      const response = await fetch(url);
      const data = await response.json();
      let x = data.data;
      return x;
    };

    const fetchClothings = async (x) => {
      url = `http://jeremymark.ca:3000/clothing?id=`;
      let clothings = [];
      for (let i = 0; i < x.length; i++) {
        const completeUrl = url + x[i].clothingId;
        const response = await fetch(completeUrl);
        const data = await response.json();
        let y = data.data;
        clothings.push(y);
      }
      return clothings;
    };

    const fetchAll = async () => {
      let wornItems = await fetchWorn();
      let clothings = await fetchClothings(wornItems);
      console.log('Worn Items: ' + wornItems);
      console.log('Clothings: ' + clothings);
      setWornItems(wornItems);
      setClothings(clothings);
    };

    fetchAll();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-y-14 gap-x-5">
      {clothings.map((item) => {
        /**
         * {
         *     "username": "Jeremy",
         *     "clothingId": 2,
         *     "weekWorn": "May Week 1",
         *     "rating": 4
         * },
         */
        return (
          <WornItem
            key={item.clothingId}
            clothingId={item.clothingId}
            owner={item.owner}
            name={item.name}
            colour={item.colour}
            size={item.size}
            material={item.material}
            imageurl={item.imageurl}
          />
        );
      })}
    </div>
  );
}

export default WornGrid;
