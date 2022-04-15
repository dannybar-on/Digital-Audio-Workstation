import { useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export const Audio = ({ audio }) => {
  const [isMute, setIsMute] = useState(false);

  const handleMute = (track) => {
    track.muted = !track.muted;
  };

  const handleToggleMute = () => {
    setIsMute((prevIsMute) => !prevIsMute);
    handleMute(audio.track);
  };

  return (
    <div
      className="audio-track flex align-center"
      style={{
        backgroundColor: audio.color,
      }}
    >
      <audio src={audio.track}></audio>
      <button
        className="audio-volume flex align-center justify-center"
        onClick={handleToggleMute}
      >
        {isMute ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <div className="audio-name">{audio.name}</div>
    </div>
  );
};
