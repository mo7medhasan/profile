import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Grid from "@mui/material/Grid";
import "./style.css";
export default function Footer() {
  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sx={3}>
          <Grid container sx={12} spacing={1}>
            <Grid item sx={2}>
              {" "}
              <a href="https://web.facebook.com/profile.php?id=100001450424106">
                <FacebookOutlinedIcon className="Footer-Icons" />
              </a>
            </Grid>
            <Grid item sx={2}>
              <a href="https://twitter.com/Mo7med_hasan">
                <TwitterIcon className="Footer-Icons" />
              </a>
            </Grid>
            <Grid item sx={2}>
              {" "}
              <a href="https://www.linkedin.com/in/mohamed-hassan-43a34417a">
                <LinkedInIcon className="Footer-Icons" />
              </a>
            </Grid>
            <Grid item sx={2}>
              <a href="https://github.com/mo7medhasan">
                <GitHubIcon className="Footer-Icons" />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={3} className="Footer-Icons">
          © 2022 copyright Mo7med all right reserved
        </Grid>
      </Grid>
    </div>
  );
}
