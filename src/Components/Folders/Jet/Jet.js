import React, { useState, useEffect } from "react";
import './Jet.css';
import Draggable from 'react-draggable';
import JET1 from "../../../Assets/JET1.jpg"
import JET2 from "../../../Assets/JET2.jpg"
import JET3 from "../../../Assets/JET3.jpg"
import JET4 from "../../../Assets/JET4.jpg"





function Orenda({ hidden, onChangeHidden3}) {

  const handleclose2 = () => {
    onChangeHidden3(true);
  }

  const handleZ=(event)=>{ 
    let z = localStorage.getItem('zindex');
    z++;
    document.getElementById("jet-element").setAttribute('style', `z-index: ${z}`);
    localStorage.setItem('zindex', z)
}

  return (
    <div className="">
      <div className="Jet-page-container" hidden={hidden}  id="jet-element" onClick={(event)=>handleZ(event)}>
      <Draggable  handle="#handle">
        <div className="Jet-nav-container" >
              <div id="handle" className="Jet-inter-back1-top">
              <div className='Jet-inter-buttons'>
                  <div className='Jet-inter-buttons-red'   onClick={handleclose2}></div>
                  <div className='Jet-inter-buttons-yellow'></div>
                  <div className='Jet-inter-buttons-green' ></div>
              </div>
              <p className="Jet-inter-top-text" > Junior Entreprises Tunisie </p>
              </div>
              <div className="Jet-inter-back1-bottom">
                  <div class="galerie2">
                      <div class="item2"> 
                         <img src={JET1} alt="Image 1" />
                      </div>
                      <div class="item2"> 
                         <img src={JET2} alt="Image 1" />
                      </div>
                      <div class="item2"> 
                         <img src={JET3} alt="Image 1" />
                      </div>
                      <div class="item2"> 
                         <img src={JET4} alt="Image 1" />
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