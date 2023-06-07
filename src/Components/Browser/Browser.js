import React, { useState, useEffect } from "react";
import './Browser.css';
import title from '../../Assets/title.png'
import pdf from '../../Assets/pdf.png'
import browser from '../../Assets/browser.png'
import Draggable from 'react-draggable';

function Browser() {
  const [hidden, setHidden] = useState(false);

  const handleclose=()=>{
      setHidden(true)
  }
  const handleopen=()=>{
    setHidden(false)
}
  const handleZ=(event)=>{ 
    let z = localStorage.getItem('zindex');
    z++;
    document.getElementById("browser-element").setAttribute('style', `z-index: ${z}`);
    localStorage.setItem('zindex', z)
  }


    return (
      <div className="">
        <div className="">
          <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
            <img src={browser} alt="google"   className="desktop-img"/>                
          </div>
        </div>
      <div className="resume-page-container" hidden={hidden} id="browser-element" onClick={(event)=>handleZ(event)}>
      <Draggable handle="#handle" >
      <div className="res-nav-container1" >
          <div className="res-nav-container2" >
            <span id="handle" className="res-nav-handle">
              <div className="res-nav-back1-top">
                <div className="res-nav-back1-top-title">
                  <img src={pdf} alt="pdg" className="res-nav-back1-top-title-img" />
                  <p className="res-nav-back1-top-text">CurriculumVitae.pdf</p>
                </div>
              </div>
              <div className='browser-buttons'>
                <div className='browser-buttons-red' onClick={handleclose}></div>
                <div className='browser-buttons-yellow' onClick={handleclose}></div>
                <div className='browser-buttons-green'  onClick={handleclose}></div>
              </div>
            </span>
            <div className="res-nav-back1-bottom">
              <div className="res-nav-back2">
                <div className="res-nav-back2-top">
                  <div className="res-nav-back2-top-text">https://www.soniagrar.com</div>
                </div>
                <div className="res-nav-back2-bottom">
                  <div className="res-nav-back2-bottom-title"><img src={title} alt="title" className="res-nav-back2-bottom-title-img" /></div>
                  <div className="res-nav-back2-bottom-text">Etudiante en cycle d'ingénieur en informatique</div>
                  <div className="res-nav-back2-bottom-paragraph">Je suis travailleuse, débrouillarde et dévouée avec un large éventail de compétences fortifiées par l’engagement. Prête à utiliser mes solides capacités organisationnelles, ma détermination et ma passion pour faire avancer ma mission. En outre, apportant une attitude positive et la volonté de continuer à apprendre de nouvelles compétences et d’améliorer ce que j’ai déjà acquis.</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Draggable>
      </div>
      </div>

    );
};


export default Browser;
