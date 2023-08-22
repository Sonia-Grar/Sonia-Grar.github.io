import React, { useState } from "react";
import Draggable from 'react-draggable';
import './Folders.css';
import folder1 from '../../Assets/folder1.png';
import pdf from '../../Assets/pdf.png';
import Orenda from "../Folders/Orenda/Orenda";
import Jet from "../Folders/Jet/Jet";

const PDF_FILE_URL = "http://localhost:3000/CV.pdf";
const COVER_LETTER_PDF_FILE_URL = "http://localhost:3000/LM.pdf";

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

  const handleopen4= () => {downloadFileAtURL(COVER_LETTER_PDF_FILE_URL)}

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
          <div style={{position: "absolute", top: "68%", left: "48.5%", width: "45px", cursor: "pointer"}} onClick={handleopen3} className="download-icon">           
            <img src={pdf} alt="pdf" className="folder-icon"/> 
            <p className="desktop-text">CV.pdf</p>       
          </div>
          <div style={{position: "absolute", top: "68%", left: "40.5%", width: "45px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onClick={handleopen4} className="download-icon">           
            <img src={pdf} alt="pdf" className="folder-icon"/> 
            <p className="desktop-text" style={{paddingTop: "4px"}}>Lettre_de_motivation.pdf</p>       
          </div>        
        </div>
        <Orenda hidden={hidden3} onChangeHidden2={setHidden3} />
        <Jet hidden={hidden4} onChangeHidden3={setHidden4} />
      </div>
   );
}
export default ExpFolder;
