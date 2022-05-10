import React from "react";
import "./Buttons.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import LoopIcon from "@mui/icons-material/Loop";

const calculateTime = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(sec % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

type ButtonsProps = {
  playPause: () => void;
  isPlaying: boolean;
  stopPlay: () => void;
  toggleLoop: () => void;
  currentTime: number;
  isLooping: boolean;
};

const Buttons = ({
  playPause,
  isPlaying,
  stopPlay,
  toggleLoop,
  currentTime,
  isLooping,
}: ButtonsProps) => {
  return (
    <div className="controls">
      <div className="controls__button-container">
        <button
          className={
            isPlaying ? "controls__button playing" : "controls__button"
          }
          onClick={playPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button className="controls__button" onClick={stopPlay}>
          <StopIcon />
        </button>
        <button
          className={
            !isLooping ? "controls__button" : "controls__button active"
          }
          onClick={toggleLoop}>
          <LoopIcon />
        </button>
      </div>
      <div className="controls__time-container">
        <div className="controls__time">{calculateTime(currentTime)}</div>
        {/* used the lower div to debugg time left */}
        {/* <div>{(!isNaN(duration) && calculateTime(duration)) || '00:00'}</div> */}
      </div>
    </div>
  );
};

export default Buttons;
