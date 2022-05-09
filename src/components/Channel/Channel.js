import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { ToggleButton } from "@mui/material";
import "./Channel.css";

const Channel = ({ title, src }) => {
  const [muted, setMuted] = useState(false);
  console.log(src);
  return (
    <AudioPlayer
      autoPlay
      src={src}
      header={title}
      onPlay={(e) => console.log("onPlay")}
      customControlsSection={[
        RHAP_UI.MAIN_CONTROLS,
        <ToggleButton
          value="check"
          selected={muted}
          onChange={() => {
            setMuted(!muted);
          }}
        >
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </ToggleButton>,
      ]}
    />
  );
};

export default Channel;
