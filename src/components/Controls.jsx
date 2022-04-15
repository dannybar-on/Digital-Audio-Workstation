import { ControlBtn } from './ControlBtn';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

export const Controls = ({ funcs, isLoop, isPlaying }) => {
  const getClassName = (idx) => {
    let className = 'audio-control flex align-center justify-center';
    className += idx === funcs.length - 1 && isLoop ? ' active' : '';

    return className;
  };

  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return isPlaying ? <FaPause /> : <FaPlay />;
      case 1:
        return <FaStop />;
      case 2:
        return <FiRepeat />;
      default:
        return '';
    }
  };

  return (
    <footer className="flex align-center justify-center">
      {funcs.map((func, idx) => {
        return (
          <ControlBtn
            key={idx}
            onClick={func}
            className={getClassName(idx)}
            icon={getIcon(idx)}
          />
        );
      })}
    </footer>
  );
};
