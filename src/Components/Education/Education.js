import React, { useState } from "react";
import './Education.css';
import Draggable from 'react-draggable';
import fichier from '../../Assets/fichier.png'


function Education() {
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
        document.getElementById("education-element").setAttribute('style', `z-index: ${z}`);
        localStorage.setItem('zindex', z)
    }
    
      
  return (
    <div className="">
    <div className="">
      <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
        <img src={fichier} alt="google"   className="desktop-img"/>                
      </div>
    </div>
    <div className="Education-page-container" hidden={hidden} id="education-element" onClick={(event)=>handleZ(event)}>
    <Draggable  handle="#handle" >
        <div className="Education-inter-container1" >
        <div className="Education-inter-container2" id="Education-element1" >
            <div id="handle" className="Education-inter-back1-top">
            <div className='Education-inter-buttons'>
                <div className='Education-inter-buttons-red'  onClick={handleclose} ></div>
                <div className='Education-inter-buttons-yellow' onClick={handleclose} ></div>
                <div className='Education-inter-buttons-green' onClick={handleclose} ></div>
            </div>
            <p className="Education-inter-top-text" >Education.txt</p>
            </div>
            <div className="Education-inter-back1-bottom">
                <div className="Education-inter-back1-bottom-item1">
                    <div className="Education-inter-back1-bottom-item1-year">2023 - 2025 </div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12 "> CYCLE D’INGÉNIEUR EN INFORMATIQUE</div>
                    <div className="Education-inter-back1-bottom-item1-text12 "> EN APPRENTISSAGE 2ÈME ANNÉE </div>
                    <div className="Education-inter-back1-bottom-item1-text2"> ESIEA, ingénieur·e·s d’un numérique utile</div>
                    </div>
                </div>
                <div className="Education-inter-back1-bottom-item2">
                    <div className="Education-inter-back1-bottom-item1-year">2022 - 2023</div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12">CYCLE D’INGÉNIEUR EN INFORMATIQUE </div>                  
                      <div className="Education-inter-back1-bottom-item1-text12">1ÈRE ANNÉE </div>
                    <div className="Education-inter-back1-bottom-item1-text2">Institut des Sciences et Techniques des Yvelines - ISTY</div>
                    </div>
                </div>
                <div className="Education-inter-back1-bottom-item3">
                    <div className="Education-inter-back1-bottom-item1-year">2019 - 2022</div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12 "> LICENCE EN INFORMATIQUE ET MULTIMÉDIA</div>
                    <div className="Education-inter-back1-bottom-item1-text2">Institut Supérieur des Arts Multimédia de la Manouba - ISAM </div>
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
export default Education;