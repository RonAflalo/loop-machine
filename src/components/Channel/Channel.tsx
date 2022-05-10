import React, { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpIcon from "@mui/icons-material/VolumeUpRounded";
import Icon from "@material-ui/core/Icon";
import { ToggleButton } from "@mui/material";
import "./Channel.css";

type ChannelProps = {
  onMute: (audio: HTMLAudioElement) => void;
  audioObj: AudioObj;
};

const Channel: React.FC<ChannelProps> = ({ onMute, audioObj }) => {
  const [mute, setMute] = useState(false);

  const toggleMute = () => {
    setMute(() => !mute);
    onMute(audioObj.audio);
  };

  return (
    <div className="channel_container">
      <div className="channel_details">
        <ToggleButton
          className="channel_icon"
          value="check"
          selected={mute}
          onChange={toggleMute}>
          {mute ? (
            <Icon color="primary">
              <VolumeOffIcon fontSize="medium" />
            </Icon>
          ) : (
            <Icon color="primary">
              <VolumeUpIcon fontSize="medium" />
            </Icon>
          )}
        </ToggleButton>
        <p className="channel_name">{audioObj.name}</p>
      </div>
      {/*@ts-ignore*/}
      <audio src={audioObj.audio} preload="metadata" loop></audio>
    </div>
  );
};

export default Channel;
