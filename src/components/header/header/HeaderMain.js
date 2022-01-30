import * as React from 'react';

import Grid from '@mui/material/Grid';

import './style.css';
import mo7med from '../../../assets/mohamed person image png.png'



export default function FullWidthGrid() {

  return (
    <div  >
      <Grid container spacing={1}>
        <Grid  item md={6} xs={12} className='content-header'>
          <div  className="content">
            <div className="left-bg">



              <div className="col  -txt">
                <p className=" text-small">Hello, My name is</p>
              </div>

              <div className="col -txt ">
                <h1 className="block-txt "><span> Mohamed</span> <span>
                  <font > Hassan </font>
                </span> </h1>
              </div>
              <div className="col  -txt silder-txt">
                <p className="wrapper">
                  
                  <ul className="dynamic-txts">
                    <li><span>Web Developer</span></li>
                    <li><span>Full-Stack</span></li>
                    <li><span>MEA/RN</span></li>

                  </ul>
                </p>
              </div><div className='p-header'>
              <p className='col '>
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
              </p>
              <p className='btn-header '>
                <button className='btn'>
                  Download CV
                </button>
              </p>

              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} className='img-profile'>
          <div >
            <img src={mo7med} alt='image to profile mo7med in header' className='img-profile-content' />
          </div>
        </Grid>

      </Grid>
    </div>
  );
}