import React from "react";
import Main from "../components/main/Main";

import Sidebar from "../components/siderbar/Sidebar";
import "./style.css";
import "./portfolio.scss";

export default function Home() {
    const togglerMenu=()=>{
       document.querySelector('.toggler-menu>div').classList.toggle("active");
    document.querySelector('.sidebarStyle').classList.toggle("sidebarStyle-active");

    }
  return (
    <>
      <aside className="sidebarStyle">
        <Sidebar />
      </aside>
      <main className="mainStyle">
        <Main />
        <div className="mob-header">
          <button className="toggler-menu" style={{cursor: "none"}} onClick={togglerMenu} >
            <div className="">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </main>
    </>
  );
}
