import React from "react";
import "./ProgressBar.css";
type ProgressBarProps = {
  max: number;
  moveCursor: () => void;
  progressBarRef: React.RefObject<HTMLInputElement>;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  moveCursor,
  progressBarRef,
}) => {
  return (
    <input
      className="looper_thumb"
      onChange={moveCursor}
      type="range"
      min="0"
      max={max}
      defaultValue="0"
      ref={progressBarRef}
    />
  );
};
export default ProgressBar;
