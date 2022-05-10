import React, { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { ToggleButton } from "@mui/material";
import "./Channel.css";

type ChannelProps = {
  onMute: (audio: HTMLAudioElement) => void;
  track: Track;
};

function Channel({ onMute, track }: ChannelProps) {
  const [mute, setMute] = useState(false);

  const toggleMute = () => {
    setMute(() => !mute);
    onMute(track.audio);
  };

  return (
    <div className="track__container">
      <div className="track__details">
        <ToggleButton value="check" selected={mute} onChange={toggleMute}>
          {mute ? (
            <VolumeOffIcon fontSize="small" />
          ) : (
            <VolumeUpIcon fontSize="small" />
          )}
        </ToggleButton>
        <p className="track__name">{track.name}</p>
      </div>
      {/*@ts-ignore*/}
      <audio src={track.audio} preload="metadata" loop></audio>
    </div>
  );
}

export default Channel;
