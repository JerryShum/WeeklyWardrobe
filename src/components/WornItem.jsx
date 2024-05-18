import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicRating from "./RatingButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const WornItem = ({
  clothID,
  owner,
  name,
  colour,
  style,
  size,
  material,
  imageurl,
}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center object-contain">
      <img
        className=" outline rounded border-black object-contain"
        src="https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/465185/item/cagoods_07_465185.jpg?width=750"
        alt="image of clothing"
      />
      <Grid
        sx={{
          padding: 0,
        }}
        container
        spacing={2}
      >
        <Grid item xs={8}>
          <Item>
            <span className="font-semibold ">ID: {clothID}</span>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <span className="font-semibold">Rating: {owner}</span>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <span className="font-semibold">Owner: {owner}</span>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <span className="font-semibold">When you wore it : {owner}</span>
          </Item>
        </Grid>
      </Grid>
      <button className=" w-full outline border-black rounded font-semibold">
        <BasicRating />
      </button>
    </div>
  );
};

export default WornItem;
