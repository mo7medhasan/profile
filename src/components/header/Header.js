import React from "react";
import "./header/style.css";
import FullWidthGrid from "./header/HeaderMain";
// import PALESTINE from 'src/assets/palestine-flag.png'
export default function Header() {
  return (
    <header style={{ position: "static", paddingTop: "2.5rem" }}>
      <nav className="navbar">
        {" "}
        <div className="block pr-10">
          <img
            src={"https://flagemoji.net/img/flags/palestine-flag.png"}
            alt={"palestine-flag"}
            width={"50px"}
            height={"auto"}
            style={{ padding: "0px 10px" }}
            loading="lazy"
          />
          STAND WITH PALESTINE
          <img
            src={"https://flagemoji.net/img/flags/palestine-flag.png"}
            alt={"palestine-flag"}
            width={"50px"}
            height={"auto"}
            style={{ padding: "0px 10px" }}
            loading="lazy"
          />
        </div>
        <div className="navbar-content">
          <a href="tel:+201550003860"> +20 155 000 3860</a>
        </div>
        <div className="navbar-content">
          <a href="mailto:mo7med.hasan5@gmail.com"> mo7med.hasan5@gmail.com</a>
        </div>
      </nav>
      <section className="nav-down">
        <FullWidthGrid />
      </section>
    </header>
  );
}
