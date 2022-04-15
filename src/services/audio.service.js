import alltrack from '../assets/audio/ALL TRACK.mp3';
import tambourine from '../assets/audio/_tambourine_shake_higher.mp3';
import bvoc from '../assets/audio/B VOC.mp3';
import drums from '../assets/audio/DRUMS.mp3';
import hehevoc from '../assets/audio/HE HE VOC.mp3';
import highvoc from '../assets/audio/HIGH VOC.mp3';
import jibrish from '../assets/audio/JIBRISH.mp3';
import lead from '../assets/audio/LEAD 1.mp3';
import uuhovoc from '../assets/audio/UUHO VOC.mp3';

const gAudios = [
  {
    track: new Audio(alltrack),
    color: '#ff7b00',
    name: 'All Track',
  },
  {
    track: new Audio(tambourine),
    color: '#ff8800',
    name: 'Tambourine Shake',
  },
  {
    track: new Audio(bvoc),
    color: '#ff9500',
    name: 'B Voc',
  },
  {
    track: new Audio(drums),
    color: '#ffa200',
    name: 'Drums',
  },
  {
    track: new Audio(hehevoc),
    color: '#ffaa00',
    name: 'He He Voc',
  },
  {
    track: new Audio(highvoc),
    color: '#ffb700',
    name: 'High Voc',
  },
  {
    track: new Audio(jibrish),
    color: '#ffc300',
    name: 'Jibrish',
  },
  {
    track: new Audio(lead),
    color: '#ffd000',
    name: 'Lead 1',
  },
  {
    track: new Audio(uuhovoc),
    color: '#ffdd00',
    name: 'Uuho Voc',
  },
];

const getAudios = () => {
  return gAudios;
};

export const audioService = {
  getAudios,
};
