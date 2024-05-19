import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


/* Slider Component */
function valuetext(value) {
  return `${value}°C`;
}

export default function WeekSlider({ setNextWeekClothes }) {
  const [threshold, setThreshold] = useState(30);
  

  useEffect(() => {
    const fetchNextWeekClothes = async () => {
      let url = `http://jeremymark.ca:3000/get_next_week_clothes?username=Jeremy`;
      const response = await fetch(url);
      const data = await response.json();
      let x = data.data;
      return x;
    };

    const fetchAll = async () => {
      let nextWeekClothes = await fetchNextWeekClothes();
      setNextWeekClothes(nextWeekClothes);
    };

    fetchAll();
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        onChange={(e, value) => {
          setThreshold(value);
          const url = `http://jeremymark.ca:3000/reevaluate_next_week_clothes?username=Jeremy&threshold=${value}`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              setNextWeekClothes(data.data);
            });
        }}
        valueLabelDisplay="auto"
        shiftStep={5}
        value={threshold}
        step={5}
        marks={true}
        min={0}
        max={100}
        color="black"
      />
    </Box>
  );
}
