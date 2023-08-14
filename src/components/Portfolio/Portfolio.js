import React from "react";
import ContentPortfolio from "./content/ContentPortfolio";
import Portfolios from "./Portfolios";
import "./style.css";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "#F7F7FF" }} id="Portfolio">
      <div className="container">
        <div className="h1 fw-5 move">My Portfolio</div>
        <ContentPortfolio />
        {/* <Portfolios/> */}
      </div>
    </div>
  );
}
