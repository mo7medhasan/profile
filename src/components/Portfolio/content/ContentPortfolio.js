// import React from 'react';
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import ImgPortfolio1 from "src/assets/projects/chat.gif";
import ImgPortfolio2 from "src/assets/projects/mytreety.png";
import ImgPortfolio3 from "src/assets/projects/timesofEgypt.png";
import ImgPortfolio4 from "src/assets/projects/dashboard-amazon-netlify-app.png";
import ImgPortfolio5 from "src/assets/projects/bootstrap.png";
import ImgPortfolio6 from "src/assets/projects/signup.jpg";

const itemData = [
  {
    img:ImgPortfolio1,
    title: "Next.js",
    url: "https://mo-chat-with-anyone.vercel.app/",
  },
  {
    img: ImgPortfolio2,
    title: "Next.js",
    url: "https://mytreety.com",
  },
  {
    img: ImgPortfolio3,
    title: "wordpress",
    url: "https://timesofegypt.com/",
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
    title: "React js",
    url: "https://signup-morkotty.netlify.app/",
  },
];
export default function ContentPortfolio() {
  return (
    <ImageList cols={1} gap={1}>
      <Grid container spacing={4}>
        {itemData.map((item) => (
          <Grid item container sx={12} sm={6} md={4} className="move" key={Math.random()}>
            <a href={item.url} className="img-portfolio  ">
              <ImageListItem key={item.img} className="">
              <div className=" container-img">
                <img src={item.img} alt={item.title} loading="lazy" width={400} height={250}  className="" /></div>
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

