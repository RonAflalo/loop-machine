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

const Buttons: React.FC<ButtonsProps> = ({
  playPause,
  isPlaying,
  stopPlay,
  toggleLoop,
  currentTime,
  isLooping,
}) => {
  return (
    <div className="buttons">
      <div className="buttons__button-container">
        <button
          className={isPlaying ? "buttons__button playing" : "buttons__button"}
          onClick={playPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button className="buttons__button" onClick={stopPlay}>
          <StopIcon />
        </button>
        <button
          className={!isLooping ? "buttons__button" : "buttons__button active"}
          onClick={toggleLoop}>
          <LoopIcon />
        </button>
      </div>
      <div className="buttons__time-container">
        <div className="buttons__time">{calculateTime(currentTime)}</div>
        {/* used the lower div to debugg time left */}
        {/* <div>{(!isNaN(duration) && calculateTime(duration)) || '00:00'}</div> */}
      </div>
    </div>
  );
};

export default Buttons;
