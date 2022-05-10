import React, { useState } from "react";
import "./ProgressBar.module.css";
type ProgressBarProps = {
  Audios: Track[];
  setCurrTime: (time: number) => void;
  currentTime: number;
};

const ProgressBar = ({
  Audios,
  setCurrTime,
  currentTime,
}: ProgressBarProps) => {
  const moveCursor = () => {
    Audios.forEach(({ audio }) => {
      audio.currentTime = currentTime;
    });
    setCurrTime(currentTime);
  };

  return (
    <input
      className="player__range"
      value={currentTime}
      onChange={moveCursor}
      type="range"
      min="0"
      max="17"
      defaultValue="0"
    />
  );
};
