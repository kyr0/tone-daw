# Tone.js Digital Audio Workstation (DAW)

A Digital Audio Workstation (DAW) that runs in every browser.

Also:
- `tone-daw-core`: The actual, non-GUI DAW core implementation
- `tone-module-fileformat`: Shall convert module file formats like `.mod`, `.s3m` and `.xm` to the internal music arrangement JSON data structure
- `chiptunes-daw`: Retro 8bit DAW UI - for chiptunes music production (serves as an end-2-end integration test for the full spectrum capabilities of `tone-daw-core`) - stores files in `tone-module-fileformat`
- `chiptunes-player`: A player for `tone-module-fileformat`, uses `tone-daw-core` internally for sound generation and comes with beautiful vizualizations (serves as an end-2-end integration test for song and effect playback)

## Current Status

Just started; Proof of Concept stage: wildly throwing ideas and code together and seeing, if that actually works

## About

This project is a love letter to music production and it's 
fundamental basics: Sound synthesis, sampling and signal routing.

It flatters with sincerity by stealing beautiful ideas from
various professional music production DAWs like Logic Pro,
Ableton Live, and FL Studio.

Roughly speaking, the goal is to have a lot of fun while developing 
the fundamental core logic that is necessary to build a modern DAW.

## Features
- Relative-time transport and playback, recording, with cycle looping
- Relative-time musical notation (e.g. 8n, 16n)
- Relative-pitch musical notation (e.g. C#4)
- Multi-track audio and MIDI recording and note access
- Per-track sound source (synthesizer, sampler) and effect chain, including bus sends
- Modular sound source configuration (including internal signal routing)
- Effect chain with built-in mid/side signal routing
- Per-track automation of every parameter that belong to the sound source, effect chain, notes
- Automation to come with various curve types
- Per-track stereo and spacial panning and gain
- Global busses with multiplexed signal routing support
- Master bus (sums the connected global busses and tracks) with a full-featured effect chain
- MIDI input support for recording (active track)
- Audio stem bouncing as WAV and MP3
- Full API interface (to be used by other JavaScript/TypeScript web apps, like games, DAW UIs)
- Full preset support for sound sources (say: modular synthesizer/sampler setups), tracks (sound source + effect chain and track mixing setup), project templates (all tracks + busses, including master bus) and arrangements (project template + loaded composition notes and automation setup for all tracks)
- Built-in audio signal effects:
  - Compressor / Limiter
  - Vibrato
  - Filter
  - EQ (3 band)
  - Plate Reverb
  - Convolution Reverb
  - Delay (Ping Pong)
  - Delay (Feedback)
  - Chorus
  - Phaser
  - Tremolo
  - WahWah
  - Bitcrusher
  - Distortion (Amp)
  - Distortion (Chebyshev)
  - Stereo Widener
  - Pitch Shifter

This project aims to implement the core logic each DAW has to have,
primarily without any UI. However, part of this project is to provide
a sample implementation for a simple DAW UI and a corresponding music player: 
The 8bit DAW - a love letter to 80's and 90's chiptunes / tracker music.

These sub-projects shall provide the optimal end-to-end / integration test
for all the features the core DAW implementation supports and help developers
to build their own projects on top of this library.

## I want to work with this DAW! How do I do that?

Sorry, the audience for this project is developers with a fable for music,
audio, signal processing and music production.

## I want feature XYZ to be implemented by you.

It's really cool that you have some nice idea for this project. 
However, this project is free of concrete plans. Everybody involved does
this in their spare time to have fun while developing audio software and
make music production become a reality in browsers :)

This means, every developer involved follows their own plans and does 
implement whatever they want.

If you'd like to see a specific feature being implemented here, please
feel very welcome to implement it by yourself. If you aren't a developer
yet, this is not an issue at all. It's actually far easier to learn
software development, than most people expect. 

Please join our [Gitter chat room](https://gitter.im/tone-daw/community) if you'd like to contribute. We're more than happy to make sure that you're having fun hacking this project.

## How do I start to hack this project?

See the setup and build instructions. [Coming soon]

## Is there any documentation on the architecture?

Of course, please see the technical documentation. [Coming soon]

## What tone-daw is NOT

We're not aiming to build a replacement for professional music production software. 
Web Audio is not (yet) capable of providing the same performance a native music production suite can offer. 
While this project may lead to software that is very capable for music production in various genres,
having fun developing this is our primary goal and will always be. We're not going to accept any 
pressure in implementing specific features or fixing bugs, but everyone is welcome to contribute.

## License

MIT, Open Source, see LICENSE.md
