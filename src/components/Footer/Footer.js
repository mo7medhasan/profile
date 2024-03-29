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
          <Grid sx={12}  container
  direction="row"
  justifyContent="center"
  alignItems="center" spacing={2} >
            <Grid item sx={2}>
              
              <a href="https://www.facebook.com/Mo7medHasan5">
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
              <a href="https://www.linkedin.com/in/mo7medhasan/">
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
