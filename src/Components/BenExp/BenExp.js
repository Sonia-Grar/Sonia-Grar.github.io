import React, { useState } from "react";
import './BenExp.css';
import Draggable from 'react-draggable';
import fichier from '../../Assets/fichier.png'


function BenExp() {
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
    document.getElementById("BenExp-element").setAttribute('style', `z-index: ${z};`);
    localStorage.setItem('zindex', z)
  }

  return (
    <div className="">
    <div className="">
      <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
        <img src={fichier} alt="google"   className="desktop-img"/>                
      </div>
    </div>
    <div className="ExpBen-page-container" hidden={hidden} id="BenExp-element" onClick={(event)=>handleZ(event)}>
    <Draggable  handle="#handle">
    <div className="ExpBen-inter-container1" >
        <div className="ExpBen-inter-container2" id="BenExp-element1" >
        <div id="handle" className="ExpBen-inter-back1-top">
          <div className='ExpBen-inter-buttons'>
            <div className='ExpBen-inter-buttons-red'   onClick={handleclose}></div>
            <div className='ExpBen-inter-buttons-yellow' onClick={handleclose} ></div>
            <div className='ExpBen-inter-buttons-green'  onClick={handleclose}></div>
          </div>
          <p className="ExpBen-inter-top-text" >Expérience-Bénévole.txt</p>
        </div>
        <div className="ExpBen-inter-back1-bottom">
          <div className="ExpBen-inter-back1-bottom-item1">
            <div className="ExpBen-inter-back1-bottom-item1-title" >Orenda Junior Entreprise</div>
            <div className="ExpPro-inter-back1-bottom-item1-text">
                <div className="ExpPro-inter-back1-bottom-item">
                  <div className="ExpBen-inter-back1-bottom-item1-year">Du Février à Mai 2022, Tunis</div>
                  <div className="ExpPro-inter-back1-bottom-item1-text1"></div>
                </div>
                <div className="ExpPro-inter-back1-bottom-item1-text2">
                En tant que membre j'ai développé mes compétences en gestion de projet et en travail d'équipe. 
                En tant que présidente, j'ai renforcé mes compétences en leadership et en prise de décision. 
                </div>
            </div>
          </div>
          <div className="ExpBen-inter-back1-bottom-item2">
            <div className="ExpBen-inter-back1-bottom-item1-title" >Confédération Tunisienne des Junior Entreprises</div>
            <div className="ExpPro-inter-back1-bottom-item1-text">
                <div className="ExpPro-inter-back1-bottom-item">
                  <div className="ExpBen-inter-back1-bottom-item1-year">Du Février à Mai 2022, Tunis</div>
                  <div className="ExpPro-inter-back1-bottom-item1-text1"></div>
                </div>
                <div className="ExpPro-inter-back1-bottom-item1-text2">
                Grâce à ma participation à des collaborations inter-Junior Entreprises, j'ai étendu mon réseau 
                professionnel et échangé des connaissances précieuses.
                </div>
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
export default BenExp;