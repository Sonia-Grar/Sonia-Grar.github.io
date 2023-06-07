import React, { useState } from "react";
import Draggable from 'react-draggable';
import './ExpFolder.css';
import folder from '../../Assets/folder.png'
import pdf from '../../Assets/pdf.png'
import thumbnail1 from '../thumbnail1.jpg'
import ExpPro from "../ExpPro/ExpPro";
import ExpProVid from "../ExpProVid/ExpProVid";



function ExpFolder() {
    const [hidden, setHidden] = useState(false);
    const [hidden2, setHidden2] = useState(true);
    const [hidden5, setHidden5] = useState(true);

    const handleclose = () => {
        setHidden(true);
    }

    const handleopen = () => {
        setHidden(false);
    }

    const handleopenpdf = () => {
        setHidden2(false);
    }

    const handleopenvid= () => {
      setHidden5(false);
    }
  
    
  
    const handleZ=(event)=>{ 
        let z = localStorage.getItem('zindex');
        z++;
        document.getElementById("ExpFolder-element").setAttribute('style', `z-index: ${z}`);
        localStorage.setItem('zindex', z)
    }
      
  return (
    <div className="">
      <div className="">
        <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
          <img src={folder} alt="google"   className="desktop-img"/>                
        </div>
      </div>
      <div className="ExpFolder-page-container" hidden={hidden} id="ExpFolder-element" onClick={(event)=>handleZ(event)}>
        <Draggable  handle="#handle" >
            <div className="ExpFolder-inter-container1" >
              <div className="ExpFolder-inter-container2" id="ExpFolder-element1" >
                <div id="handle" className="ExpFolder-inter-back1-top">
                  <div className='ExpFolder-inter-buttons'>
                      <div className='ExpFolder-inter-buttons-red'  onClick={handleclose} ></div>
                      <div className='ExpFolder-inter-buttons-yellow' onClick={handleclose}></div>
                      <div className='ExpFolder-inter-buttons-green'onClick={handleclose}></div>
                  </div>
                  <p className="ExpFolder-inter-top-text" >Projets</p>
                </div>
                <div className="ExpFolder-inter-back1-bottom">
                  <div className="ExpFolder-inter-back1-item">
                    <div className="ExpFolder-thumbnail"  onClick={handleopenvid}>
                      <img src={thumbnail1} alt="google"  className="ExpFolder-thumbnail1-img"     />    
                      <p className="desktop-text">Projets</p>
                    </div>   
                    <div className="ExpFolder-thumbnail-pdf" onClick={handleopenpdf}>
                      <img src={pdf} alt="google"  className="ExpFolder-thumbnail1-img-pdf"  />     
                      <p className="desktop-text">Projets</p>
                    </div>             
                  </div>
                </div>
              </div>
            </div>
        </Draggable>
      </div>
      <div>
        <ExpPro hidden={hidden2} onChangeHidden={setHidden2} />
        <ExpProVid hidden={hidden5} onChangeHidden3={setHidden5} />
      </div>
    </div>
  )
}
export default ExpFolder;