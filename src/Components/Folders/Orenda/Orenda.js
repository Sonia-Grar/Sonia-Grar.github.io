import React, { useState, useEffect } from "react";
import './Orenda.css';
import Draggable from 'react-draggable';
import orenda1 from "../../../Assets/orenda1.jpg"
import orenda2 from "../../../Assets/orenda2.jpg"
import orenda3 from "../../../Assets/orenda3.jpg"
import orenda4 from "../../../Assets/orenda4.jpg"
import orenda5 from "../../../Assets/orenda5.jpg"
import orenda6 from "../../../Assets/orenda6.jpg"
import orenda7 from "../../../Assets/orenda7.jpg"
import orenda8 from "../../../Assets/orenda8.jpg"
import orenda9 from "../../../Assets/orenda9.jpg"




function Orenda({ hidden, onChangeHidden2}) {

  const handleclose2 = () => {
    onChangeHidden2(true);
  }

  const handleZ=(event)=>{ 
    let z = localStorage.getItem('zindex');
    z++;
    document.getElementById("orenda-element").setAttribute('style', `z-index: ${z}`);
    localStorage.setItem('zindex', z)
}

  return (
    <div className="">
      <div className="Orenda-page-container" hidden={hidden}  id="orenda-element" style={{'zIndex': 60}} onClick={(event)=>handleZ(event)}>
      <Draggable  handle="#handle">
        <div className="Orenda-nav-container" >
              <div id="handle" className="Orenda-inter-back1-top">
              <div className='Orenda-inter-buttons'>
                  <div className='Orenda-inter-buttons-red'   onClick={handleclose2}></div>
                  <div className='Orenda-inter-buttons-yellow'></div>
                  <div className='Orenda-inter-buttons-green' ></div>
              </div>
              <p className="Orenda-inter-top-text" >Orenda Junior Entreprise</p>
              </div>
              <div className="Orenda-inter-back1-bottom">
                  <div class="galerie">
                      <div class="item"> 
                         <img src={orenda2} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda3} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda1} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda9} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda4} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda6} alt="Image 1" />
                      </div>
                      <div class="item"> 
                         <img src={orenda5} alt="Image 1" />
                      </div>

                      <div class="item"> 
                         <img src={orenda8} alt="Image 1" />
                      </div>

                      <div class="item"> 
                         <img src={orenda7} alt="Image 1" />
                      </div>

                  </div>
              </div>
        </div>
      </Draggable>
    </div>
    </div>
  );
}
export default Orenda;