import React from "react";
import "./style.css";
import Card from "./Card";
import Grid from "@mui/material/Grid";

export default function About2() {
  const card = [
    {
      id: 1,
      icon: "M",
      name: "Full Stack",
      text: "Full-stack development using Node.js along with React.js or Angular allows you to create dynamic and responsive web applications. Node.js, as the backend technology, enables you to build the server-side of the application, manage data, handle requests, ",
    },
    {
      id: 2,
      icon: "M",
      name: "Front-End",
      text: "Develop modern, responsive, and user-friendly interfaces with React.js Handle complex state management efficiently, ensuring seamless data flow and updates across the application. Implement routing and navigation within the application for a smooth user experience.",
    },
    {
      id: 3,
      icon: "M",
      name: "WordPress",
      text: " is a tool for building websites without needing advanced technical skills. It's like a toolbox with various options that let you create different types of websites, like blogs or online stores. You can pick designs and add features easily. It's popular because it's simple to use and has lots of help available online. ",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="h1 fw-5 ">What I do ?</div>
        <Grid container spacing={4} style={{ justifyContent: "stretch" }}>
          {card.map((item) => {
            return (
              <Grid
                item
                sx={12}
                md={4}
                key={item.id}
                className="move moveDelay "
                style={{ height: "100%" }}
              >
                <Card card={item} className="center" />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
