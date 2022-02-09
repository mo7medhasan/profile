import React from 'react'
import './style.css'
import Card from './Card'
import Grid from '@mui/material/Grid';
  
export default function About2() {
  const  card = [ {id:1, icon:"M",name:"Full Stack",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id:2, icon:"M",name:"WordPress",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id:3, icon:"M",name:"Seo",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];

    return (
        <><div className='container'>
            <div className='h1 fw-5 '>
                What I do ?
            </div>
            <Grid container spacing={4}>
                {card.map(item =>{return(
                    <Grid item sx={12} md={4} key={item.id} className="move moveDelay " >
                    <Card  card={item} className="center"/>
                    
                </Grid>
                )})}
            </Grid>
        </div>
        </>
    )
}
