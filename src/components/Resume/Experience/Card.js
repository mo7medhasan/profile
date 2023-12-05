import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import "../Style.css"




export default function BasicCard({ card }) {

    return (
        <Card sx={{ width: "100%", backgroundColor: "#F7F7FF" }}> <Grid container spacing={4} >
            <Grid item sx={12} md={4} >
                <div className='styleBorderRight' >
                    <CardHeader title={card.name}
                   


                    />
                    <CardContent>
                     
                        <p>
                            {card.time}</p>
                    </CardContent>
                    <div className='btn-time'>
                        Full Time
                    </div>
                </div>

            </Grid> <Grid item sx={12} md={8}>
            <CardHeader title={card.NameCompany}/>
                <CardContent>
                    {card.text}


                </CardContent>
            </Grid></Grid>
        </Card>
    );
}
