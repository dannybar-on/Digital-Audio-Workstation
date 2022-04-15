import { useState, useEffect } from 'react';

import { audioService } from '../services/audio.service';
import { AudioList } from '../components/AudioList';
import { Controls } from '../components/Controls';
export const DawApp = () => {
  const [audios, setAudios] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setAudios(audioService.getAudios());
  }, []);

  const handleTogglePlaying = () => {
    audios.forEach(({ track }) => {
      if (!isPlaying) {
        track.play();
      } else {
        track.pause();
      }
    });
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleStopPlaying = () => {
    audios.forEach(({ track }) => {
      track.pause();
      track.currentTime = 0;
    });
    setIsPlaying(false);
  };

  const handleLoop = () => {
    setIsLoop((prevIsLoop) => !prevIsLoop);
    audios.forEach((audio) => {
      audio.track.loop = !audio.track.loop;
    });
  };

  if (!audios) return <div>Loading...</div>;
  return (
    <>
      <AudioList
        audios={audios}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isLoop={isLoop}
      />
      <Controls
        funcs={[handleTogglePlaying, handleStopPlaying, handleLoop]}
        audios={audios}
        isPlaying={isPlaying}
        isLoop={isLoop}
      />
    </>
  );
};
