import React from "react";
import Channel from "../Channel/Channel";
import "./ChannelList.css";
import { Rainbow } from "./rainbow";

type ChannelListProps = {
  audios: AudioObj[];
  onMute: (audio: HTMLAudioElement) => void;
  children: JSX.Element;
};

const ChannelList: React.FC<ChannelListProps> = ({
  audios,
  onMute,
  children,
}) => {
  const rainbow = new Rainbow();
  rainbow.setNumberRange(0, audios.length);
  rainbow.setSpectrum("blue", "pink", "red");

  return (
    <div className="channels__container">
      {children}
      <ul>
        {audios.map((audioObj, index) => (
          <li
            className="channel__item"
            style={{ backgroundColor: "#" + rainbow.colourAt(index) }}
            key={index}>
            <Channel onMute={onMute} audioObj={audioObj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
