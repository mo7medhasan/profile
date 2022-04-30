import * as React from "react";

import Grid from "@mui/material/Grid";

import "./style.css";
import mo7med from "../../../assets/mohamed person image png.webp";

export default function FullWidthGrid() {
  const OpenCV = () =>
    window.open(
      "https://drive.google.com/file/d/1RupU7CmnkIqdJ9bEne1Xp1YOo0k0aF7c/view?usp=sharing"
    );
  const Alt = ";image to profile mo7med in header";

  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={12} className="content-header">
          <div className="content">
            <div className="left-bg">
              <div className="col  -txt">
                <p className=" text-small">Hello, My name is</p>
              </div>

              <div className="col -txt ">
                <h1 className="block-txt ">
                  <span> Mohamed</span>{" "}
                  <span>
                    <font> Hassan </font>
                  </span>{" "}
                </h1>
              </div>
              <div className="col  -txt silder-txt">
                <div className="wrapper ">
                  <ul className="dynamic-txts">
                    <li>
                      <span>Web Developer</span>
                    </li>
                    <li>
                      <span>Full-Stack</span>
                    </li>
                    <li>
                      <span>MEA/RN</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-header">
                <p className="col col-text">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <p className="btn-header ">
                  <button className="btn" onClick={OpenCV}>
                    Download CV
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="img-profile">
          <div>
            <img src={mo7med} alt={Alt} className="img-profile-content" loading="lazy" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
