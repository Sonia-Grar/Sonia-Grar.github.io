import React, { useState , useEffect} from "react";
import './Music.css';
import music from '../../Assets/music.png'
import useSound from 'use-sound';
import soundUrl from  '../../Common/audio.mp3';

function Music() {
  const [play, { stop }] = useSound(soundUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("zindex", 50);
    
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  return (
    <div className="">
    <div className="">
      {isPlaying ? (
          <div className="Menu-inter-container-item" onClick={handleStop}>
            <img src={music} alt="music" className="desktop-img"/>   
          </div>
        ) : (
          <div className="Menu-inter-container-item" onClick={handlePlay}>
            <img src={music} alt="music" className="desktop-img"/>   
          </div>
        )}
    </div>
    </div>
  );
}
export default Music;