import { SoundSourceOptions } from '@tone-daw-core/dist';

export const gameboyPWM: SoundSourceOptions = {
  name: 'gameboyPWM',

  // sound source

  // pulse width modulation
  type: 'synthesizer',

  synthesizer: {
    oscillator: {
      type: 'pulse',
      width: 0.5,
    },
    detune: 0.1,
    portamento: 0.1,
  },

  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 0.2,
  },

  // decibel
  volume: 0,

  // effect chain
  effects: ['filter'],

  // effect config
  filter: {
    type: 'lowpass',
    frequency: 200,
  },
};
