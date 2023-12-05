import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card'
export default function Experience() {

    const card = [       
         { id: 1, name: "Front-End Developer", NameCompany: "Mytreety",time:"May  2022 - Ost 2023" ,text: "As a Web Developer specializing in Front-End (Next JS), my role involves crafting the digital interface for an innovative platform called Mytreety. This platform revolutionizes the way users shop for their preferred products by integrating an Environmental Impact feature. Through the Mytreety Sustainability Ranking, users can explore and assess the environmental footprint of their favorite products while shopping. Visit https://www.mytreety.com/ to experience this groundbreaking initiative firsthand." },

         { id: 12, name: "WordPress", NameCompany: "EgyptWithHedy & TimesOfEgypt ",time:"Feb  2022 - Jul 2022" ,text: "I work as a Web Developer specializing in WordPress for Hedy GCT Tours, based in Egypt. I'm involved in managing and developing various websites, including egyptwithhedy.com, gct.agency, and others related to Egypt and October 6 city. Additionally, I contribute to TimesofEgypt, an online newspape" },
        { id: 11, name: "Full Stack", NameCompany: "ITI & Saif Study",time:"Jul  2021 - Feb 2022" ,text: "Full-stack development using Node.js along with React.js and Angular allows you to create dynamic and responsive web applications. Node.js, as the backend technology, enables you to build the server-side of the application, manage data, handle requests, " },
        { id: 13, name: "technical support & Data Entry", NameCompany: "the office accountant",time:"Jan  2021 - Apr 2021", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
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
