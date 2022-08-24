// import React from 'react';
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import ImgPortfolio1 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-26-59.044Z-tempela-html-css.png";
import ImgPortfolio2 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-20-25.938Z-Amazon.png";
import ImgPortfolio3 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-25-24.530Z-fast-ecommerce.png";
import ImgPortfolio4 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-25-03.584Z-dashboard-amazon-netlify-app.png";
import ImgPortfolio5 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-23-35.810Z-bootstrap.png";
import ImgPortfolio6 from "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-23-26.286Z-amazon-apies-herokuapp.png";

export default function ContentPortfolio() {
  return (
    <ImageList cols={1} gap={1}>
      <Grid container spacing={4}>
        {itemData.map((item) => (
          <Grid item container sx={12} sm={6} md={4} className="move" key={Math.random()}>
            <a href={item.url} className="img-portfolio ">
              <ImageListItem key={item.img} className="">
                <img src={item.img} alt={item.title} loading="lazy" />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      {/* <InfoIcon /> */}
                    </IconButton>
                  }
                />
              </ImageListItem>
            </a>
          </Grid>
        ))}
      </Grid>
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-26-59.044Z-tempela-html-css.png',
    title: "html css",
    url: "https://our-studio.herokuapp.com/",
  },
  {
    img: "https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-20-25.938Z-Amazon.png",
    title: "Angular",
    url: "https://amazon-2021.netlify.app/Home",
  },
  {
    img: 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-25-24.530Z-fast-ecommerce.png',
    title: "wordpress",
    url: "https://dev-fast-ecommerce.pantheonsite.io/",
  },
  {
    img: 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-25-03.584Z-dashboard-amazon-netlify-app.png',
    title: "React js",
    url: "https://dashboard-amazon.netlify.app/",
  },
  {
    img: 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-23-35.810Z-bootstrap.png',
    title: "Bootstrap & cache",
    url: "https://template-cv.netlify.app/",
  },
  {
    img: 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T11-23-26.286Z-amazon-apies-herokuapp.png',
    title: "node js API",
    url: "http://amazon-apies.herokuapp.com/",
  },
];
