import React from "react";
import Channel from "../Channel/Channel";
import "./ChannelList.css";

type ChannelListProps = {
  tracks: Track[];
  onMute: (audio: HTMLAudioElement) => void;
};

function ChannelList({ tracks, onMute }: ChannelListProps) {
  return (
    <div className="tracks__container">
      <ul>
        {tracks.map((trackObj, index) => (
          <li className="track__item" key={index}>
            <Channel onMute={onMute} track={trackObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChannelList;
