import React, { useState } from "react";
import './Code.css';
import Draggable from 'react-draggable';
import code from '../../Assets/code.png'

function Code() {
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
    document.getElementById("code-element").setAttribute('style', `z-index: ${z};`);
    localStorage.setItem('zindex', z)
  }
  const handleanimation=()=>{ 
    document.getElementById("code-element").classList.add('animation')
  }

  return (
    <div className="">
    <div className="">
      <div className="Menu-inter-container-item" id="icon-element" onClick={handleopen}>
        <img src={code} alt="google"   className="desktop-img"/>                
      </div>
    </div>
    <div className="code-page-container" hidden={hidden} id="code-element" onClick={(event)=>handleZ(event)}>
      <Draggable  handle="#handle">
      <div className="code-inter-container1">
        <div className="code-inter-container2" id="code-element1">
          <div id="handle" className="code-inter-back1-top">
            <div className='code-inter-buttons'>
              <div className='code-inter-buttons-red' onClick={handleclose}></div>
              <div className='code-inter-buttons-yellow'></div>
              <div className='code-inter-buttons-green'></div>
            </div>
            <p className="code-inter-top-text" >Programmation.html</p>
          </div>
          <div className="code-inter-back1-bottom">
            <div className="code-inter-back1-bottom-item1"> 
              <span className="code-inter-back1-bottom-item1-s"> 15</span> <span className="code-inter-back1-bottom-item1-s"> 16</span> 
              <span className="code-inter-back1-bottom-item1-s"> 17</span> <span className="code-inter-back1-bottom-item1-s"> 18</span>
              <span className="code-inter-back1-bottom-item1-s"> 19</span> <span className="code-inter-back1-bottom-item1-s"> 20</span> 
              <span className="code-inter-back1-bottom-item1-s"> 21</span> <span className="code-inter-back1-bottom-item1-s"> 22</span> 
              <span className="code-inter-back1-bottom-item1-s"> 23</span> <span className="code-inter-back1-bottom-item1-s"> 24</span>
            </div>
            <div className="code-inter-back1-bottom-item2">
              <div className="code-inter-back1-bottom-item2-i1"></div>
              <div className="code-inter-back1-bottom-item2-i2"></div>
              <div className="code-inter-back1-bottom-item2-item1">
                <div className="code-inter-back1-bottom-item2-i4"></div>
                <div className="code-inter-back1-bottom-item2-i3"></div>
              </div>
            </div>
            <div className="code-inter-back1-bottom-item3">
              <div>
                <span className="tags">&lt;</span><span className="tag-name">h1</span><span className="class-name"> class </span>
                 = <span className="class-inter-name">"Compétences" </span><span className="tags">&gt;</span> 
                 <br />
                 <span className="prog">Dévéloppement </span>
                 <br />
                 <span className="tags">&lt;/</span><span className="tag-name">h1</span><span className="tags">&gt;</span> 
                <div><span className="tags">&lt;</span><span className="tag-name">ul</span><span className="tags">&gt;</span> </div>
                <div className="li-css">
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      HTML 
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      CSS3
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      JavaScript
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      Mongo Db
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      Express Js
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      React Js
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                  <div>
                    <span className="tags">&lt;</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                      Node Js 
                    <span className="tags">&lt;/</span><span className="tag-name">li</span><span className="tags">&gt;</span>
                  </div>
                </div>
                <div><span className="tags">&lt;/</span><span className="tag-name">ul</span><span className="tags">&gt;</span> </div>
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
export default Code;