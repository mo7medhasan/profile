// import React from 'react';
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImgPortfolio1 from "../../../assets/projects/tempela-html-css.png";
import ImgPortfolio2 from "../../../assets/projects/Amazon.png";
import ImgPortfolio3 from "../../../assets/projects/fast-ecommerce.png";
import ImgPortfolio4 from "../../../assets/projects/dashboard-amazon-netlify-app.png";
import ImgPortfolio5 from "../../../assets/projects/bootstrap.png";
import ImgPortfolio6 from "../../../assets/projects/amazon-apies-herokuapp.png";

export default function ContentPortfolio() {
  return (
    <ImageList cols={1} gap={1}>
      <Grid container spacing={4}>
        {itemData.map((item) => (
          <Grid item container sx={12} sm={6} md={4}>
            <a href={item.url} className="img-portfolio">
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
    img: ImgPortfolio1,
    title: "html css",
    url: "https://our-studio.herokuapp.com/",
  },
  {
    img: ImgPortfolio2,
    title: "Angular",
    url: "https://amazon-2021.netlify.app/Home",
  },
  {
    img: ImgPortfolio3,
    title: "wordpress",
    url: "https://dev-fast-ecommerce.pantheonsite.io/",
  },
  {
    img: ImgPortfolio4,
    title: "React js",
    url: "https://dashboard-amazon.netlify.app/",
  },
  {
    img: ImgPortfolio5,
    title: "Bootstrap & cache",
    url: "https://template-cv.netlify.app/",
  },
  {
    img: ImgPortfolio6,
    title: "node js API",
    url: "http://amazon-apies.herokuapp.com/",
  },
];
