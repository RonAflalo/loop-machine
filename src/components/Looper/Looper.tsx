import { useState, useEffect } from "react";
import Audios from "../audio_files";
import ChannelList from "../ChannelLIst/ChannelList";
import Buttons from "../Buttons/Buttons";
import "./Looper.css";

const Looper = () => {
  const [currTime, setCurrTime] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const togglePlay = () => {
    const currentValue = isPlay;
    setPlay(!currentValue);

    if (currentValue) {
      Audios.forEach(({ audio }) => {
        audio.pause();
      });
    } else {
      Audios.forEach(({ audio }) => {
        audio.play();
        console.log(audio);
      });
    }
  };

  const stopPlay = () => {
    setPlay(false);
    Audios.forEach(({ audio }) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const toggleLooping = () => {
    const prevValue = isLooping;
    setIsLooping(!prevValue);
    Audios.forEach(({ audio }) => {
      audio.loop = !audio.loop;
    });
  };

  const toggleMute = (audio: HTMLAudioElement) => {
    audio.muted = !audio.muted;
  };

  // const moveCursor = () => {
  //   Audios.forEach(({ audio }) => {
  //     audio.currentTime = progressBar.current.value;
  //   });
  //   setCurrTime(progressBar.current.value);
  // };

  return (
    <>
      <h1 className="player__title">MOVEO LOOP MACHINE</h1>
      <div className="player__container">
        {/* <input
          className={
            isPlay ? "player__range" : "player__range player__range_inactive"
          }
          onChange={changeRange}
          type="range"
          min="0"
          max="17"
          defaultValue="0"
          ref={progressBar}
        /> */}
        <ChannelList tracks={Audios} onMute={toggleMute} />
        <Buttons
          playPause={togglePlay}
          isPlaying={isPlay}
          stopPlay={stopPlay}
          toggleLoop={toggleLooping}
          currentTime={currTime}
          isLooping={isLooping}
        />
      </div>
    </>
  );
};

export default Looper;
