import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card'
export default function Experience() {

    const card = [
        { id: 1, name: "Full Stack", NameCompany: "ITI",time:"Jul  2021 - Dec 2021" ,text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, name: "Software Engineering", NameCompany: "ITI",time:"Apr  2021 - Jul 2021" ,text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, name: "technical support & Data Entry", NameCompany: "the office accountant",time:"Jan  2021 - Apr 2021", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
    ];




    return (
        <div >
            <div className='h1 fw-5 '>
                Experience
            </div>
            <Grid container spacing={4}>
                {card.map(item => {
                    return (
                        <Grid item sx={12} key={item.id} className="move"  >
                            <Card card={item} />

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
