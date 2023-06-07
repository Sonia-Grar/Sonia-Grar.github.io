import React, { useState } from "react";
import './Design.css';
import design1 from '../../Assets/design1.png'
import design2 from '../../Assets/design2.png'
import design3 from '../../Assets/design3.png'
import design from '../../Assets/design.png'
import Draggable from 'react-draggable';

function Design() {
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
    document.getElementById("design-element").setAttribute('style', `z-index: ${z};`);
    localStorage.setItem('zindex', z)
  }
  const handleanimation=()=>{ 
    document.getElementById("design-element").classList.add('animation')
  }
  return (
    <div className="">
    <div className="">
      <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
        <img src={design} alt="google"   className="desktop-img"/>                
      </div>
    </div>
    <div className="Design-page-container" hidden={hidden} id="design-element" onClick={(event)=>handleZ(event)}>
      <Draggable  handle="#handle">
      <div className="des-inter-container1" >
          <div className="des-inter-container2" id="design-element1" >
          <div id="handle" className="des-inter-back1-top">
            <div className='des-inter-buttons'>
              <div className='des-inter-buttons-red'  onClick={handleclose} ></div>
              <div className='des-inter-buttons-yellow'></div>
              <div className='des-inter-buttons-green'></div>
            </div>
            <p className="des-inter-top-text" >Design.ai</p>
          </div>
          <div className="des-inter-back1-bottom">
            <div className="des-inter-back1-bottom-item1"> 
              <img src={design1} alt="design"  className="des-inter-back1-bottom-item1-img"/>
            </div>
            <div className="des-inter-back1-bottom-item2">
              <img src={design3} alt="design"  className="des-inter-back1-bottom-item2-img"/>
            </div>
            <div className="des-inter-back1-bottom-item3">
              <img src={design2} alt="design"  className="des-inter-back1-bottom-item3-img"/>
            </div>
          </div>
      </div>
      </div>
      </Draggable>
    </div>
    </div>
    
  );
}
export default Design;