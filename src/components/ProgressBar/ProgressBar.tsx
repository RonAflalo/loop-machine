import { ButtonPropsVariantOverrides } from "@mui/material";
import React, { useState } from "react";
import "./ProgressBar.css";
type ProgressBarProps = {
  moveCursor: () => void;
  currentTime: number;
};

const ProgressBar = ({ moveCursor, currentTime }: ProgressBarProps) => {
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

export default ProgressBar;
