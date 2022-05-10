import React, { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeUpIcon from "@mui/icons-material/VolumeUpRounded";
import Icon from "@material-ui/core/Icon";
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
        <ToggleButton
          className="track_icon"
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
        <p className="track__name">{track.name}</p>
      </div>
      {/*@ts-ignore*/}
      <audio src={track.audio} preload="metadata" loop></audio>
    </div>
  );
}

export default Channel;
