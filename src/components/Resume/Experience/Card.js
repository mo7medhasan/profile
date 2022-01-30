import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import "../Style.css"

import Avatar from '@mui/material/Avatar';


export default function BasicCard({ card }) {

    return (
        <Card sx={{ width: "100%", backgroundColor: "#F7F7FF" }}> <Grid container spacing={4} >
            <Grid item sx={12} sm={4} >
                <div style={{ borderRight: "1px solid #bbb", margin: "20px auto" }}>
                    <CardHeader title={card.name}
                   


                    />
                    <CardContent>
                        <i>
                        At the company's headquarters
                        </i>
                        <p>
                            {card.time}</p>
                    </CardContent>
                    <div className='btn-time'>
                        Full Time
                    </div>
                </div>

            </Grid> <Grid item sx={12} sm={8}>
            <CardHeader title={card.NameCompany}/>
                <CardContent>
                    {card.text}


                </CardContent>
            </Grid></Grid>
        </Card>
    );
}
