import { useEffect, useRef, useCallback } from 'react';
import { Audio } from './Audio.jsx';

export const AudioList = ({ audios, isPlaying, setIsPlaying, isLoop }) => {
  const cursorRef = useRef(null);
  const intervalRef = useRef(null);

  const handleDrag = ({ target }) => {
    audios.forEach((audio) => {
      audio.track.currentTime = target.value;
    });
  };

  const initCursorRef = useCallback(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        cursorRef.current.value = audios[0].track.currentTime;
        if (cursorRef.current.value === '17' && !isLoop) {
          audios.forEach((audio) => {
            audio.track.currentTime = 0;
            audio.track.pause();
          });
          cursorRef.current.value = '0';
          setIsPlaying(false);
        }
      }, 1000);
    } else if (!isPlaying && audios[0].track.currentTime === 0) {
      cursorRef.current.value = '0';
    }
  }, [audios, isPlaying, isLoop, setIsPlaying]);

  useEffect(() => {
    initCursorRef();

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, isLoop, initCursorRef]);

  return (
    <main className="flex col">
      {audios.map((audio, idx) => {
        return <Audio key={idx} audio={audio} />;
      })}
      <input
        type="range"
        name=""
        className="audio-line"
        defaultValue="0"
        min="0"
        max="17"
        onChange={(event) => handleDrag(event)}
        ref={cursorRef}
      />
    </main>
  );
};
