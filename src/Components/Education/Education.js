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
                <div className='Education-inter-buttons-yellow'></div>
                <div className='Education-inter-buttons-green'></div>
            </div>
            <p className="Education-inter-top-text" >Education.txt</p>
            </div>
            <div className="Education-inter-back1-bottom">
                <div className="Education-inter-back1-bottom-item1">
                    <div className="Education-inter-back1-bottom-item1-year"> Sept 2022</div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12 "> Cycle d’ingénieur en informatique</div>
                    <div className="Education-inter-back1-bottom-item1-text2"> Institut des Sciences et Techniques des Yvelines</div>
                    </div>
                </div>
                <div className="Education-inter-back1-bottom-item2">
                    <div className="Education-inter-back1-bottom-item1-year">2019 - 2022</div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12">Licence informatique et multimédia </div>
                    <div className="Education-inter-back1-bottom-item1-text2">Institut supérieur des arts multimédia de La Manouba</div>
                    </div>
                </div>
                <div className="Education-inter-back1-bottom-item3">
                    <div className="Education-inter-back1-bottom-item1-year">2018 - 2019</div>
                    <div className="Education-inter-back1-bottom-item1-text">
                    <div className="Education-inter-back1-bottom-item1-text12 "> Baccalauréat en mathématiques</div>
                    <div className="Education-inter-back1-bottom-item1-text2">Lycée Beb El khadhra </div>
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