import React, { useState } from "react";
import Draggable from 'react-draggable';
import './ExpProVid.css';
import video from  '../../Common/video.mp4';


function ExpProVid({ hidden, onChangeHidden3 }) {

    const handleclose2 = () => {
      onChangeHidden3(true);
    }

    const handleZ=(event)=>{ 
      let z = localStorage.getItem('zindex');
      z++;
      //document.getElementById("ExpProVid-element").setAttribute('style', `z-index: ${z}`);
      document.getElementsByClassName("ExpProVid-inter-container")[0].setAttribute('style', `z-index: ${z}`);

      localStorage.setItem('zindex', z)
  }

  return (
    <div className="">
      <div className="ExpProVid-page-container"  hidden={hidden} id="ExpProVid-element" onClick={(event)=>handleZ(event)} >
        <Draggable  handle="#handle" >
        <div className="ExpProVid-inter-container" style={{zIndex: 60}}>
            <div id="handle" className="ExpProVid-inter-back1-top">
              <div className='ExpProVid-inter-buttons'>
                <div className='ExpProVid-inter-buttons-red'   onClick={handleclose2} ></div>
                <div className='ExpProVid-inter-buttons-yellow' onClick={handleclose2} ></div>
                <div className='ExpProVid-inter-buttons-green'  onClick={handleclose2}></div>
              </div>
            </div>
            <div className="ExpProVid-inter-back1-bottom">
              <div className="ExpProVid-inter-back1-bottom-item1">
                <video controls  className="ExpProVid-video">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
        </div>
        </Draggable>
        </div>
      </div>
  );
}
export default ExpProVid;