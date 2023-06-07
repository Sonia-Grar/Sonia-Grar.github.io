import React, { useState } from "react";
import Draggable from 'react-draggable';
import './ExpPro.css';

function ExpPro({ hidden, onChangeHidden }) {

    const handleclose2 = () => {
      onChangeHidden(true);
    }

    const handleZ=(event)=>{ 
      let z = localStorage.getItem('zindex');
      z++;
      //document.getElementById("exppro-element").setAttribute('style', `z-index: ${z}`);
      document.getElementsByClassName("ExpPro-inter-container")[0].setAttribute('style', `z-index: ${z}`);
      localStorage.setItem('zindex', z)
  }

  return (
    <div className="">
      <div className="ExpPro-page-container" hidden={hidden} id="exppro-element" onClick={(event)=>handleZ(event)} >
        <Draggable  handle="#handle" >
        <div className="ExpPro-inter-container" style={{zIndex: "80"}}>
            <div id="handle" className="ExpPro-inter-back1-top">
              <div className='ExpPro-inter-buttons'>
                <div className='ExpPro-inter-buttons-red'   onClick={handleclose2} ></div>
                <div className='ExpPro-inter-buttons-yellow' onClick={handleclose2}></div>
                <div className='ExpPro-inter-buttons-green'onClick={handleclose2}></div>
              </div>
              <p className="ExpPro-inter-top-text" >Expérience-Professionnelle.txt</p>
            </div>
            <div className="ExpPro-inter-back1-bottom">

              <div className="ExpPro-inter-back1-bottom-item1">
                <div className="ExpPro-inter-back1-bottom-item1-title" >Tagamuta Valley</div>
                <div className="ExpPro-inter-back1-bottom-item1-text">
                  <div className="ExpPro-inter-back1-bottom-item">
                    <div className="ExpPro-inter-back1-bottom-item1-year">Stage Fin d'étude</div>
                    <div className="ExpPro-inter-back1-bottom-item1-text1">Du Février à Mai 2022, Tunis</div>
                  </div>
                  <div className="ExpPro-inter-back1-bottom-item1-text2">
                    Le projet est une plateforme électronique qui facilite la prise en charge des patients dans un cabinet médical ou une clinique.
                    Elle offre une meilleure gestion des patients, de leurs dossiers médicaux et de la prise de rendez-vous avec leurs médecins ainsi
                    que la communication entre les différents acteurs dans un milieu hospitalier. 
                  </div>
                  <div className="ExpPro-inter-back1-bottom-item7">
                    <div className="ExpPro-inter-back1-bottom-item1-text7">Logiciels</div>
                    <div className="ExpPro-inter-back1-bottom-item1-year7">VS Code, Figma</div>
                  </div>
                  <div className="ExpPro-inter-back1-bottom-item7">
                    <div className="ExpPro-inter-back1-bottom-item1-text7">Technologies</div>
                    <div className="ExpPro-inter-back1-bottom-item1-year7">MERN Stack</div>
                  </div>
                  <div className="ExpPro-inter-back1-bottom-item7">
                    <div className="ExpPro-inter-back1-bottom-item1-text7">Gestion de projet</div>
                    <div className="ExpPro-inter-back1-bottom-item1-year7">Jira, SCRUM, Slack</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </Draggable>
        </div>
      </div>
  );
}
export default ExpPro;