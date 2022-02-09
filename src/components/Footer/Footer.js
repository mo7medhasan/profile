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
              <FacebookOutlinedIcon className="Footer-Icons"/>
            </Grid>
            <Grid item sx={2}>
              <TwitterIcon className="Footer-Icons"/>
            </Grid>
            <Grid item sx={2}>
              <LinkedInIcon className="Footer-Icons"/>
            </Grid>
            <Grid item sx={2}>
              <GitHubIcon className="Footer-Icons"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={3}  className="Footer-Icons">
        © 2022 copyright Mo7med all right reserved
        </Grid>
      </Grid>
    </div>
  );
}
