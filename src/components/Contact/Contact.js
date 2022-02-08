import React from "react";
import "./style.css";
import hr from "../../assets/line zigzag.png";
import {
  Grid, TextField,
  Button,
} from "@mui/material";

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';



export default function Contact() {
  
  return (
    <div style={{ backgroundColor: "#F7F7FF" }}>
  
      <img src={hr} alt="hr line zigzag png" className="img-hr-line-zigzag" />
      <div className="container">
        <Grid container spacing={4}>
          <Grid item container sx={12} md={5}>
            <div className="contact-info">
              <h4> What’ s your story ? Get in touch </h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
               <MapOutlinedIcon fontSize="large" className="icon" />   
                  <span className="media-body">Qena || Nasr City , Egypt</span>
                </li>
                <li className="media">
             <a href="mailto:mo7med.hasan5@gmail.com"> <DraftsOutlinedIcon className="icon" />
                  <span className="media-body">
                   
                  
                      mo7med.hasan5@gmail.com
                    
                  </span></a>
                </li>
                <li className="media">    <a href="tel:+201550003860">
              <PhoneIphoneOutlinedIcon className="icon"/>
                  <span className="media-body">
                 +20 155 000 3860 
                  </span></a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item container sx={12} md={7}>
            <>
              {" "}
              {/* <div className="contact-form">
              <h4> Say Something </h4>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control theme-light"
                        placeholder="Full name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control theme-light"
                        placeholder="Email address"
                        name="email"
                      /><FormControl>
                      <InputLabel htmlFor="my-input">Email address</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control theme-light"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <textarea
                        rows="4"
                        className="form-control theme-light"
                        placeholder="Type comment"
                        name="comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="btn-bar">
                      <button
                        className="px-btn px-btn-white"
                        style={{ cursor: " none" }}
                      >
                        
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div> */}
            </>
            <h3> Say Something </h3>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    className="textField"
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    className="textField"
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="textField"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="textField"
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="textField"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="warning" >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className="google-map">
              <iframe
                loading="lazy"
                className="embed-responsive-item"
                title="location title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15614491.766315812!2d20.923033645974357!3d31.655107032711477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144eb713cdff7243%3A0xde1579ce56fe6177!2sInformation%20Technology%20Institute%20-%20ITI%20Qena!5e0!3m2!1sen!2seg!4v1644334759021!5m2!1sen!2seg"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
