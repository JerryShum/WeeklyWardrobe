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
  clothingId,
  owner,
  name,
  colour,
  size,
  material,
  imageurl,
}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center object-contain">
      <img
        className=" outline rounded border-black object-contain"
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
        <Grid item xs={8}>
          <Item>
            <span className="font-semibold ">Colour: {colour}</span>
          </Item>
        </Grid>
          <Grid item xs={4}>
            <Item>
              <span className="font-semibold">Name: {name}</span>
            </Item>
          </Grid>
        <Grid item xs={4}>
          <Item>
            <span className="font-semibold">Owner: {owner}</span>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <span className="font-semibold">Size: {size}</span>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <span className="font-semibold">Material: {material}</span>
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
