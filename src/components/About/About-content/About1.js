import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid";
import mo7medAbout from "src/assets/mohasan1.png";
import "./style.css";

export default function About1() {
  const Alt = "image zoon to profile ";
  return (
    <div className="content-about">
      <Grid container  spacing={1} className="content-about">
        <Grid item sx={12} md={5} className="content-about1">
          <div className="left-about move">
            <div className="for-img-about">
              <div className="img-about">
                <img
                  src={mo7medAbout}
                  className="img-about-content"
                  alt={Alt}
                />
              </div>
              <a
                href="https://www.facebook.com/Mo7medHasan5"
                className="icon-img-about-content"
              >
                <FacebookOutlinedIcon fontSize="large" id="facebook" />
              </a>
              <a
                href="https://github.com/mo7medhasan"
                className="icon-img-about-content"
              >
                <GitHubIcon fontSize="large" id="gitHub" />
              </a>
              <a
                href="https://twitter.com/Mo7med_hasan"
                className="icon-img-about-content"
              >
                <TwitterIcon fontSize="large" id="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/mo7medhasan/"
                className="icon-img-about-content"
              >
                <LinkedInIcon fontSize="large" id="linkedin" />
              </a>
              <a
                href="mailto:mo7med.hasan5@gmail.com"
                className="icon-img-about-content"
              >
                <GoogleIcon fontSize="large" id="google" />
              </a>
            </div>
            <div className="left-about-text">
              <div className="h1">Mo7med hasan</div>
              <div>Web Developer</div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} md={7} className="content-header1">
          <div className="right-about move">
            <div className="h1 fw-5">Biography</div>
            <article className="p-about-text">
              I'm a Freelancer Front-end Developer with over 2 years of
              experience. I'm from Egypt. I code and create web elements for
              amazing people around the world. I like work with new people. New
              people new Experiences.
            </article>
           
            <article>
              <Grid container  spacing={2}>
                <Grid item sx={12} md={5} className="list-about">
                  <ul>
                    <li>
                      <span className="fw-span">Name </span>:{" "}
                      <span> Mohamed Hassan</span>
                    </li>
                    <li>
                      <span className="fw-span">Birthday</span>:{" "}
                      <span> 18th March 1995 </span>
                    </li>
                    <li>
                      <span className="fw-span">Age</span>:{" "}
                      <span>28 years </span>
                    </li>
                    <li>
                      <span className="fw-span">Address</span>:{" "}
                      <span>Egypt </span>
                    </li>
                  </ul>
                </Grid>
                <Grid item sx={12} md={7} className="list-about">
                  <ul>
                    <li>
                      <span className="fw-span">Phone</span>:{" "}
                      <span>[+20] 155 000 3860</span>
                    </li>
                    <li>
                      <span className="fw-span">Email</span>:
                      <span>
                        <a href="mailto:mo7med.hasan5@gmail.com">
                          mo7med.hasan5@gmail.com
                        </a>{" "}
                      </span>
                    </li>
                    <li>
                      <span className="fw-span">Freelance</span>:{" "}
                      <span>Available </span>
                    </li>
                    <li>
                      <span className="fw-span">Full Time </span>:{" "}
                      <span>Available </span>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </article>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
