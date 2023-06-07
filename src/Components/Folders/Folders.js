import React, { useState } from "react";
import Draggable from 'react-draggable';
import './Folders.css';
import folder1 from '../../Assets/folder1.png';
import resumeIcon from '../../Assets/resume_icon.png';
import Orenda from "../Folders/Orenda/Orenda";
import Jet from "../Folders/Jet/Jet";

const PDF_FILE_URL = "http://localhost:3000/CV.pdf";

function ExpFolder() {
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

  const handleopen=()=>{
    setHidden3(false)
  }

  const handleopen2=()=>{
    setHidden4(false)
  }

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handleopen3= () => {downloadFileAtURL(PDF_FILE_URL)}

  return (
      <div>
        <div className="Folder-inter-container" >
          <div className="Folder-inter-container-item1" onClick={handleopen} >
            <img src={folder1} alt="google"   className="folder-icon"/>
            <p className="desktop-text">Orenda</p>    
          </div>
          <div  className="Folder-inter-container-item1" onClick={handleopen2}>           
            <img src={folder1} alt="google"   className="folder-icon"/> 
            <p className="desktop-text">JET</p>       
          </div>
          <div style={{position: "absolute", top: "70%", left: "45%", width: "60px", cursor: "pointer"}} onClick={handleopen3} className="download-icon">           
            <img src={resumeIcon} alt="pdf" className="folder-icon"/> 
            <p className="desktop-text">CV</p>       
          </div>          
        </div>
        <Orenda hidden={hidden3} onChangeHidden2={setHidden3} />
        <Jet hidden={hidden4} onChangeHidden3={setHidden4} />
      </div>
   );
}
export default ExpFolder;
