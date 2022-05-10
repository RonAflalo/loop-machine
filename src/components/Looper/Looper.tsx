import { useState, useEffect } from "react";
import Audios from "../audio_files";
import ChannelList from "../ChannelLIst/ChannelList";
import Buttons from "../Buttons/Buttons";
import "./Looper.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Looper = () => {
  const [timeSong, setTimeSong] = useState(0);
  const [currentTime, setCurrTime] = useState(0);
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
  const moveCursor = () => {
    Audios.forEach(({ audio }) => {
      audio.currentTime = currentTime;
    });
    setCurrTime(currentTime);
  };
  return (
    <>
      <div className="player__container">
        <h1 className="player__title">LOOPER</h1>
        <ProgressBar
          moveCursor={moveCursor}
          currentTime={currentTime}></ProgressBar>
        <ChannelList tracks={Audios} onMute={toggleMute} />
        <Buttons
          playPause={togglePlay}
          isPlaying={isPlay}
          stopPlay={stopPlay}
          toggleLoop={toggleLooping}
          currentTime={currentTime}
          isLooping={isLooping}
        />
      </div>
    </>
  );
};

export default Looper;
