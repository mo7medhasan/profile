import React from 'react';
import { Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Bar from './Bar';

export default function Education() {
    const Education=[{id:1,time:"7/2021-12/2021",certificate:"Full stack (MEA/EN)",college:"Information Technology Invstitute"},
    {id:2,time:"4/2021-7/2021",certificate:"Software Engineering",college:"Information Technology Institute"},
    {id:3,time:" 2015 - 2019 ",certificate:"Bsc. in Computer Science",college:"New Cairo Academy"}, 
]



    return (<div>
        <div className='h1 fw-5 move'>
            Education & Skills
        </div>
        <Grid container spacing={4}>
            <Grid item container sx={12} sm={4}  >
                <div className='education move'>
                    {Education.map(item =>(
                    <div className='edu' key={item.id}>
                        <div className='time'>
                           {item.time}
                        </div>
                        <div className='title'>
                           
                               {item.certificate}
                           

                        </div>
                        <div className='college'>
                           {item.college}
                        </div>
                    </div>))}
                </div>
            </Grid>
            <Grid item container sx={12} sm={8} >
                <Bar />  


            </Grid>
        </Grid>
    </div>)
}
