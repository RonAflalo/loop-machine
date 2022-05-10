import { useState, useRef, useEffect } from "react";
import Audios from "../audio_files";
import ChannelList from "../ChannelLIst/ChannelList";
import Buttons from "../Buttons/Buttons";
import "./Looper.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Looper: React.FC = () => {
  const [currentTime, setCurrTime] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();

  const progressBarRef = useRef<HTMLInputElement>(null);
  const MAX_AUDIO_DURATION = 17;

  const togglePlay = () => {
    const currentValue = isPlay;
    setPlay(!currentValue);

    if (currentValue) {
      Audios.forEach(({ audio }) => {
        audio.pause();
      });
      pauseThumb();
    } else {
      Audios.forEach(({ audio }) => {
        audio.play();
      });
      play();
    }
  };

  const stopPlay = () => {
    setPlay(false);
    Audios.forEach(({ audio }) => {
      audio.pause();
      audio.currentTime = 0;
    });
    stopThumb();
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

  const play = () => {
    if (intervalID !== undefined) return;
    let i = currentTime;
    const id = setInterval(() => {
      if (i === MAX_AUDIO_DURATION) {
        i = 0;
        setCurrTime(i);
        if (!Audios[0].audio.loop) {
          clearInterval(id);
          return;
        }
      }
      setCurrTime(i);
      if (progressBarRef.current !== null) {
        i = Audios[0].audio.currentTime;
        progressBarRef.current.value = `${i}`;
      }
    }, 500);
    setIntervalID(id);
  };

  const stopThumb = () => {
    intervalID && clearInterval(intervalID);
    setIntervalID(undefined);
    progressBarRef.current && (progressBarRef.current.value = "0");
    setCurrTime(0);
  };

  const pauseThumb = () => {
    intervalID && clearInterval(intervalID);
    setIntervalID(undefined);
  };

  const moveCursor = () => {
    Audios.forEach(({ audio }) => {
      if (progressBarRef.current !== null)
        audio.currentTime = parseInt(progressBarRef.current.value);
    });
    progressBarRef.current &&
      setCurrTime(parseInt(progressBarRef.current.value));
    pauseThumb();
    setTimeout(() => {
      play();
    }, 200);
  };
  useEffect(() => {
    if (currentTime >= MAX_AUDIO_DURATION && !isLooping) {
      setPlay(false);
    }
  }, [currentTime, isLooping]);

  return (
    <>
      <div className="looper__container">
        <h1 className="looper__title">LOOPER</h1>
        <ChannelList audios={Audios} onMute={toggleMute}>
          <ProgressBar
            max={MAX_AUDIO_DURATION}
            moveCursor={moveCursor}
            progressBarRef={progressBarRef}></ProgressBar>
        </ChannelList>
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
