import React, { useState } from "react";
import Draggable from 'react-draggable';
import './Folders.css';
import folder1 from '../../Assets/folder1.png'
import Orenda from "../Folders/Orenda/Orenda";
import Jet from "../Folders/Jet/Jet";




function ExpFolder() {
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

  const handleopen=()=>{
    setHidden3(false)
  }
  const handleopen2=()=>{
    setHidden4(false)
  }



      
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
        </div>
        <Orenda hidden={hidden3} onChangeHidden2={setHidden3} />
        <Jet hidden={hidden4} onChangeHidden3={setHidden4} />
      </div>
   );
}
export default ExpFolder;
