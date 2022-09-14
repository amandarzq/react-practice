import { cssVideo, videoContainer } from "./style";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0)
  const [totalTime, setTotalTime] = useState('00:00')
  const [isMuted, setIsmuted] = useState(false)

  useEffect(() => {
    window.setInterval(function () {
      setCurrentTime(videoRef.current?.currentTime);
    }, 1000);
  })

  const onPlayPauseVideo = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
      return
    }
    videoRef.current.pause();
    setPlay(false);
  };

  const handleLoadedMetadata = () => {
    const videoDuration = videoRef.current.duration
    setTotalTime(getTotalTime(videoDuration))
    setDuration(videoDuration)
  }

  const getTotalTime = (duration) => {
    let minute = parseInt(duration / 60)
    let second = parseInt(duration % 60)

    function stringify(time) {
      if (time < 10) {
        return `0${time}`
      }
      return time
    }

    return `${stringify(minute)}:${stringify(second)}`
  }
  
  const handleChangePlay = (event) => {
    let { value } = event.target
    videoRef.current.currentTime = value
  }

  return(
    <div>
      <div className={videoContainer}>
        <video
          ref={videoRef}
          id="video"
          className={cssVideo}
          onLoadedMetadata={handleLoadedMetadata}
          muted={Boolean(isMuted)}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <button type="button" onClick={onPlayPauseVideo}>{play ? 'pause' : 'play'}</button>
      <button type="button" onClick={() => setIsmuted(!isMuted)}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <input type="range" value={currentTime} onChange={handleChangePlay} min={0} max={parseInt(duration)}/>
      <span>{getTotalTime(currentTime)}/{totalTime}</span>
    </div>
  )
}

export default Player;
