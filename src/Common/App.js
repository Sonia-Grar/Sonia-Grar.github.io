import React, { useEffect, useState } from "react";
import './App.css';
import Browser from "../Components/Browser/Browser";
import Picture from "../Components/Picture/Picture";
import Design from "../Components/Design/Design";
import Code from "../Components/Code/Code";
import Education from "../Components/Education/Education";
import ExpFolder from "../Components/ExpFolder/ExpFolder";
import BenExp from "../Components/BenExp/BenExp";
import Music from "../Components/Music/Music";
import Folders from "../Components/Folders/Folders";
import Download from "../Components/Download/Download";




export default function App() {
  
  
  useEffect(() => {
    localStorage.setItem("zindex", 50);
  });

  return (
    <div className="Menu-page-container">
      <div className="Menu-page-container-top"> 
      <div  className="Menu-page-container-top-item1"></div>
      <Folders />
      </div>
      <div  className="Menu-page-container-bottom">
        <div  className="Menu-inter-container">
        <Browser />
        <Picture />
        <Code />
        <Design />
        <ExpFolder />
        <Education />
        <BenExp />
        <Music />
        </div>
      </div>
      
    </div>
  );
}

