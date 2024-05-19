import React, { useEffect, useState } from "react";
import NextWeekCloth from "./NextWeekCloth";


/*
NextWeekGroup: Component that  map the clothes for next week
*/
function NextWeekGroup({ nextWeekClothes }) {
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    const fetchClothings = async (nextWeekClothes) => {
      let clothings = [];
      for (let i = 0; i < nextWeekClothes.length; i++) {
        let url = `http://jeremymark.ca:3000/clothing?id=${nextWeekClothes[i].clothingId}`;
        const response = await fetch(url);
        const data = await response.json();
        let x = data.data;
        clothings.push(x);
      }
      return clothings;
    };

    const fetchAll = async () => {
      let clothings = await fetchClothings(nextWeekClothes);
      setClothings(clothings);
    };

    fetchAll();
  }, [nextWeekClothes]);

  return (
    <div className="flex gap-5">
      {nextWeekClothes.map((item) => {
        let clothing = clothings.find(
          (clothing) => clothing.id === item.clothingId
        );
        if (!clothing) {
          return null;
        }
        return (
          <NextWeekCloth
            key={item.clothingId}
            matchPercent={item.matchPercent}
            imageurl={clothing.imageurl}
            name={clothing.name}
            colour={clothing.colour}
            size={clothing.size}
            material={clothing.material}
          />
        );
      })}
    </div>
  );
}

export default NextWeekGroup;
