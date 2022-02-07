// import React from 'react';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImgPortfolio1 from '../../../assets/projects/tempela-html-css.png'
import ImgPortfolio2 from '../../../assets/projects/Amazon.png'
import ImgPortfolio3 from '../../../assets/projects/fast-ecommerce.png'
import ImgPortfolio4 from '../../../assets/projects/dashboard-amazon-netlify-app.png'
import ImgPortfolio5 from '../../../assets/projects/bootstrap.png'
import ImgPortfolio6 from '../../../assets/projects/amazon-apies-herokuapp.png'





export default function ContentPortfolio() {

  return (
    <ImageList cols={1} gap={1} >
      <Grid container spacing={4}>

        {itemData.map((item) => (<Grid item container sx={12} sm={6} md={4}  >
          <a href='' className='img-portfolio'>
            <ImageListItem key={item.img} className=''>
              <img
                src={item.img}
            
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}

                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </ImageListItem>
          </a>
          </Grid>))}
          </Grid>
    </ImageList>
  );
}

const itemData = [
  {
    img:ImgPortfolio1,
    title: 'html css',
  
  },
  {
    img:ImgPortfolio2,
    title: 'Angular',
   
  },
  {
    img: ImgPortfolio3,
    title: 'wordpress',
  
  },{
    img: ImgPortfolio4,
    title: 'React js',
  
  },{
    img: ImgPortfolio5,
    title: 'Bootstrap',
  
  }
  ,{
    img: ImgPortfolio6,
    title: 'node js API',
  
  },
];
