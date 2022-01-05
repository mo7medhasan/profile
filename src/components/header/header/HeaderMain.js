import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { margin } from '@mui/system';
import mo7med from '../../../assets/mo7med.jpeg'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
height:"auto",margin:'80px auto auto',background:'none',
color:"white"
  ,
}));


export default function FullWidthGrid() {
 
 return (
    <div sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Item>content to header</Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
              <img src={mo7med} alt='image to profile mo7med'  width={'100%'} />
          </Item>
        </Grid>
      
      </Grid>
    </div>
  );
}