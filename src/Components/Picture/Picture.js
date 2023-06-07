import React, { useState, useEffect } from "react";
import './Picture.css';
import pic from '../../Assets/pic.jpg'
import picture from '../../Assets/picture.png'
import Draggable from 'react-draggable';

function Picture() {
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
    document.getElementById("Picture-element").setAttribute('style', `z-index: ${z}`);
    localStorage.setItem('zindex', z)
}

  return (
    <div className="">
      <div>
        <div>
            <div className="Menu-inter-container-item" id="pic-icon-element" onClick={handleopen}>
              <img src={picture} alt="picture"  className="desktop-img"/>
            </div>
            </div>
      </div>
      <div className="Picture-page-container" hidden={hidden}  id="Picture-element" onClick={(event)=>handleZ(event)}>
      <Draggable  handle="#handle">
        <div className="Picture-nav-container1" >
          <div className="Picture-nav-container2" >
              <div id="handle" className="Picture-inter-back1-top">
              <div className='Picture-inter-buttons'>
                  <div className='Picture-inter-buttons-red'   onClick={handleclose}></div>
                  <div className='Picture-inter-buttons-yellow'   onClick={handleclose}></div>
                  <div className='Picture-inter-buttons-green'   onClick={handleclose} ></div>
              </div>
              <p className="Picture-inter-top-text" >Image.jpg</p>
              </div>
              <div className="Picture-inter-back1-bottom"></div>
          </div>
        </div>
      </Draggable>
      </div>
    </div>
  );
}
export default Picture;