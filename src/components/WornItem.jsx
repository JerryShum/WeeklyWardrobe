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
  key,
  weekworn,
  owner,
  name,
  colour,
  size,
  material,
  imageurl,
}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center object-contain h-full">
      <img
        className="rounded object-cover h-1/2 w-3/4"
        src={imageurl}
        alt="image of clothing"
      />
      <Grid
        sx={{
          padding: 0,
        }}
        container
        spacing={2}
      >
        <Grid item xs={4}>
          <Item className="h-full ">
            <span className="font-semibold h-full flex items-center text-center justify-center">
              Colour: {colour}
            </span>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item className="h-full">
            <span className="font-semibold h-full flex items-center text-center justify-center">
              Item: {name}
            </span>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="h-full">
            <span className="font-semibold h-full flex items-center text-center justify-center">
              Owner: {owner}
            </span>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="h-full">
            <span className="font-semibold h-full flex items-center text-center justify-center">
              Size: {size}
            </span>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="h-full">
            <span className="font-semibold h-full flex items-center text-center justify-center">
              Material: {material}
            </span>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="h-full">
            <span className="font-semibold font-semibold h-full flex items-center text-center justify-center">
              When you wore it : {weekworn}
            </span>
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
